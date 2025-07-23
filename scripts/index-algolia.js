require('dotenv').config();
const { algoliasearch } = require('algoliasearch');
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Algolia configuration
const ALGOLIA_APP_ID = 'W5X8L8ZZ8V';
const ALGOLIA_ADMIN_API_KEY = process.env.ALGOLIA_ADMIN_API_KEY; // Your Write API Key
const ALGOLIA_INDEX_NAME = 'admesh-docs';

// Initialize Algolia client
const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_ADMIN_API_KEY);

// Function to extract content from markdown files
function extractContentFromMarkdown(filePath, relativePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const { data: frontMatter, content: markdownContent } = matter(content);
  
  // Remove markdown syntax and extract plain text
  const plainText = markdownContent
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/`([^`]+)`/g, '$1') // Remove inline code
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove links, keep text
    .replace(/[#*_~]/g, '') // Remove markdown formatting
    .replace(/\n+/g, ' ') // Replace newlines with spaces
    .trim();

  // Create URL from file path
  const url = relativePath
    .replace(/\.md$/, '')
    .replace(/\/index$/, '')
    .replace(/^\//, '');

  // Extract keywords for better search
  const keywords = [
    frontMatter.title,
    frontMatter.sidebar_label,
    frontMatter.keywords,
    ...relativePath.split('/').filter(part => part !== 'index.md' && !part.endsWith('.md')),
    ...plainText.split(' ').slice(0, 20) // First 20 words as keywords
  ].filter(Boolean).join(' ');

  // Determine content category
  const category = relativePath.includes('api/') ? 'API Reference' :
                  relativePath.includes('getting-started/') ? 'Getting Started' :
                  relativePath.includes('ad-units/') ? 'Ad Units' :
                  relativePath.includes('examples/') ? 'Examples' :
                  relativePath.includes('sdk/') ? 'SDK' :
                  'Documentation';

  return {
    objectID: url || 'intro',
    title: frontMatter.title || frontMatter.sidebar_label || 'Documentation',
    content: plainText,
    url: url ? `/${url}` : '/',
    hierarchy: {
      lvl0: category,
      lvl1: frontMatter.title || frontMatter.sidebar_label || 'Documentation',
      lvl2: frontMatter.description || ''
    },
    type: 'content',
    category: category,
    keywords: keywords,
    description: frontMatter.description || plainText.substring(0, 160) + '...',
    tags: frontMatter.tags || [],
    lastModified: new Date().toISOString()
  };
}

// Function to recursively find all markdown files
function findMarkdownFiles(dir, baseDir = dir) {
  const files = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      files.push(...findMarkdownFiles(fullPath, baseDir));
    } else if (item.endsWith('.md') || item.endsWith('.mdx')) {
      const relativePath = path.relative(baseDir, fullPath);
      files.push({ fullPath, relativePath });
    }
  }

  return files;
}

// Main indexing function
async function indexDocumentation() {
  try {
    console.log('🔍 Starting Algolia indexing...');

    if (!ALGOLIA_ADMIN_API_KEY) {
      throw new Error('ALGOLIA_ADMIN_API_KEY environment variable is required');
    }

    // Find all markdown files in docs directory
    const docsDir = path.join(__dirname, '../docs');
    const markdownFiles = findMarkdownFiles(docsDir);

    console.log(`📄 Found ${markdownFiles.length} markdown files`);

    // Extract content from all files
    const records = markdownFiles.map(({ fullPath, relativePath }) => {
      console.log(`Processing: ${relativePath}`);
      return extractContentFromMarkdown(fullPath, relativePath);
    });

    // Clear existing index
    console.log('🗑️  Clearing existing index...');
    await client.clearObjects({ indexName: ALGOLIA_INDEX_NAME });

    // Upload records to Algolia
    console.log('📤 Uploading records to Algolia...');

    // Debug: Log some sample records
    console.log('📋 Sample records being indexed:');
    records.slice(0, 5).forEach(record => {
      console.log(`- ${record.title} (${record.category}) - Keywords: ${record.keywords.substring(0, 100)}...`);
    });

    const response = await client.saveObjects({ indexName: ALGOLIA_INDEX_NAME, objects: records });

    console.log(`✅ Successfully indexed ${records.length} records`);
    console.log('🎉 Algolia indexing completed!');

  } catch (error) {
    console.error('❌ Error indexing documentation:', error);
    process.exit(1);
  }
}

// Run the indexing
indexDocumentation();

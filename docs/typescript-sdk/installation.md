---
sidebar_position: 1
---

# TypeScript SDK

Simple TypeScript/Node.js integration for AdMesh.

## Install

```bash
npm install admesh
```

## Basic Usage

```typescript
import Admesh from 'admesh';

const client = new Admesh({
  apiKey: 'your_api_key_here'
});

async function getRecommendations() {
  const response = await client.recommend.getRecommendations({
    query: 'best laptop for programming',
    format: 'auto'
  });

  response.recommendations?.forEach(rec => {
    console.log(`${rec.title}: ${rec.reason}`);
  });
}

getRecommendations();
```

## Environment Variables

```bash
# .env file
ADMESH_API_KEY=your_api_key_here
```

```typescript
const client = new Admesh({
  apiKey: process.env.ADMESH_API_KEY
});
```

## Handling Personal Information (PII)

**Important**: If user queries contain personal information like names, emails, or phone numbers, you should remove them first for privacy and better recommendations.

### What is PII?
Personal Identifiable Information includes:
- Names (John Doe, Sarah Smith)
- Email addresses (john@example.com)
- Phone numbers (555-123-4567)
- Addresses, SSNs, etc.

### PII Removal Example

```typescript
import Admesh from 'admesh';

const client = new Admesh({
  apiKey: process.env.ADMESH_API_KEY
});

async function handleUserQuery(userInput: string) {
  try {
    // User query with PII
    console.log(`Original: ${userInput}`);

    // Step 1: Remove PII
    const piiResponse = await client.pii.removePii({
      text: userInput
    });

    console.log(`Cleaned: ${piiResponse.cleaned_text}`);

    // Step 2: Get recommendations with cleaned text
    const response = await client.recommend.getRecommendations({
      query: piiResponse.cleaned_text,
      format: 'auto'
    });

    // Display results
    response.recommendations?.forEach(rec => {
      console.log(`Product: ${rec.title}`);
      console.log(`Reason: ${rec.reason}`);
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

// Example usage
handleUserQuery("Hi, I'm John Doe from john@example.com and I need a good CRM for my startup");
```

## Try with Sample Data

Test the SDK with these sample queries:

```typescript
const sampleQueries = [
  "best project management tool for small teams",
  "affordable email marketing software",
  "CRM with good mobile app",
  "video conferencing tool for remote work",
  "accounting software for freelancers"
];

async function testSamples() {
  for (const query of sampleQueries) {
    console.log(`\nQuery: ${query}`);

    const response = await client.recommend.getRecommendations({
      query,
      format: 'auto'
    });

    response.recommendations?.forEach(rec => {
      console.log(`- ${rec.title}`);
    });
  }
}

testSamples();
```

## Error Handling

```typescript
try {
  const response = await client.recommend.getRecommendations({
    query: 'best laptop for programming',
    format: 'auto'
  });
} catch (error) {
  console.error('Error:', error);
}
```

## UI Components (Optional)

If you're building a React frontend, we have pre-built UI components that work seamlessly with the TypeScript SDK:

```bash
# In your React app
npm install @admesh/ui-sdk
```

```tsx
import { AdMeshProductCard } from '@admesh/ui-sdk';

// Use recommendations from TypeScript backend
function RecommendationsPage() {
  const [recommendations, setRecommendations] = useState([]);

  // Fetch from your TypeScript backend
  useEffect(() => {
    fetch('/api/recommendations')
      .then(res => res.json())
      .then(data => setRecommendations(data.recommendations));
  }, []);

  return (
    <AdMeshProductCard
      recommendations={recommendations}
      showMatchScores={true}
    />
  );
}
```

The UI SDK provides ready-to-use React components for displaying recommendations. It's completely optional - you can build your own UI or use our components, your choice.

## Next Steps

- [Quick Start Guide](../getting-started/quick-start) - Complete integration guide
- [UI SDK](../ui-sdk/installation) - Pre-built React components (optional)
- [API Reference](../api/authentication) - Full API documentation

For support, contact [mani@useadmesh.com](mailto:mani@useadmesh.com)

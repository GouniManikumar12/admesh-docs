---
title: Built with Docusaurus
description: Learn about how AdMesh documentation is powered by Docusaurus
sidebar_position: 1
---

# 🦖 Built with Docusaurus

AdMesh documentation is proudly **built with [Docusaurus](https://docusaurus.io/)**, Meta's open-source documentation platform that powers some of the world's most popular developer documentation sites.

## 🌟 Why Docusaurus?

We chose Docusaurus as our documentation platform because it perfectly aligns with our mission to provide **clear, accessible, and developer-friendly** documentation for AI agents and developers.

### ⚡ **Performance & Speed**
- **Static Site Generation** - Lightning-fast page loads
- **Optimized Builds** - Minimal bundle sizes and efficient caching
- **Progressive Web App** - Offline support and app-like experience

### 📱 **Developer Experience**
- **React-Powered** - Modern component-based architecture
- **MDX Support** - Write JSX in Markdown for interactive docs
- **Hot Reloading** - Instant preview during development
- **TypeScript Ready** - Full TypeScript support out of the box

### 🎨 **Customization & Theming**
- **Dark/Light Mode** - Automatic theme switching
- **Custom CSS** - Easy styling and branding
- **Plugin Ecosystem** - Extensible with community plugins
- **Mobile Responsive** - Perfect on all devices

### 🔍 **Built-in Features**
- **Search Integration** - Algolia DocSearch support
- **Versioning** - Multiple documentation versions
- **Internationalization** - Multi-language support
- **SEO Optimized** - Meta tags and structured data

## 🚀 **Docusaurus in Action**

### **Navigation & Structure**
Our documentation leverages Docusaurus's powerful navigation system:

```javascript
// sidebars.js - Automatic sidebar generation
module.exports = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: ['getting-started/overview', 'getting-started/quick-start'],
    },
    // ... more sections
  ],
};
```

### **Interactive Components**
We use MDX to create interactive documentation:

```mdx
import CodeBlock from '@theme/CodeBlock';

<CodeBlock language="python">
{`import admesh

client = admesh.Client(api_key="your-api-key")
recommendations = client.get_recommendations(
    query="best laptops for programming",
    intent_type="compare_products"
)`}
</CodeBlock>
```

### **Custom Styling**
Our custom CSS enhances the default Docusaurus theme:

```css
/* Custom AdMesh branding */
:root {
  --ifm-color-primary: #2e8555;
  --ifm-color-primary-dark: #29784c;
  --ifm-color-primary-darker: #277148;
}
```

## 🛠️ **Development Workflow**

### **Local Development**
```bash
# Start development server
npm start

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

### **Automatic Deployment**
Our documentation automatically deploys via GitHub Actions:

```yaml
# .github/workflows/deploy.yml
- name: Build documentation
  run: npm run build

- name: Deploy to GitHub Pages
  uses: peaceiris/actions-gh-pages@v4
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
    publish_dir: ./build
```

## 📚 **Docusaurus Resources**

### **Official Documentation**
- **[Docusaurus.io](https://docusaurus.io/)** - Official website and docs
- **[Getting Started](https://docusaurus.io/docs)** - Setup and configuration
- **[API Reference](https://docusaurus.io/docs/api)** - Complete API documentation

### **Community & Support**
- **[GitHub Repository](https://github.com/facebook/docusaurus)** - Source code and issues
- **[Discord Community](https://discord.gg/docusaurus)** - Community support
- **[Twitter](https://twitter.com/docusaurus)** - Updates and announcements

### **Showcase**
Docusaurus powers documentation for major projects:
- **React** - React.js documentation
- **Jest** - JavaScript testing framework
- **Prettier** - Code formatter
- **Supabase** - Open source Firebase alternative

## 🎯 **Benefits for AdMesh**

### **For Developers**
- **Fast Setup** - Get documentation running in minutes
- **Easy Maintenance** - Simple Markdown-based content
- **Version Control** - Git-based workflow for documentation
- **Collaborative** - Easy for team members to contribute

### **For AI Agents**
- **Structured Data** - Clean HTML output for parsing
- **Consistent Navigation** - Predictable URL structure
- **Search Friendly** - Built-in search capabilities
- **Mobile Optimized** - Accessible on all devices

### **For Users**
- **Fast Loading** - Optimized static site performance
- **Intuitive Navigation** - Clear information architecture
- **Dark Mode** - Comfortable reading experience
- **Offline Support** - PWA capabilities for offline access

## 🔮 **Future Enhancements**

We're exploring additional Docusaurus features:

- **🌍 Internationalization** - Multi-language documentation
- **📊 Analytics Integration** - Usage tracking and insights
- **🔌 Custom Plugins** - AdMesh-specific functionality
- **📱 Mobile App** - Native mobile documentation app

---

**Experience the power of Docusaurus** in our documentation! The combination of modern web technologies and developer-focused design makes it the perfect platform for AdMesh's comprehensive SDK documentation.

**Ready to build your own?** Check out the [Docusaurus documentation](https://docusaurus.io/docs) to get started! 🦖

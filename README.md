# 📚 AdMesh Documentation

> **Official documentation for AdMesh SDKs and AI agent integration**

This repository contains the complete documentation site for AdMesh, built with [Docusaurus](https://docusaurus.io/) as an open-source alternative to Mintlify. It provides comprehensive guides for AI agents to integrate AdMesh's revolutionary storybook-style advertising format.

## 🎯 What is AdMesh?

AdMesh transforms advertising from intrusive interruptions into helpful, contextual suggestions that enhance user experience. Our **storybook advertising format** displays recommendations as academic-style citations within narratives, similar to footnotes in research papers.

### Traditional vs AdMesh Advertising

**Traditional Push Ads** (Intrusive):
```
[🚨 URGENT! CRM SOFTWARE SALE! 🚨]
[⚡ 50% OFF TODAY ONLY! ⚡]
```

**AdMesh Citations** (Contextual):
```
For customer management, consider HubSpot¹ for its
excellent free tier and user-friendly interface.

¹ HubSpot CRM - Perfect for growing businesses
```

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Local Development

```bash
npm start
```

Opens `http://localhost:3000` with live reload.

### Build for Production

```bash
npm run build
```

### Deploy

```bash
./deploy.sh
```

Choose from GitHub Pages, Vercel, Netlify, or custom server.

## 📚 Documentation Structure

### 🎯 **Core Sections**

- **[Getting Started](/getting-started/overview)** - Setup, API keys, and basic concepts
- **[Ad Formats](/getting-started/ad-formats)** - Storybook advertising philosophy
- **[Python SDK](/python-sdk/installation)** - Complete Python integration guide
- **[UI SDK](/ui-sdk/installation)** - React components and theming
- **[AI Integration](/ai-integration/overview)** - AI agent integration guides
- **[API Reference](/api/authentication)** - Detailed API documentation
- **[Examples](/examples/ai-assistant)** - Real-world implementation examples

### 🎭 **Key Features for AI Agents**

1. **Storybook Ad Formats** - Citation-based recommendations
2. **AI Integration Guides** - ChatGPT, Claude, Replica.io integration
3. **Conversational Components** - Chat interface integration
4. **Auto-Recommendations** - Context-triggered suggestions
5. **Performance Comparisons** - 300% ROI vs traditional advertising

## 🎨 Revolutionary Ad Format

### Citation-Based Integration

```tsx
import { AdMeshCitationUnit } from 'admesh-ui-sdk';

<AdMeshCitationUnit
  recommendations={recommendations}
  conversationText={storyContent}
  citationStyle="numbered"
  showCitationList={true}
  onRecommendationClick={(adId, link) => {
    window.open(link, '_blank');
  }}
/>
```

### Performance Benefits

| Metric | Traditional Ads | AdMesh Citations |
|--------|----------------|------------------|
| **Engagement Rate** | 0.05% | 8-12% |
| **User Experience** | Negative | Positive |
| **ROI** | -95% | +300% |

## 📊 Storybook Integration

The documentation showcases AdMesh's integration with **Storybook** (the component development tool) for the admesh-ui-sdk:

### Access Interactive Examples

```bash
# Clone UI SDK repository
git clone https://github.com/GouniManikumar12/admesh-ui-sdk.git
cd admesh-ui-sdk

# Start Storybook
npm run storybook
```

**Storybook Features**:
- 📚 **Storybook Ad Formats** - Interactive narrative examples
- 📝 **Citation Components** - Different styling options
- 💬 **Conversational Ads** - Chat interface integration
- 📊 **Format Comparisons** - Traditional vs AdMesh demos

## 🚀 Deployment Options

### GitHub Pages (Free)

```bash
npm run deploy
```

### Vercel (Recommended)

1. Connect GitHub repository to Vercel
2. Build command: `npm run build`
3. Output directory: `build`

### Netlify

1. Connect GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `build`

## 🎯 AI Agent Focus

This documentation is specifically designed for AI agents and includes:

### Integration Patterns
- **ChatGPT Plugins** - Product recommendations in AI responses
- **Claude Integration** - Contextual suggestions in conversations
- **Replica.io** - AI companion integration
- **Custom AI Apps** - Advanced integration patterns

### Citation Examples
- **Business Narratives** - Startup growth stories with tool recommendations
- **Technical Tutorials** - Developer workflows with contextual suggestions
- **Educational Content** - Academic-style references

### Performance Data
- **Engagement Metrics** - 8-12% vs 0.05% traditional CTR
- **ROI Comparisons** - 300% profit vs 95% loss
- **User Experience** - Enhancement vs interruption

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/new-docs`
3. Make changes and test locally: `npm start`
4. Submit pull request with clear description

## 📞 Support & Resources

- **📖 Documentation**: [docs.useadmesh.com](https://docs.useadmesh.com)
- **🐛 Issues**: [GitHub Issues](https://github.com/GouniManikumar12/admesh-docs/issues)
- **💬 Support**: [support@useadmesh.com](mailto:support@useadmesh.com)
- **🌐 Dashboard**: [useadmesh.com](https://useadmesh.com)

### Related Repositories

- **[admesh-python](https://github.com/GouniManikumar12/admesh-python)** - Python SDK
- **[admesh-typescript](https://github.com/GouniManikumar12/admesh-typescript)** - TypeScript SDK
- **[admesh-ui-sdk](https://github.com/GouniManikumar12/admesh-ui-sdk)** - React UI components

## 📄 License

This documentation is licensed under the MIT License.

---

**AdMesh Documentation** - Transforming advertising through contextual intelligence and storybook-style integration. Built for AI agents, by developers. 🚀
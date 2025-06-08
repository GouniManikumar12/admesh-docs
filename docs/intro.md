---
sidebar_position: 1
slug: /
---

# AdMesh SDK Documentation

Welcome to the **AdMesh SDK Documentation** - your comprehensive guide to integrating AI-powered product recommendations into your applications.

## 🚀 What is AdMesh?

AdMesh is an AI-powered recommendation engine that helps developers integrate intelligent product suggestions into their applications. Whether you're building chatbots, AI assistants, or e-commerce platforms, AdMesh provides the tools you need to deliver personalized product recommendations.

## 📦 Available SDKs

AdMesh offers three powerful SDKs to fit your development needs:

### 🐍 Python SDK
Perfect for backend services, AI applications, and data processing pipelines.

```python
from admesh import Admesh

client = Admesh(api_key="your-api-key")
response = client.recommend.get_recommendations(
    query="Best CRM for remote teams",
    format="auto"
)
```

### 🟦 TypeScript SDK
Ideal for Node.js applications, serverless functions, and modern web backends.

```typescript
import Admesh from 'admesh';

const client = new Admesh({ apiKey: 'your-api-key' });
const response = await client.recommend.getRecommendations({
  query: 'Best CRM for remote teams',
  format: 'auto'
});
```

### ⚛️ UI SDK
React components for displaying recommendations with built-in tracking and theming.

```tsx
import { AdMeshLayout } from 'admesh-ui-sdk';

<AdMeshLayout
  recommendations={recommendations}
  autoLayout={true}
  onProductClick={(adId, admeshLink) => {
    window.open(admeshLink, '_blank');
  }}
/>
```

## 🤖 AI Agent Integration

AdMesh is designed specifically for AI applications and agents. Our SDKs provide:

- **Intelligent Intent Detection** - Automatically understand user queries
- **Contextual Recommendations** - Relevant suggestions based on conversation context
- **Citation-Based Ads** - Display recommendations as numbered references
- **Auto-Recommendations** - Trigger suggestions without user input
- **Conversational UI** - Chat-friendly components and layouts

## 🎯 Key Features

### 🔍 Smart Recommendations
- AI-powered intent detection
- Semantic matching with cosine similarity
- Trust score-based filtering
- Real-time recommendation generation

### 📊 Built-in Analytics
- Automatic view and click tracking
- Conversion monitoring
- Performance metrics
- Revenue attribution

### 🎨 Flexible UI Components
- Pre-built React components
- Citation-based conversation ads
- Sidebar and floating chat widgets
- Auto-recommendation widgets
- Dark/light theme support

### 🔧 Developer-Friendly
- TypeScript support with full type safety
- Comprehensive error handling
- Async/await support
- Extensive documentation and examples

## 🚀 Quick Start

1. **Get your API key** from the [AdMesh Dashboard](https://useadmesh.com/agent)
2. **Choose your SDK** based on your technology stack
3. **Install the SDK** using your preferred package manager
4. **Start building** with our comprehensive guides and examples

## 📚 Documentation Structure

- **[Getting Started](/getting-started/overview)** - Setup and basic concepts
- **[Python SDK](/python-sdk/installation)** - Complete Python integration guide
- **[TypeScript SDK](/typescript-sdk/installation)** - Complete TypeScript integration guide
- **[UI SDK](/ui-sdk/installation)** - React components and UI integration
- **[AI Integration](/ai-integration/overview)** - Guides for AI agents and chatbots
- **[API Reference](/api/authentication)** - Detailed API documentation
- **[Examples](/examples/react-app)** - Real-world implementation examples

## 🆘 Need Help?

- 📖 **Documentation**: You're reading it!
- 🐛 **Issues**: [GitHub Issues](https://github.com/GouniManikumar12/admesh-python/issues)
- 💬 **Support**: [support@useadmesh.com](mailto:support@useadmesh.com)
- 🌐 **Dashboard**: [useadmesh.com](https://useadmesh.com)

## 🔗 Useful Links

- [AdMesh Dashboard](https://useadmesh.com) - Manage your API keys and view analytics
- [Python SDK Repository](https://github.com/GouniManikumar12/admesh-python)
- [TypeScript SDK Repository](https://github.com/GouniManikumar12/admesh-typescript)
- [UI SDK Repository](https://github.com/GouniManikumar12/admesh-ui-sdk)

---

Ready to get started? Head over to our [Getting Started Guide](/getting-started/overview) to begin integrating AdMesh into your application!

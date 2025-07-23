---
sidebar_position: 1
---

# Overview

AdMesh is an AI-powered recommendation engine that helps you monetize your platform by suggesting relevant products to your users.

## What is AdMesh?

AdMesh provides intelligent product recommendations for AI applications, websites, and conversational interfaces. Simply send user queries to our API and receive contextually relevant product suggestions with built-in revenue sharing.

## How It Works

1. **Send user queries** to AdMesh API
2. **Receive product recommendations** with reasons
3. **Display recommendations** using our UI components
4. **Earn revenue** from successful recommendations

## Key Benefits

- **Easy Integration** - Simple API calls and React components
- **Revenue Sharing** - Earn from recommendations that convert
- **Smart Matching** - AI-powered relevance scoring
- **Ready-to-Use UI** - Pre-built components for quick implementation

## Quick Start

Get started in 3 simple steps:

1. **Get API Key** - Sign up at [dashboard.useadmesh.com](https://dashboard.useadmesh.com)
2. **Make API Call** - Send user queries to get recommendations
3. **Display Results** - Use our React components or custom UI

```bash
# Install React components (optional)
npm install @admesh/ui-sdk
```

```javascript
// Basic API call
const response = await fetch('https://api.useadmesh.com/v1/recommendations', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    query: "best laptop for programming",
    agent_id: "your_agent_id"
  })
});
```

## Features

- **Simple API** - One endpoint for all recommendations
- **React Components** - Pre-built UI components
- **Revenue Sharing** - Earn from successful recommendations
- **Analytics** - Track performance and earnings

## Next Steps

- [Quick Start Guide](./quick-start) - Complete setup walkthrough
- [API Reference](../api/authentication) - Full API documentation
- [React Components](../ui-sdk/installation) - UI component library
- [Examples](../examples/ai-assistant) - Code examples

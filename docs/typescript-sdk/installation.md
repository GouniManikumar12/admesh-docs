---
title: TypeScript SDK Installation
description: Install and configure the AdMesh TypeScript SDK for Node.js applications
sidebar_position: 1
---

# TypeScript SDK Installation

The AdMesh TypeScript SDK provides a modern, type-safe way to integrate AI-powered product recommendations into your Node.js applications, serverless functions, and web backends.

## 📦 Installation

### NPM
```bash
npm install admesh-sdk
```

### Yarn
```bash
yarn add admesh-sdk
```

### PNPM
```bash
pnpm add admesh-sdk
```

## 🚀 Quick Start

### Basic Setup

```typescript
import Admesh from 'admesh-sdk';

const client = new Admesh({
  apiKey: 'your-api-key-here',
  environment: 'production' // or 'test'
});

// Get recommendations
const response = await client.recommend.getRecommendations({
  query: 'Best CRM for remote teams',
  format: 'auto',
  intentType: 'compare_products'
});

console.log(response.recommendations);
```

### Environment Configuration

```typescript
// Development
const devClient = new Admesh({
  apiKey: process.env.ADMESH_TEST_API_KEY,
  environment: 'test',
  baseUrl: 'http://localhost:8000' // Optional: custom API endpoint
});

// Production
const prodClient = new Admesh({
  apiKey: process.env.ADMESH_API_KEY,
  environment: 'production'
});
```

## 🔧 Configuration Options

### Client Configuration

```typescript
interface AdmeshConfig {
  apiKey: string;                    // Required: Your AdMesh API key
  environment?: 'test' | 'production'; // Default: 'production'
  baseUrl?: string;                  // Default: 'https://api.useadmesh.com'
  timeout?: number;                  // Default: 30000 (30 seconds)
  retries?: number;                  // Default: 3
  userAgent?: string;                // Custom user agent
}
```

### Request Options

```typescript
interface RecommendationRequest {
  query: string;                     // User query or context
  format?: 'auto' | 'citation' | 'list'; // Response format
  intentType?: string;               // Intent classification
  maxRecommendations?: number;       // Default: 5
  includeMetadata?: boolean;         // Include additional metadata
  userId?: string;                   // For personalization
  sessionId?: string;                // For session tracking
}
```

## 🎯 Basic Examples

### Simple Recommendation

```typescript
import Admesh from 'admesh-sdk';

const client = new Admesh({ apiKey: 'your-api-key' });

async function getRecommendations() {
  try {
    const response = await client.recommend.getRecommendations({
      query: 'I need project management software for my startup',
      maxRecommendations: 3
    });

    response.recommendations.forEach(rec => {
      console.log(`${rec.title}: ${rec.reason}`);
      console.log(`Match Score: ${rec.intent_match_score}`);
      console.log(`Link: ${rec.admesh_link}`);
      console.log('---');
    });
  } catch (error) {
    console.error('Error getting recommendations:', error);
  }
}
```

### With Intent Type

```typescript
const response = await client.recommend.getRecommendations({
  query: 'Compare Slack vs Microsoft Teams',
  intentType: 'compare_products',
  format: 'citation',
  maxRecommendations: 2
});
```

### With User Context

```typescript
const response = await client.recommend.getRecommendations({
  query: 'Best email marketing tools',
  userId: 'user-123',
  sessionId: 'session-456',
  includeMetadata: true
});
```

## 🔒 Authentication

### API Key Setup

1. **Get your API key** from the [AdMesh Dashboard](https://useadmesh.com/agent)
2. **Store securely** in environment variables:

```bash
# .env
ADMESH_API_KEY=your-production-api-key
ADMESH_TEST_API_KEY=your-test-api-key
```

3. **Use in your application**:

```typescript
const client = new Admesh({
  apiKey: process.env.ADMESH_API_KEY!
});
```

### Environment Variables

```typescript
// Recommended setup
const client = new Admesh({
  apiKey: process.env.NODE_ENV === 'production' 
    ? process.env.ADMESH_API_KEY!
    : process.env.ADMESH_TEST_API_KEY!,
  environment: process.env.NODE_ENV === 'production' ? 'production' : 'test'
});
```

## 🚨 Error Handling

### Basic Error Handling

```typescript
import Admesh, { AdmeshError } from 'admesh-sdk';

try {
  const response = await client.recommend.getRecommendations({
    query: 'Best CRM software'
  });
} catch (error) {
  if (error instanceof AdmeshError) {
    console.error('AdMesh API Error:', error.message);
    console.error('Status Code:', error.statusCode);
    console.error('Error Code:', error.code);
  } else {
    console.error('Unexpected error:', error);
  }
}
```

### Advanced Error Handling

```typescript
try {
  const response = await client.recommend.getRecommendations({
    query: 'Best CRM software'
  });
} catch (error) {
  switch (error.statusCode) {
    case 401:
      console.error('Invalid API key');
      break;
    case 429:
      console.error('Rate limit exceeded');
      break;
    case 500:
      console.error('Server error');
      break;
    default:
      console.error('Unknown error:', error.message);
  }
}
```

## 📊 Response Format

### Recommendation Object

```typescript
interface Recommendation {
  title: string;                     // Product name
  reason: string;                    // Why it's recommended
  intent_match_score: number;        // 0-1 relevance score
  admesh_link: string;               // Tracked link for clicks
  ad_id: string;                     // Unique ad identifier
  product_id: string;                // Product identifier
  has_free_tier?: boolean;           // Free tier availability
  trial_days?: number;               // Trial period length
  keywords: string[];                // Associated keywords
}
```

### API Response

```typescript
interface RecommendationResponse {
  recommendations: Recommendation[];
  intent_type: string;               // Detected intent
  query: string;                     // Original query
  total_results: number;             // Total available results
  followup_suggestions?: string[];   // Suggested follow-up queries
}
```

## 🔗 Next Steps

- **[API Reference](/api/authentication)** - Complete API documentation
- **[AI Integration Guide](/ai-integration/overview)** - Integrate with AI agents
- **[Examples](/examples/ai-assistant)** - Real-world implementation examples
- **[UI SDK](/ui-sdk/installation)** - Add React components for displaying recommendations

## 🆘 Need Help?

- 📖 **Documentation**: [https://gounimanikumar12.github.io/admesh-docs/](https://gounimanikumar12.github.io/admesh-docs/)
- 🐛 **Issues**: [GitHub Issues](https://github.com/GouniManikumar12/admesh-typescript/issues)
- 💬 **Support**: [support@useadmesh.com](mailto:support@useadmesh.com)
- 🌐 **Dashboard**: [useadmesh.com](https://useadmesh.com)

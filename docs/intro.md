---
sidebar_position: 1
slug: /
title: AdMesh
description: Professional AI agent integration platform for intelligent product recommendations
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div className="hero-section">
  <div className="hero-content">
    <h1 className="hero-title">
      AI-Powered Product Recommendations
    </h1>
    <p className="hero-description">
      Integrate intelligent product recommendations into your AI applications with our modern SDKs.
      Earn revenue while providing value to your users.
    </p>
    <div className="hero-actions">
      <a href="/getting-started/quick-start" className="btn btn-primary btn-large">
        ⚡ Quick Start
      </a>
      <a href="https://useadmesh.com/agents" target="_blank" className="btn btn-outline btn-large">
        🔑 Get API Key
      </a>
    </div>
  </div>
</div>

## Why Choose AdMesh?

<div className="content-grid content-grid--3">
  <div className="card modern-card modern-card--blue">
    <div className="card__icon">🧠</div>
    <div className="card__header">
      <h3 className="card__title">AI-Powered Intelligence</h3>
    </div>
    <div className="card__body">
      Advanced ML algorithms deliver relevant recommendations with precision scoring.
    </div>
  </div>

  <div className="card modern-card modern-card--purple">
    <div className="card__icon">⚡</div>
    <div className="card__header">
      <h3 className="card__title">Developer Ready</h3>
    </div>
    <div className="card__body">
      Production SDKs with TypeScript support and seamless integration.
    </div>
  </div>

  <div className="card modern-card modern-card--green">
    <div className="card__icon">💎</div>
    <div className="card__header">
      <h3 className="card__title">Revenue Focused</h3>
    </div>
    <div className="card__body">
      Built-in analytics and revenue optimization tools.
    </div>
  </div>
</div>

## Choose Your SDK

<Tabs>
<TabItem value="python" label="Python SDK" default>

**Perfect for:** AI applications, data processing, server-side implementations

```python
from admesh import Admesh

# Initialize client
client = Admesh(api_key="your-api-key")

# Get intelligent recommendations
response = client.recommend.get_recommendations(
    query="Enterprise CRM solutions for distributed teams",
    format="auto",
    limit=5
)

# Access recommendations
for rec in response.recommendations:
    print(f"{rec.title}: {rec.reason}")
```

<div className="sdk-actions">
  <a href="/python-sdk/installation" className="btn btn-primary">
    Python Documentation
  </a>
  <a href="https://github.com/GouniManikumar12/admesh-python" target="_blank" className="btn btn-secondary">
    GitHub Repository
  </a>
</div>

</TabItem>
<TabItem value="typescript" label="TypeScript SDK">

**Perfect for:** Node.js backends, serverless functions, API services

```typescript
import Admesh from 'admesh';

// Initialize with full type safety
const client = new Admesh({
  apiKey: 'your-api-key',
  environment: 'production'
});

// Get recommendations with TypeScript support
const response = await client.recommend.getRecommendations({
  query: 'Enterprise CRM solutions for distributed teams',
  format: 'auto',
  limit: 5
});

// Fully typed response
response.recommendations.forEach(rec => {
  console.log(`${rec.title}: ${rec.reason}`);
});
```

<div className="sdk-actions">
  <a href="/typescript-sdk/installation" className="btn btn-primary">
    TypeScript Documentation
  </a>
  <a href="https://github.com/GouniManikumar12/admesh-typescript" target="_blank" className="btn btn-secondary">
    GitHub Repository
  </a>
</div>

</TabItem>
<TabItem value="ui" label="UI SDK">

**Perfect for:** React applications, frontend components, user interfaces

```tsx
import { AdMeshProductCard } from 'admesh-ui-sdk';

function MyApp() {
  return (
    <div>
      {/* Intelligent layout with auto-recommendations */}
      <AdMeshProductCard
        apiKey="your-api-key"
        query="Enterprise CRM solutions"
        autoLayout={true}
        theme="modern"
      />

      {/* Individual product cards */}
      <AdMeshProductCard
        productId="crm-solution-1"
        showPricing={true}
        showFeatures={true}
      />
    </div>
  );
}
```

<div className="sdk-actions">
  <a href="/ui-sdk/installation" className="btn btn-primary">
    UI SDK Documentation
  </a>
  <a href="https://storybook.useadmesh.com" target="_blank" className="btn btn-secondary">
    Live Examples
  </a>
</div>

</TabItem>
</Tabs>

## Quick Start Guide

<div className="quick-start-grid">
  <div className="quick-start-card modern-card modern-card--blue">
    <div className="quick-start-number">1</div>
    <h3>🔑 Get API Key</h3>
    <p>Sign up for free and get credentials instantly.</p>
    <a href="https://useadmesh.com/agents" target="_blank" className="btn btn-primary btn-large">
      Get API Key →
    </a>
  </div>

  <div className="quick-start-card modern-card modern-card--purple">
    <div className="quick-start-number">2</div>
    <h3>⚡ Install SDK</h3>
    <p>Choose your SDK and install with your package manager.</p>
    <a href="/getting-started/overview" className="btn btn-primary btn-large">
      Installation Guide →
    </a>
  </div>

  <div className="quick-start-card modern-card modern-card--green">
    <div className="quick-start-number">3</div>
    <h3>💎 Start Earning</h3>
    <p>Integrate recommendations and start earning revenue.</p>
    <a href="/getting-started/quick-start" className="btn btn-primary btn-large">
      Quick Start →
    </a>
  </div>
</div>



## Documentation Navigation

<div className="nav-grid">
  <div className="nav-card modern-card modern-card--blue">
    <div className="card__icon">⚡</div>
    <h3>Getting Started</h3>
    <p>Setup guide and first implementation.</p>
    <a href="/getting-started/overview" className="btn btn-primary btn-large">
      Start Building →
    </a>
  </div>

  <div className="nav-card modern-card modern-card--purple">
    <div className="card__icon">🎯</div>
    <h3>Ad Units</h3>
    <p>Available ad formats and UI components.</p>
    <a href="/ad-units/overview" className="btn btn-primary btn-large">
      View Components →
    </a>
  </div>

  <div className="nav-card modern-card modern-card--green">
    <div className="card__icon">📋</div>
    <h3>API Reference</h3>
    <p>Complete API documentation and examples.</p>
    <a href="/api/authentication" className="btn btn-primary btn-large">
      API Documentation →
    </a>
  </div>

  <div className="nav-card modern-card modern-card--orange">
    <div className="card__icon">💡</div>
    <h3>Examples</h3>
    <p>Implementation examples and tutorials.</p>
    <a href="/examples/ai-assistant" className="btn btn-primary btn-large">
      View Examples →
    </a>
  </div>
</div>

**Calculate Your Potential Revenue:** See how much you can earn by integrating AdMesh into your AI application. <a href="https://useadmesh.com/agents#earnings-calculator" target="_blank" className="btn btn-special">Calculate Earnings</a>

## Support & Community

<div className="support-grid">
  <div className="support-card modern-card modern-card--blue">
    <div className="card__icon">💬</div>
    <h3>Direct Support</h3>
    <p>Get help from our team for technical questions.</p>
    <a href="mailto:mani@useadmesh.com" className="btn btn-primary btn-large">
      Contact Support →
    </a>
  </div>

  <div className="support-card modern-card modern-card--purple">
    <div className="card__icon">📈</div>
    <h3>Dashboard</h3>
    <p>Manage API keys and view analytics.</p>
    <a href="https://useadmesh.com" target="_blank" className="btn btn-primary btn-large">
      Open Dashboard →
    </a>
  </div>
</div>

---

<div className="cta-section">
  <h2>Ready to get started?</h2>
  <p>Start building with AdMesh today.</p>
  <div className="hero-actions">
    <a href="/getting-started/quick-start" className="btn btn-primary btn-large">
      ⚡ Start Building Now
    </a>
    <a href="https://useadmesh.com/agents#earnings-calculator" target="_blank" className="btn btn-special btn-large">
      💎 Calculate Earnings
    </a>
  </div>
</div>

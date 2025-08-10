---
sidebar_position: 1
---

# UI SDK Installation

The AdMesh UI SDK is a production-ready React + TypeScript component library for displaying product recommendations with integrated tracking, theming, and conversational interface support.

## Requirements

- **React 18.0 or higher**
- **TypeScript 4.9 or higher** (optional but recommended)
- **Node.js 18.0 or higher**

## Installation

### Using npm

```bash
npm install admesh-ui-sdk
```

### Using yarn

```bash
yarn add admesh-ui-sdk
```

### Using pnpm

```bash
pnpm add admesh-ui-sdk
```

## Quick Setup

The UI SDK is designed to be completely self-contained with no additional setup required:

```tsx
import React from 'react';
import { AdMeshLayout } from 'admesh-ui-sdk';
// No CSS import needed! Styles are auto-injected ✨

function App() {
  const recommendations = [
    {
      id: "walmart_15840257186",
      title: "HP 15.6 inch Windows Touch Laptop",
      price: 279.0,
      original_price: 469.0,
      image_url: "https://i5.walmartimages.com/asr/...",
      brand: "HP",
      rating: 4.4,
      review_count: 97,
      availability: "in_stock",
      discount_percentage: 40.5,
      source: "walmart",
      ad_id: "walmart_15840257186",
      reason: "Perfect match for laptop search",
      admesh_link: "https://goto.walmart.com/c/...",
      intent_match_score: 0.9
    }
  ];

  return (
    <div>
      {/* Intelligent Layout - Automatically detects best display format */}
      <AdMeshLayout
        recommendations={recommendations}
        layout="auto" // Automatically chooses ecommerce, product, or citation layout
        showTitle={true}
        title="Recommended Products"
        onProductClick={(product) => {
          window.open(product.admesh_link, '_blank');
        }}
      />

      {/* Grid Layout - Multiple recommendations display */}
      <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        {recommendations.map((rec, index) => (
          <AdMeshProductCard
            key={rec.ad_id}
            recommendation={rec}
            showBadges={true}
            onClick={(adId, admeshLink) => {
              window.open(admeshLink, '_blank');
            }}
          />
        ))}
      </div>
    </div>
  );
}
```

## Framework Compatibility

### React

The UI SDK is built for React and works with:

- **Create React App** - Works out of the box
- **Next.js** - Full SSR/SSG support
- **Vite** - Fast development and building
- **Remix** - Server-side rendering support
- **Gatsby** - Static site generation

### Next.js Setup

For Next.js applications, no special configuration is needed:

```tsx
// pages/recommendations.tsx or app/recommendations/page.tsx
import { AdMeshProductCard } from 'admesh-ui-sdk';

export default function RecommendationsPage() {
  return (
    <div>
      <h1>Product Recommendations</h1>
      {recommendations.map(rec =>
        <AdMeshProductCard key={rec.ad_id} recommendation={rec} />
      )}
    </div>
  );
}
```

### Vite Setup

For Vite applications:

```tsx
// src/App.tsx
import { AdMeshProductCard } from 'admesh-ui-sdk';

function App() {
  return (
    <div className="App">
      {recommendations.map(rec =>
        <AdMeshProductCard key={rec.ad_id} recommendation={rec} />
      )}
    </div>
  );
}

export default App;
```

## TypeScript Support

The UI SDK includes full TypeScript definitions:

```tsx
import React from 'react';
import { 
  AdMeshProductCard, 
  AdMeshRecommendation, 
  AdMeshTheme 
} from 'admesh-ui-sdk';

interface AppProps {
  recommendations: AdMeshRecommendation[];
}

const theme: AdMeshTheme = {
  mode: 'dark',
  accentColor: '#8b5cf6'
};

function App({ recommendations }: AppProps) {
  return (
    <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
      {recommendations.map(rec => (
        <AdMeshProductCard
          key={rec.ad_id}
          recommendation={rec}
          theme={theme}
        />
      ))}
    </div>
  );
}
```

## Styling and Theming

### Automatic Style Injection

The UI SDK automatically injects its styles - no manual CSS imports needed:

```tsx
// ✅ This is all you need
import { AdMeshProductCard } from 'admesh-ui-sdk';

// ❌ No need for this
// import 'admesh-ui-sdk/styles.css';
```

### Custom Theming

Customize the appearance with theme props:

```tsx
import { AdMeshProductCard } from 'admesh-ui-sdk';

const customTheme = {
  mode: 'dark', // 'light' | 'dark'
  accentColor: '#3b82f6', // Custom accent color
};

{recommendations.map(rec => (
  <AdMeshProductCard
    key={rec.ad_id}
    recommendation={rec}
    theme={customTheme}
  />
))}
```

### CSS Custom Properties

For advanced customization, override CSS custom properties:

```css
/* Your global CSS */
:root {
  --admesh-primary-color: #8b5cf6;
  --admesh-border-radius: 12px;
  --admesh-font-family: 'Inter', sans-serif;
}

[data-theme='dark'] {
  --admesh-primary-color: #a78bfa;
  --admesh-background-color: #1f2937;
  --admesh-text-color: #f9fafb;
}
```

## Bundle Size Optimization

### Tree Shaking

Import only the components you need:

```tsx
// ✅ Tree-shakable imports
import {
  AdMeshProductCard,
  AdMeshEcommerceCards,
  AdMeshBadge
} from 'admesh-ui-sdk';

// ❌ Imports entire library
import * as AdMesh from 'admesh-ui-sdk';
```

### Dynamic Imports

For code splitting, use dynamic imports:

```tsx
import React, { lazy, Suspense } from 'react';

const AdMeshProductCard = lazy(() => 
  import('admesh-ui-sdk').then(module => ({ 
    default: module.AdMeshProductCard 
  }))
);

function App() {
  return (
    <Suspense fallback={<div>Loading recommendations...</div>}>
      {recommendations.map(rec =>
        <AdMeshProductCard key={rec.ad_id} recommendation={rec} />
      )}
    </Suspense>
  );
}
```

## Development Setup

### With Create React App

```bash
npx create-react-app my-app --template typescript
cd my-app
npm install admesh-ui-sdk
```

```tsx
// src/App.tsx
import React from 'react';
import { AdMeshProductCard } from 'admesh-ui-sdk';

function App() {
  return (
    <div className="App">
      <AdMeshProductCard recommendations={[]} />
    </div>
  );
}

export default App;
```

### With Next.js

```bash
npx create-next-app@latest my-app --typescript
cd my-app
npm install admesh-ui-sdk
```

```tsx
// pages/index.tsx
import { AdMeshProductCard } from 'admesh-ui-sdk';

export default function Home() {
  return (
    <main>
      <h1>Welcome to AdMesh</h1>
      <AdMeshProductCard recommendations={[]} />
    </main>
  );
}
```

### With Vite

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install admesh-ui-sdk
```

## Integration with Backend SDKs

Combine with AdMesh backend SDKs for full functionality:

### With Python Backend

```python
# backend/api.py
from admesh import Admesh
from flask import Flask, jsonify

app = Flask(__name__)
client = Admesh()

@app.route('/api/recommendations')
def get_recommendations():
    response = client.recommend.get_recommendations(
        query=request.args.get('query'),
        format='auto'
    )
    return jsonify(response.response.recommendations)
```

```tsx
// frontend/src/App.tsx
import React, { useState, useEffect } from 'react';
import { AdMeshProductCard } from 'admesh-ui-sdk';

function App() {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    fetch('/api/recommendations?query=CRM software')
      .then(res => res.json())
      .then(setRecommendations);
  }, []);

  return (
    <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
      {recommendations.map(rec =>
        <AdMeshProductCard key={rec.ad_id} recommendation={rec} />
      )}
    </div>
  );
}
```

### With TypeScript Backend

```typescript
// backend/api.ts
import Admesh from 'admesh';
import express from 'express';

const app = express();
const client = new Admesh();

app.get('/api/recommendations', async (req, res) => {
  const response = await client.recommend.getRecommendations({
    query: req.query.query as string,
    format: 'auto'
  });
  
  res.json(response.response?.recommendations || []);
});
```

## Troubleshooting

### Common Issues

#### Styles Not Loading

If styles aren't appearing:

```tsx
// Make sure you're importing from the correct package
import { AdMeshProductCard } from 'admesh-ui-sdk'; // ✅ Correct

// Not from a different package
import { AdMeshProductCard } from 'admesh-ui-sdk'; // ❌ Wrong package
```

#### TypeScript Errors

If you get TypeScript errors:

```bash
# Make sure you have the latest version
npm update admesh-ui-sdk

# Check your TypeScript version
npx tsc --version
# Should be 4.9 or higher
```

#### Bundle Size Issues

If your bundle is too large:

```tsx
// Use specific imports instead of barrel imports
import { AdMeshProductCard } from 'admesh-ui-sdk/components/AdMeshProductCard';
import { AdMeshEcommerceCards } from 'admesh-ui-sdk/components/AdMeshEcommerceCards';
```

#### React Version Conflicts

If you get React version warnings:

```bash
# Check your React version
npm list react

# Update React if needed
npm update react react-dom
```

### Performance Optimization

#### Lazy Loading

```tsx
import React, { lazy, Suspense } from 'react';

const AdMeshEcommerceCards = lazy(() => import('admesh-ui-sdk/components/AdMeshEcommerceCards'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AdMeshEcommerceCards products={products} />
    </Suspense>
  );
}
```

#### Memoization

```tsx
import React, { memo, useMemo } from 'react';
import { AdMeshProductCard } from 'admesh-ui-sdk';

const MemoizedRecommendations = memo(function Recommendations({ recommendations }) {
  const memoizedRecommendations = useMemo(() => 
    recommendations.filter(rec => rec.intent_match_score > 0.8),
    [recommendations]
  );

  return (
    <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
      {memoizedRecommendations.map(rec =>
        <AdMeshProductCard key={rec.ad_id} recommendation={rec} />
      )}
    </div>
  );
});
```

## Next Steps

After completing UI SDK installation:

1. **[Getting Started](/getting-started/overview)** - Core concepts and setup
2. **[Python SDK](/python-sdk/installation)** - Backend SDK integration
3. **[TypeScript SDK](/typescript-sdk/installation)** - Node.js SDK integration
4. **[Examples](/examples/ai-assistant)** - Implementation examples

## Support Resources

For installation assistance:

- **GitHub Issues**: [Report issues](https://github.com/GouniManikumar12/admesh-ui-sdk/issues)
- **Support**: [mani@useadmesh.com](mailto:mani@useadmesh.com)
- **Documentation**: Complete technical documentation

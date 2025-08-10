---
sidebar_position: 2
---

# AdMeshLayout Component

The `AdMeshLayout` component is the unified, intelligent layout system for displaying AdMesh recommendations. It automatically detects the best layout based on your data and provides consistent, FTC-compliant displays across all platforms.

## Key Features

- **🤖 Intelligent Auto-Detection**: Automatically chooses the best layout based on your data
- **🛒 Ecommerce Support**: Perfect for Walmart, Amazon, and other product recommendations
- **📱 Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **⚖️ FTC Compliant**: Built-in legal disclosures and transparency
- **🎨 Consistent Theming**: Unified appearance across all integrations

## Quick Start

```tsx
import React from 'react';
import { AdMeshLayout } from 'admesh-ui-sdk';

function ProductRecommendations() {
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
    <AdMeshLayout
      recommendations={recommendations}
      layout="auto" // Automatically detects best layout
      showTitle={true}
      title="Recommended Products"
      maxItems={6}
      theme={{ mode: 'light' }}
      onProductClick={(product) => {
        window.open(product.admesh_link, '_blank');
      }}
    />
  );
}
```

## Layout Types

### Auto Layout (Recommended)
The component automatically detects the best layout based on your data:

```tsx
<AdMeshLayout
  recommendations={recommendations}
  layout="auto" // Default - intelligent detection
/>
```

**Detection Logic:**
- **Ecommerce Layout**: When recommendations have `price`, `image_url`, and ecommerce fields
- **Product Layout**: For software/SaaS recommendations with rich metadata
- **Citation Layout**: For conversational contexts with text links

### Ecommerce Layout
Perfect for product recommendations from Walmart, Amazon, etc:

```tsx
<AdMeshLayout
  recommendations={recommendations}
  layout="ecommerce"
  showTitle={true}
  title="Shop Products"
  maxItems={6}
  ecommerceCardsProps={{
    showPricing: true,
    showRatings: true,
    showBrand: true,
    showShipping: true,
    cardWidth: "md"
  }}
/>
```

### Product Layout
Ideal for software and SaaS recommendations:

```tsx
<AdMeshLayout
  recommendations={recommendations}
  layout="product"
  maxItems={3}
  productCardProps={{
    showMatchScore: false,
    expandable: true
  }}
/>
```

### Citation Layout
For conversational AI and chatbot integrations:

```tsx
<AdMeshLayout
  recommendations={recommendations}
  layout="citation"
  conversationTextLinks={{
    "HubSpot CRM": "https://useadmesh.com/track?ad_id=hubspot-1",
    "Salesforce": "https://useadmesh.com/track?ad_id=salesforce-1"
  }}
/>
```

## Data Format

The component works with standardized AdMesh recommendation format:

```typescript
interface AdMeshRecommendation {
  // Core fields
  id?: string;
  ad_id: string;
  title: string;
  reason: string;
  intent_match_score: number;
  admesh_link: string;
  
  // Ecommerce fields (for product recommendations)
  price?: number;
  original_price?: number;
  image_url?: string;
  brand?: string;
  rating?: number;
  review_count?: number;
  availability?: string;
  discount_percentage?: number;
  source?: string;
  shipping_info?: {
    free_shipping_over_35?: boolean;
    two_day_shipping?: boolean;
  };
  
  // Software/SaaS fields
  pricing?: string;
  features?: string[];
  trial_days?: number;
}
```

## Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `recommendations` | `AdMeshRecommendation[]` | `[]` | Array of recommendations to display |
| `layout` | `'auto' \| 'ecommerce' \| 'product' \| 'citation'` | `'auto'` | Layout type (auto-detection recommended) |
| `showTitle` | `boolean` | `true` | Whether to show the title |
| `title` | `string` | `"Recommendations"` | Title text |
| `maxItems` | `number` | Auto-detected | Maximum items to display |
| `theme` | `{ mode: 'light' \| 'dark' }` | `{ mode: 'light' }` | Theme configuration |
| `className` | `string` | `""` | Additional CSS classes |
| `onProductClick` | `(product) => void` | - | Callback for product clicks |
| `onRecommendationClick` | `(adId, link) => void` | - | Callback for recommendation clicks |

## Advanced Configuration

### Ecommerce Cards Props
When using ecommerce layout, customize the display:

```tsx
<AdMeshLayout
  layout="ecommerce"
  ecommerceCardsProps={{
    showPricing: true,
    showRatings: true,
    showBrand: true,
    showSource: false,
    showShipping: true,
    cardWidth: "lg",
    maxCards: 8,
    borderRadius: "lg",
    shadow: "md"
  }}
/>
```

### Product Card Props
For software/SaaS recommendations:

```tsx
<AdMeshLayout
  layout="product"
  productCardProps={{
    showMatchScore: false,
    showBadges: true,
    expandable: true,
    variation: "question"
  }}
/>
```

## Integration Examples

### E-commerce Search Results
```tsx
function SearchResults({ query, products }) {
  return (
    <AdMeshLayout
      recommendations={products}
      layout="ecommerce"
      title={`Shop ${query}`}
      maxItems={12}
      ecommerceCardsProps={{
        cardWidth: "sm",
        showSource: true
      }}
    />
  );
}
```

### AI Assistant Recommendations
```tsx
function AIRecommendations({ userQuery, suggestions }) {
  return (
    <AdMeshLayout
      recommendations={suggestions}
      layout="auto"
      showTitle={false}
      maxItems={3}
      theme={{ mode: 'dark' }}
    />
  );
}
```

## Best Practices

1. **Use Auto Layout**: Let the component choose the best display format
2. **Provide Rich Data**: Include all available fields for better displays
3. **Handle Clicks**: Always implement click handlers for tracking
4. **Responsive Design**: The component is mobile-first by default
5. **FTC Compliance**: Built-in disclosures ensure legal compliance

## Migration from Individual Components

If you're currently using `AdMeshEcommerceCards` or `AdMeshProductCard` directly:

```tsx
// Before
<AdMeshEcommerceCards
  products={products}
  title="Products"
  showPricing={true}
/>

// After
<AdMeshLayout
  recommendations={recommendations}
  layout="ecommerce"
  title="Products"
  ecommerceCardsProps={{
    showPricing: true
  }}
/>
```

The new approach provides better consistency, automatic optimizations, and built-in compliance features.

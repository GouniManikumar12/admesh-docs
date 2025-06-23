---
sidebar_position: 3
---

# Product Card

Comprehensive product recommendation cards with detailed information, features, and pricing - perfect for showcasing products with rich visual and textual content.

## Description

Product Card provides a complete product overview in a visually appealing card format. It displays detailed information including features, pricing, match scores, and product descriptions, making it ideal for platforms where users need comprehensive product information before making decisions.

## Key Features

- **Rich information**: Product details, features, pricing, and match scores
- **Visual appeal**: Clean card design with proper spacing and typography
- **Interactive elements**: Clickable cards with hover effects
- **Customizable display**: Show/hide features, pricing, and match scores
- **Responsive design**: Adapts to different screen sizes and layouts
- **Professional presentation**: Business-grade appearance for enterprise platforms

## Implementation

### Basic Usage

```tsx
import { AdMeshProductCard } from 'admesh-ui-sdk';

<AdMeshProductCard
  recommendation={recommendation}
  showFeatures={true}
  showPricing={true}
  showMatchScore={true}
  onClick={(adId, admeshLink) => window.open(admeshLink, '_blank')}
/>
```

### Configuration Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `recommendation` | `Recommendation` | Required | The recommendation data object |
| `showFeatures` | `boolean` | `true` | Display product features list |
| `showPricing` | `boolean` | `true` | Show pricing information |
| `showMatchScore` | `boolean` | `true` | Display relevance match score |
| `showDescription` | `boolean` | `true` | Show product description |
| `compact` | `boolean` | `false` | Use compact card layout |
| `onClick` | `(adId: string, admeshLink: string) => void` | Required | Click handler function |

### Layout Variations

#### Standard Card
```tsx
<AdMeshProductCard
  recommendation={recommendation}
  showFeatures={true}
  showPricing={true}
  showMatchScore={true}
/>
```

#### Compact Card
```tsx
<AdMeshProductCard
  recommendation={recommendation}
  compact={true}
  showFeatures={false}
  showMatchScore={false}
/>
```

## Best For

- **AI Design Tools**: [Uizard](https://uizard.io), [Galileo AI](https://www.usegalileo.ai), [Khroma](https://www.khroma.co)
- **E-commerce Platforms**: Product showcases and recommendations
- **Business Intelligence**: Detailed tool and service recommendations
- **Enterprise Platforms**: Professional software recommendations
- **Comparison Tools**: Side-by-side product evaluations

## Platform Examples

### AI Design Tools
Perfect for showcasing creative tools and design assets:

**Examples**: [Uizard](https://uizard.io), [Galileo AI](https://www.usegalileo.ai), [Khroma](https://www.khroma.co)

```tsx
<AdMeshProductCard
  showFeatures={true}
  showPricing={true}
  onClick={handleDesignToolClick}
/>
```

### AI E-commerce Platforms
Ideal for product recommendations in AI-powered stores:

**Examples**: [Checkout Page AI](https://checkoutpage.co), [ConvertMate AI](https://convertmate.io), [Octane AI](https://www.octaneai.com)

```tsx
<AdMeshProductCard
  showFeatures={true}
  showPricing={true}
  showMatchScore={false}
  onClick={handleProductClick}
/>
```

### AI Business Intelligence Platforms
Great for professional tool recommendations:

**Examples**: [Polymer](https://www.polymersearch.com), [Yurts AI](https://www.yurts.ai), [Obviously.AI](https://www.obviously.ai)

```tsx
<AdMeshProductCard
  showFeatures={true}
  showPricing={true}
  showMatchScore={true}
  onClick={handleBusinessToolClick}
/>
```

## Card Structure

A typical Product Card includes:

1. **Product Title**: Clear, prominent product name
2. **Description**: Brief overview of product capabilities
3. **Features**: Key product features and benefits
4. **Pricing**: Cost information and pricing models
5. **Match Score**: Relevance percentage (optional)
6. **Call-to-Action**: Implicit through card interaction

## Styling and Customization

Product Cards use a clean, modern design that adapts to your platform's theme:

### CSS Classes

- `.admesh-product-card`: Main card container
- `.admesh-product-title`: Product name
- `.admesh-product-description`: Product description
- `.admesh-product-features`: Features list
- `.admesh-product-pricing`: Pricing information
- `.admesh-match-score`: Relevance score

### Responsive Behavior

- **Desktop**: Full card with all information
- **Tablet**: Optimized layout with adjusted spacing
- **Mobile**: Stacked layout with condensed information

## Analytics and Tracking

Product Card interactions provide detailed analytics:

- **Card impressions**: When cards are displayed
- **Feature views**: Which features users focus on
- **Pricing interactions**: Engagement with pricing information
- **Click patterns**: Which card elements drive clicks
- **Conversion tracking**: Purchase attribution

## Performance Metrics

Product Cards typically achieve:
- **Medium CTR**: 3-8% click-through rates
- **High engagement**: Users spend more time reviewing information
- **Better conversions**: Detailed information improves purchase decisions
- **Professional appeal**: Enhances platform credibility



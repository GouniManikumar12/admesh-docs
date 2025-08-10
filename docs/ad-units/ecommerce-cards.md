---
sidebar_position: 7
---

# Ecommerce Cards

The AdMeshEcommerceCards component displays product recommendations in a horizontal scrolling grid format, similar to Google product search results. Perfect for ecommerce platforms and shopping interfaces.

## Overview

AdMeshEcommerceCards provides a clean, modern interface for displaying multiple product recommendations with pricing, ratings, and purchase options. The component automatically handles responsive design and provides smooth scrolling on mobile devices.

## Basic Usage

```tsx
import { AdMeshEcommerceCards } from 'admesh-ui-sdk';

const products = [
  {
    id: 'laptop-1',
    title: 'Gaming Laptop Pro',
    price: 1299.99,
    image_url: 'https://example.com/laptop.jpg',
    brand: 'TechBrand',
    url: 'https://store.example.com/laptop-pro',
    source: 'admesh',
    description: 'High-performance gaming laptop with RTX graphics',
    admesh_link: 'https://useadmesh.com/track?ad_id=laptop-1'
  },
  // ... more products
];

<AdMeshEcommerceCards
  products={products}
  title="Recommended Laptops"
  showPricing={true}
  showRatings={true}
  showBrand={true}
  onProductClick={(product) => window.open(product.admesh_link || product.url)}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `products` | `EcommerceProduct[]` | Required | Array of product data |
| `title` | `string` | - | Optional section title |
| `showTitle` | `boolean` | `true` | Whether to display the title |
| `showPricing` | `boolean` | `true` | Show product prices |
| `showRatings` | `boolean` | `true` | Show star ratings |
| `showBrand` | `boolean` | `true` | Show brand names |
| `showSource` | `boolean` | `false` | Show product source |
| `showShipping` | `boolean` | `true` | Show shipping information |
| `cardWidth` | `'sm' \| 'md' \| 'lg'` | `'md'` | Card size |
| `maxCards` | `number` | `10` | Maximum cards to display |
| `theme` | `'light' \| 'dark' \| 'auto'` | `'auto'` | Color theme |
| `onProductClick` | `(product: EcommerceProduct) => void` | - | Click handler |
| `className` | `string` | - | Custom CSS class |

## Product Data Format

```tsx
interface EcommerceProduct {
  id: string;
  title: string;
  price?: number;
  image_url?: string;
  brand?: string;
  url: string;
  source: string;
  description?: string;
  admesh_link?: string;
  rating?: number;
  review_count?: number;
  shipping_info?: string;
  discount_percentage?: number;
  original_price?: number;
}
```

## Styling Options

### Card Sizes

```tsx
// Small cards - compact layout
<AdMeshEcommerceCards
  products={products}
  cardWidth="sm"
  maxCards={6}
/>

// Large cards - detailed layout
<AdMeshEcommerceCards
  products={products}
  cardWidth="lg"
  maxCards={4}
/>
```

### Theme Customization

```tsx
<AdMeshEcommerceCards
  products={products}
  theme="dark"
  className="custom-ecommerce-grid"
  style={{
    backgroundColor: '#1f2937',
    borderRadius: '12px',
    padding: '20px'
  }}
/>
```

## Advanced Features

### Mixed Product Sources

The component can display products from multiple sources (AdMesh partners, Walmart, Amazon, etc.):

```tsx
const mixedProducts = [
  { ...product1, source: 'admesh' },
  { ...product2, source: 'walmart' },
  { ...product3, source: 'amazon' }
];

<AdMeshEcommerceCards
  products={mixedProducts}
  showSource={true}  // Shows source badges
/>
```

### Custom Click Handling

```tsx
<AdMeshEcommerceCards
  products={products}
  onProductClick={(product) => {
    // Custom analytics tracking
    analytics.track('product_clicked', {
      productId: product.id,
      source: product.source,
      price: product.price
    });
    
    // Open product page
    window.open(product.admesh_link || product.url, '_blank');
  }}
/>
```

## Integration Examples

### AI Shopping Assistant

```tsx
function ShoppingResults({ query, products }) {
  return (
    <div className="shopping-results">
      <h2>Products for "{query}"</h2>
      <AdMeshEcommerceCards
        products={products}
        title={`Best ${query} Options`}
        showPricing={true}
        showRatings={true}
        cardWidth="md"
        maxCards={8}
      />
    </div>
  );
}
```

### E-commerce Platform Integration

```tsx
function RelatedProducts({ currentProduct, recommendations }) {
  return (
    <section className="related-products">
      <AdMeshEcommerceCards
        products={recommendations}
        title="You might also like"
        showBrand={true}
        showShipping={true}
        cardWidth="sm"
        maxCards={6}
        onProductClick={(product) => {
          // Track cross-sell click
          trackCrossSell(currentProduct.id, product.id);
          window.open(product.url, '_blank');
        }}
      />
    </section>
  );
}
```

## Best Practices

1. **Limit Card Count**: Use `maxCards` to prevent overwhelming users
2. **Responsive Design**: Test on mobile devices for optimal scrolling
3. **Performance**: Lazy load images for better performance
4. **Analytics**: Track clicks and conversions for optimization
5. **Accessibility**: Ensure proper alt text for product images

## Legal Compliance

The component automatically includes FTC-compliant disclosures:
- "Partner Recommendation" labels for sponsored content
- Clear indication of commercial relationships
- Transparent pricing and source information

## Mobile Optimization

AdMeshEcommerceCards is fully optimized for mobile:
- Touch-friendly scrolling
- Responsive card sizing
- Optimized image loading
- Accessible touch targets

Perfect for AI-powered shopping experiences, product discovery platforms, and e-commerce recommendation systems.

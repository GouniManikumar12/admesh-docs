---
sidebar_position: 8
---

# Layout Patterns

Learn how to create comprehensive layouts using AdMeshProductCard components - perfect for showcasing multiple products and comprehensive recommendation displays.

## Description

Create flexible layouts for displaying multiple recommendations using AdMeshProductCard components in organized, visually appealing arrangements. These patterns automatically adapt to different screen sizes and content types, making them ideal for comprehensive product showcases, comparison tools, and platforms that need to display multiple recommendations simultaneously.

## Key Features

- **Auto-layout**: Intelligently arranges recommendations based on content
- **Multiple formats**: Supports grid, list, and custom layouts
- **Responsive design**: Adapts to different screen sizes
- **Rich information**: Shows features, pricing, and match scores
- **Flexible configuration**: Customizable columns, spacing, and display options
- **Performance optimized**: Efficient rendering for large recommendation sets

## Implementation

### Basic Usage

```tsx
import { AdMeshProductCard } from 'admesh-ui-sdk';

// Grid Layout Pattern
<div style={{
  display: 'grid',
  gap: '20px',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
}}>
  {recommendations.map(rec => (
    <AdMeshProductCard
      key={rec.ad_id}
      recommendation={rec}
  autoLayout={true}
  maxDisplayed={6}
  showMatchScores={true}
  showFeatures={true}
  onProductClick={(adId, link) => window.open(link)}
/>
```

### Configuration Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `recommendations` | `Recommendation[]` | Required | Array of recommendation objects |
| `layout` | `"grid" \| "list" \| "auto"` | `"auto"` | Layout arrangement type |
| `columns` | `number` | `3` | Number of columns (grid layout) |
| `maxDisplayed` | `number` | `9` | Maximum recommendations to show |
| `showFeatures` | `boolean` | `true` | Display product features |
| `showPricing` | `boolean` | `true` | Show pricing information |
| `showMatchScores` | `boolean` | `true` | Display relevance scores |
| `showDescriptions` | `boolean` | `true` | Show product descriptions |
| `compact` | `boolean` | `false` | Use compact display mode |
| `sortBy` | `"relevance" \| "price" \| "popularity"` | `"relevance"` | Sorting criteria |
| `onProductClick` | `(adId: string, link: string) => void` | Required | Click handler for products |
| `onLoadMore` | `() => void` | Optional | Handler for loading more recommendations |

### Layout Types

#### Auto Layout (Recommended)
```tsx
<AdMeshProductCard
  layout="auto"
  maxDisplayed={6}
  // Automatically chooses best layout based on content and screen size
/>
```

#### Grid Layout
```tsx
<AdMeshProductCard
  layout="grid"
  columns={3}
  showFeatures={true}
  showPricing={true}
/>
```

#### List Layout
```tsx
<AdMeshProductCard
  layout="list"
  compact={false}
  showMatchScores={true}
/>
```

## Best For

- **Multi-product Showcases**: Comprehensive product displays
- **Comparison Tools**: Side-by-side product evaluations
- **Research Tools**: Detailed AI platform recommendations
- **AI E-commerce Platforms**: Product category pages
- **AI Business Intelligence**: Tool and service comparisons
- **Marketplace Platforms**: Vendor and service listings

## Platform Examples

### AI E-commerce Platforms
Perfect for product category displays:

**Examples**: [Checkout Page AI](https://checkoutpage.co), [ConvertMate AI](https://convertmate.io), [Octane AI](https://www.octaneai.com)

```tsx
<AdMeshProductCard
  layout="grid"
  columns={4}
  showPricing={true}
  showFeatures={false}
  sortBy="popularity"
  onProductClick={handleProductClick}
/>
```

### AI Business Intelligence Platforms
Ideal for tool and service comparisons:

**Examples**: [Polymer](https://www.polymersearch.com), [Yurts AI](https://www.yurts.ai), [Obviously.AI](https://www.obviously.ai)

```tsx
<AdMeshProductCard
  layout="auto"
  maxDisplayed={8}
  showMatchScores={true}
  showFeatures={true}
  sortBy="relevance"
  onProductClick={handleBusinessToolClick}
/>
```

### Research Platforms
Great for comprehensive tool recommendations:

```tsx
<AdMeshProductCard
  layout="list"
  showDescriptions={true}
  showMatchScores={true}
  compact={false}
  onProductClick={handleResearchToolClick}
/>
```

## Layout Behavior

### Responsive Breakpoints

#### Desktop (1200px+)
- **Grid**: 3-4 columns
- **List**: Full-width items with side-by-side content
- **Auto**: Optimizes for desktop viewing

#### Tablet (768px - 1199px)
- **Grid**: 2-3 columns
- **List**: Stacked content with optimized spacing
- **Auto**: Adapts to tablet constraints

#### Mobile (< 768px)
- **Grid**: 1-2 columns
- **List**: Single column, compact layout
- **Auto**: Mobile-optimized single column

### Content Adaptation

Layout automatically adjusts based on:
- **Content density**: More/fewer details based on space
- **Image availability**: Layouts adapt to product images
- **Text length**: Accommodates varying description lengths
- **Feature count**: Adjusts for different feature list sizes

## Sorting and Filtering

### Sort Options

#### By Relevance
```tsx
sortBy="relevance"
// Orders by match score and contextual relevance
```

#### By Price
```tsx
sortBy="price"
// Orders from lowest to highest price
```

#### By Popularity
```tsx
sortBy="popularity"
// Orders by user engagement and conversion rates
```

### Custom Sorting

```tsx
const customSort = (a, b) => {
  // Custom sorting logic
  return a.customScore - b.customScore;
};

<AdMeshProductCard
  recommendations={recommendations.sort(customSort)}
  sortBy="relevance"
/>
```

## Performance Optimization

### Lazy Loading

```tsx
<AdMeshProductCard
  maxDisplayed={6}
  onLoadMore={loadMoreRecommendations}
  // Loads additional recommendations on demand
/>
```

### Virtual Scrolling

For large recommendation sets:
- **Efficient rendering**: Only renders visible items
- **Smooth scrolling**: Maintains performance with many items
- **Memory management**: Optimizes memory usage

### Image Optimization

- **Lazy image loading**: Images load as they come into view
- **Responsive images**: Appropriate sizes for different screens
- **Fallback handling**: Graceful handling of missing images

## Styling and Customization

### CSS Classes

- `.admesh-layout`: Main layout container
- `.admesh-layout-grid`: Grid layout wrapper
- `.admesh-layout-list`: List layout wrapper
- `.admesh-layout-item`: Individual recommendation item
- `.admesh-layout-features`: Features list
- `.admesh-layout-pricing`: Pricing information

### Grid Customization

```css
.admesh-layout-grid {
  display: grid;
  grid-template-columns: repeat(var(--columns), 1fr);
  gap: var(--spacing-lg);
  padding: var(--spacing-md);
}

.admesh-layout-item {
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: var(--spacing-md);
}
```

### List Customization

```css
.admesh-layout-list .admesh-layout-item {
  display: flex;
  align-items: center;
  padding: var(--spacing-lg);
  border-bottom: 1px solid var(--border-light);
}
```

## Analytics and Tracking

Layout provides comprehensive analytics:

- **Layout performance**: Which layouts drive most engagement
- **Position analysis**: Performance by recommendation position
- **Sorting effectiveness**: Impact of different sort orders
- **Load patterns**: How users interact with pagination
- **Conversion tracking**: Revenue attribution by layout position

## Performance Metrics

Layouts typically achieve:
- **Good visibility**: 80%+ of recommendations are seen
- **Variable CTR**: 2-8% depending on position and relevance
- **Strong comparisons**: Users compare multiple options
- **Higher conversions**: Comprehensive information improves decisions

## Advanced Features

### Custom Templates

```tsx
const customItemTemplate = (recommendation) => (
  <div className="custom-recommendation">
    <h3>{recommendation.title}</h3>
    <p>{recommendation.description}</p>
    {/* Custom content */}
  </div>
);

<AdMeshProductCard
  recommendations={recommendations}
  itemTemplate={customItemTemplate}
/>
```

### Filtering Integration

```tsx
const [filteredRecs, setFilteredRecs] = useState(recommendations);

const handleFilter = (criteria) => {
  const filtered = recommendations.filter(rec => 
    rec.category === criteria.category
  );
  setFilteredRecs(filtered);
};

<AdMeshProductCard
  recommendations={filteredRecs}
  layout="grid"
/>
```



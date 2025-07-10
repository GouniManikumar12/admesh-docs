# Expandable Unit

The **AdMeshExpandableUnit** is a comprehensive ad format inspired by modern sponsored content layouts. It features a collapsible design with multiple content sections, making it perfect for detailed product showcases while maintaining a clean, unobtrusive appearance when collapsed.

## Overview

This ad unit mimics the style of premium sponsored content found on major platforms, featuring:

- **Collapsible header** with product branding and sponsor information
- **Multiple content sections** with icons, titles, and descriptions
- **Prominent call-to-action button** for conversions
- **Responsive design** that works across different screen sizes
- **Theme support** for light/dark modes and custom branding

## Key Features

- **Professional appearance**: Matches the quality of premium sponsored content
- **Smart CTA placement**: Button appears on the right when collapsed, full-width when expanded
- **Expandable sections**: Users can explore more details without leaving the page
- **Customizable content**: Flexible sections that adapt to different products
- **Strong branding**: Clear sponsor identification and product presentation
- **High engagement**: Multiple touchpoints for user interaction

## Implementation

### Basic Usage

```tsx
import { AdMeshExpandableUnit } from 'admesh-ui-sdk';

<AdMeshExpandableUnit
  recommendation={recommendation}
  initialExpanded={false} // Starts collapsed with CTA button on right
  ctaText="Get Started"
  onClick={(adId, admeshLink) => window.open(admeshLink, '_blank')}
/>
```

### Collapsed vs Expanded Behavior

**When Collapsed:**
- Shows product header with branding
- CTA button appears on the right side of the header
- Compact, unobtrusive appearance
- Click expand button to reveal details

**When Expanded:**
- Shows all content sections with descriptions
- CTA button appears full-width at the bottom
- Detailed product information visible
- Click collapse button to minimize

### Configuration Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `recommendation` | `AdMeshRecommendation` | Required | Product recommendation data |
| `theme` | `AdMeshTheme` | `{ mode: 'light' }` | Theme configuration |
| `className` | `string` | `''` | Custom CSS class |
| `onClick` | `function` | `undefined` | Click handler for CTA button |
| `showPoweredBy` | `boolean` | `true` | Show AdMesh branding |
| `initialExpanded` | `boolean` | `false` | Initial expanded state |
| `collapsible` | `boolean` | `true` | Enable collapse/expand |
| `ctaText` | `string` | `'Get Started'` | CTA button text |
| `sections` | `array` | Auto-generated | Custom content sections |

### Custom Sections

You can provide custom sections to tailor the content to your product:

```tsx
const customSections = [
  {
    title: 'API Documentation',
    description: 'Comprehensive guides and API references to get you started.',
    icon: '📚'
  },
  {
    title: 'Talk to Sales',
    description: 'Connect with our team for enterprise solutions and custom pricing.',
    icon: '💼'
  },
  {
    title: 'Live Demo',
    description: 'See our platform in action with an interactive demonstration.',
    icon: '🎯'
  }
];

<AdMeshExpandableUnit
  recommendation={recommendation}
  sections={customSections}
  ctaText="Schedule Demo"
/>
```

### Theme Customization

```tsx
<AdMeshExpandableUnit
  recommendation={recommendation}
  theme={{
    mode: 'dark',
    accentColor: '#3b82f6',
    borderRadius: '16px',
    fontFamily: 'Inter, sans-serif'
  }}
/>
```

## Use Cases

### AI Development Platforms
Perfect for showcasing developer tools, APIs, and infrastructure services with detailed feature breakdowns.

### SaaS Products
Ideal for business software with multiple features that benefit from detailed explanation.

### Enterprise Solutions
Great for complex products that require education and consultation before purchase.

### Technical Services
Excellent for platforms offering documentation, support, and professional services.

## Best Practices

### Content Strategy
- **Clear value proposition** in the header
- **Logical section progression** from basic to advanced features
- **Compelling CTA** that matches user intent
- **Consistent branding** throughout all sections

### User Experience
- Start collapsed to avoid overwhelming users
- Use descriptive section titles and clear descriptions
- Provide multiple engagement opportunities
- Ensure mobile responsiveness

### Performance
- Lazy load expanded content when possible
- Optimize images and icons for fast loading
- Track expansion rates to optimize content

## Analytics & Tracking

The component automatically tracks:
- **Impressions** when the ad unit is displayed
- **Expansions** when users open the collapsed unit
- **Section views** for each content section
- **CTA clicks** for conversion tracking

```tsx
<AdMeshExpandableUnit
  recommendation={recommendation}
  onClick={(adId, admeshLink) => {
    // Custom tracking
    analytics.track('expandable_unit_click', {
      adId,
      product: recommendation.title,
      expanded: true
    });
    
    // Open link
    window.open(admeshLink, '_blank');
  }}
/>
```

## Accessibility

The component includes:
- **Keyboard navigation** for all interactive elements
- **ARIA labels** for screen readers
- **Focus management** for expanded/collapsed states
- **High contrast** support in dark mode

## Examples

### Temporal-style Developer Tool
```tsx
<AdMeshExpandableUnit
  recommendation={temporalRecommendation}
  ctaText="Register"
  sections={[
    {
      title: 'Docs',
      description: 'Documentation. Start Learning Temporal.',
      icon: '📖'
    },
    {
      title: 'Talk To An Expert',
      description: 'Ready to learn more about temporal? Reach out to a platform specialist.',
      icon: '💬'
    },
    {
      title: 'Temporal for AI',
      description: 'Temporal is the orchestrator for AI applications. Watch a demo.',
      icon: '🤖'
    },
    {
      title: 'How it Works',
      description: 'Learn How to Build With Temporal. Start Your Journey.',
      icon: '🚀'
    }
  ]}
/>
```

### Stripe-style Payment Platform
```tsx
<AdMeshExpandableUnit
  recommendation={stripeRecommendation}
  theme={{ accentColor: '#635bff' }}
  ctaText="Start Free"
  sections={[
    {
      title: 'Accept Payments',
      description: 'Start accepting payments online and in person with our unified platform.',
      icon: '💳'
    },
    {
      title: 'Developer Tools',
      description: 'Build and test your integration with our comprehensive APIs and SDKs.',
      icon: '🛠️'
    }
  ]}
/>
```

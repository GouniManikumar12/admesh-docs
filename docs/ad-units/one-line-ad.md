---
sidebar_position: 2
---

# One Line Ad

The most minimal and unobtrusive ad format - perfect for clean, natural product recommendations that blend seamlessly into content.

## Description

One Line Ad is designed for maximum simplicity and minimal visual impact. It appears as a single line of text that naturally integrates with your content, making it perfect for AI platforms that prioritize clean, distraction-free user experiences.

## Key Features

- **Ultra-minimal**: Single line of text with product name and simple description
- **Two variations**: Question format ("Looking for X? Try Y") or statement format ("Y offers X, visit")
- **Clean integration**: Blends naturally into any content
- **Powered by branding**: Optional "" attribution
- **Non-intrusive**: Maintains user focus while providing value

## Implementation

### Basic Usage

```tsx
import { AdMeshProductCard } from 'admesh-ui-sdk';

<AdMeshProductCard
  recommendation={recommendation}
  variation="simple" // Creates inline ad format
  showPoweredBy={true}
  onClick={(adId, admeshLink) => window.open(admeshLink, '_blank')}
/>
```

### Configuration Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `recommendation` | `Recommendation` | Required | The recommendation data object |
| `variation` | `"question" \| "statement"` | `"question"` | Display format variation |
| `showPoweredBy` | `boolean` | `true` | Show "" attribution |
| `onClick` | `(adId: string, admeshLink: string) => void` | Required | Click handler function |

### Variations

#### Question Format
```
Looking for payment solutions for your business? Try Stripe
```

#### Statement Format
```
Stripe offers excellent payment solutions for small businesses, visit
```

## Best For

- **AI Code Editors**: [Cursor](https://www.cursor.so), [Sweep](https://sweep.dev), [Mutable AI](https://mutable.ai)
- **Chat Interfaces**: Minimal conversational AI platforms
- **Content Feeds**: Blog posts, articles, documentation
- **Developer Tools**: Coding environments and technical platforms
- **Minimal UI Designs**: Clean, distraction-free interfaces

## Platform Examples

### AI Code Editors
Perfect for development environments where minimal disruption is crucial:

**Examples**: [Cursor](https://www.cursor.so), [Sweep](https://sweep.dev), [Mutable AI](https://mutable.ai)

```tsx
<AdMeshProductCard
  variation="statement"
  showPoweredBy={false}
  onClick={handleDeveloperToolClick}
/>
```

### Chat Interfaces
Ideal for conversational AI platforms:

```tsx
<AdMeshProductCard
  variation="question"
  showPoweredBy={true}
  onClick={handleChatRecommendationClick}
/>
```

## Styling and Customization

The One Line Ad automatically inherits your platform's text styling, ensuring seamless visual integration. The component respects your existing typography and color schemes.

### CSS Classes

- `.admesh-simple-ad`: Main container
- `.admesh-simple-ad-text`: Text content
- `.admesh-powered-by`: Attribution text

## Analytics and Tracking

Every One Line Ad interaction is automatically tracked:

- **Impressions**: When the ad is displayed
- **Clicks**: When users click on recommendations
- **Conversions**: When clicks lead to purchases
- **Revenue**: Earnings from successful conversions

## Performance Metrics

One Line Ads typically achieve:
- **High CTR**: 2-5% click-through rates
- **Low bounce**: Minimal impact on user engagement
- **Fast loading**: Instant rendering with no performance impact
- **Mobile optimized**: Perfect display on all device sizes



---
sidebar_position: 4
---

# AdMesh Ad Formats

AdMesh offers multiple ad formats designed to integrate seamlessly with AI agents and conversational interfaces. Each format is optimized for different use cases and user experiences.

## Format Selection Guide

Choose the right ad format based on your integration needs:

| Format | Best For | Integration Complexity | User Experience |
|--------|----------|----------------------|------------------|
| **One Line Ad** | Minimal integration, chat interfaces | Low | Ultra-clean |
| **Product Card** | Detailed recommendations | Medium | Rich information |
| **Conversation Summary** | End-of-chat recommendations | Medium | Natural conclusion |
| **Citation** | Academic AI, Research tools | Low | Non-intrusive |
| **Floating Recommendations** | Proactive suggestions | Medium | Context-aware |
| **Sidebar** | Dashboard interfaces | Low | Persistent visibility |
| **Layout** | Comprehensive displays | High | Flexible arrangement |

## Platform Integration Examples

### Code Editors (VS Code, Cursor, Replit)
Minimal, non-intrusive recommendations for development tools:
```tsx
<AdMeshSimpleAd variation="statement" />
<AdMeshCitationUnit academicStyle={false} />
```

### Design Tools (Figma, Canva, Adobe)
Visual product cards for design assets and tools:
```tsx
<AdMeshProductCard showFeatures={true} />
<AdMeshLayout autoLayout={true} maxDisplayed={3} />
```

### Business Intelligence (Tableau, PowerBI, Looker)
Academic-style citations for data tools and analytics:
```tsx
<AdMeshCitationUnit citationNumber={1} showSource={true} />
<AdMeshLayout intentType="analytics" />
```

### E-commerce Platforms (Shopify, WooCommerce, Magento)
Sidebar recommendations for store enhancement tools:
```tsx
<AdMeshSidebar title="Store Tools" persistentDisplay={true} />
<AdMeshFloatingRecommendations trigger="contextual" />
```

### CRM Systems (Salesforce, HubSpot, Pipedrive)
Conversation summaries for sales and marketing tools:
```tsx
<AdMeshConversationSummary showTopRecommendations={3} />
<AdMeshProductCard showPricing={true} />
```

### Project Management (Asana, Monday.com, Linear)
Contextual floating widgets for productivity tools:
```tsx
<AdMeshFloatingRecommendations position="bottom-right" />
<AdMeshLayout autoLayout={true} maxDisplayed={4} />
```

## Performance Metrics

Each format provides detailed analytics:
- **Click-through rates (CTR)** - Track user engagement
- **Conversion tracking** - Monitor successful purchases
- **User engagement metrics** - Measure interaction quality
- **Revenue attribution** - Calculate earnings per format

## Ad Format Components

AdMesh provides seven distinct ad formats, each optimized for different integration scenarios and user experiences.

### Component Overview

| Component | Use Case | Integration Level | Best For |
|-----------|----------|------------------|----------|
| **One Line Ad** | Minimal recommendations | Low | Code editors, minimal interfaces |
| **Product Card** | Detailed product info | Medium | Design tools, e-commerce platforms |
| **Conversation Summary** | End-of-session recommendations | Medium | CRM systems, chat interfaces |
| **Citation** | Academic-style references | Low | Business intelligence, research tools |
| **Floating Recommendations** | Context-aware suggestions | Medium | Project management, productivity tools |
| **Sidebar** | Persistent recommendations | Low | Dashboard interfaces, workspace apps |
| **Layout** | Comprehensive displays | High | Multi-product showcases, comparison tools |

### Implementation Examples

#### One Line Ad - Minimal Integration
```tsx
import { AdMeshSimpleAd } from 'admesh-ui-sdk';

<AdMeshSimpleAd
  recommendation={recommendation}
  variation="question" // "question" or "statement"
  showPoweredBy={true}
  onClick={(adId, admeshLink) => window.open(admeshLink, '_blank')}
/>
```

#### Product Card - Rich Information Display
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

#### Conversation Summary - End-of-Session Recommendations
```tsx
import { AdMeshConversationSummary } from 'admesh-ui-sdk';

<AdMeshConversationSummary
  recommendations={recommendations}
  conversationSummary="Based on our conversation..."
  showTopRecommendations={3}
  onRecommendationClick={(adId, link) => window.open(link)}
/>
```

#### Citation - Academic-Style References
```tsx
import { AdMeshCitationUnit } from 'admesh-ui-sdk';

<AdMeshCitationUnit
  recommendation={recommendation}
  citationNumber={1}
  showSource={true}
  onClick={(adId, admeshLink) => window.open(admeshLink, '_blank')}
/>
```

#### Floating Recommendations - Context-Aware Widgets
```tsx
import { AdMeshAutoRecommendationWidget } from 'admesh-ui-sdk';

<AdMeshAutoRecommendationWidget
  recommendations={recommendations}
  trigger="contextual"
  autoShow={true}
  position="bottom-right"
/>
```

#### Sidebar - Persistent Panels
```tsx
import { AdMeshSidebar } from 'admesh-ui-sdk';

<AdMeshSidebar
  recommendations={recommendations}
  title="Recommended Tools"
  maxDisplayed={4}
  onRecommendationClick={(adId, link) => window.open(link)}
/>
```

#### Layout - Comprehensive Displays
```tsx
import { AdMeshLayout } from 'admesh-ui-sdk';

<AdMeshLayout
  recommendations={recommendations}
  autoLayout={true}
  maxDisplayed={6}
  showMatchScores={true}
  showFeatures={true}
  onProductClick={(adId, link) => window.open(link)}
/>
```

## Getting Started

### Quick Integration

1. **Install the SDK**:
```bash
npm install admesh-ui-sdk
```

2. **Import components**:
```tsx
import { AdMeshSimpleAd, AdMeshProductCard, AdMeshLayout } from 'admesh-ui-sdk';
```

3. **Add to your platform**:
```tsx
// For code editors
<AdMeshSimpleAd variation="statement" />

// For business intelligence tools
<AdMeshCitationUnit citationNumber={1} />

// For e-commerce platforms
<AdMeshSidebar title="Store Tools" />

// For comprehensive displays
<AdMeshLayout autoLayout={true} />
```

### Live Examples

**Interactive Storybook**: [https://storybook.useadmesh.com/](https://storybook.useadmesh.com/)

Explore all ad formats with live, interactive examples. See how each component works in different themes and configurations.

## Best Practices by Platform Type

### Code Editors (VS Code, Cursor, Replit)
- Use **One Line Ad** with statement variation for minimal disruption
- Keep recommendations developer-focused and contextual
- Integrate naturally into coding workflows

### Design Tools (Figma, Canva, Adobe)
- Implement **Product Card** for visual asset recommendations
- Use **Layout System** for showcasing design resources
- Focus on creative tools and design assets

### Business Intelligence (Tableau, PowerBI, Looker)
- Use **Citation Format** for data tool references
- Implement **Layout System** for comprehensive analytics tools
- Maintain professional, research-focused presentation

### E-commerce Platforms (Shopify, WooCommerce, Magento)
- Add **Sidebar Recommendations** for persistent store tool visibility
- Use **Floating Recommendations** for contextual store enhancements
- Focus on conversion and sales optimization tools

### CRM Systems (Salesforce, HubSpot, Pipedrive)
- Implement **Conversation Summary** for sales tool recommendations
- Use **Product Card** for detailed feature comparisons
- Focus on sales and marketing automation tools

### Project Management (Asana, Monday.com, Linear)
- Use **Floating Recommendations** for productivity suggestions
- Implement **Layout System** for comprehensive tool displays
- Focus on workflow and collaboration enhancements

## Live Storybook Examples

### Interactive Component Showcase

Explore all AdMesh ad formats with live, interactive examples:

**Live Hosted Version**: [https://storybook.useadmesh.com/](https://storybook.useadmesh.com/)

The Storybook includes:
- **One Line Ad** - Minimal integration examples
- **Product Card** - Rich recommendation displays
- **Conversation Summary** - End-of-chat recommendations
- **Citation** - Academic-style references
- **Floating Recommendations** - Context-aware widgets
- **Sidebar** - Persistent recommendation panels
- **Layout** - Comprehensive arrangement systems

### Run Locally

```bash
# Clone the UI SDK repository
git clone https://github.com/GouniManikumar12/admesh-ui-sdk.git
cd admesh-ui-sdk

# Install dependencies and start Storybook
npm install
npm run storybook
```

The Storybook will open at `http://localhost:6007` with all interactive examples.

## Why AdMesh is Different

### Traditional vs AdMesh Approach

| Aspect | Traditional Ads | AdMesh |
|--------|----------------|---------|
| **Integration** | Separate from content | Native to conversation |
| **Timing** | Interrupts user flow | Context-triggered |
| **Relevance** | Often irrelevant | AI-determined relevance |
| **User Experience** | Disruptive | Enhancing |
| **Format** | Banner/display ads | Citation references |
| **Intelligence** | Rule-based targeting | AI intent detection |

### Key Advantages

- **Intent Detection**: Understands user needs from conversation context
- **Academic Style**: Citations feel like helpful references, not ads
- **AI-Native**: Built specifically for AI platforms and conversational interfaces
- **Contextual Timing**: Shows recommendations at optimal moments
- **Value-First**: Provides genuine value before monetization

---

**Ready to integrate AdMesh into your AI platform?** Start with the [Quick Start Guide](./quick-start) or explore the [live Storybook examples](https://storybook.useadmesh.com/).

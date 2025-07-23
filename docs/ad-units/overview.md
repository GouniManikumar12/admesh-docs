---
sidebar_position: 1
---

# Overview

AdMesh offers multiple ad formats designed to integrate seamlessly with AI Platforms and conversational interfaces. Each format is optimized for different use cases and user experiences.

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

## Platform Integration Guide

### AI Code Editors
- **Recommended**: One Line Ad, Citation
- **Focus**: Developer tools, testing, refactoring
- **Examples**: Cursor, Sweep, Mutable AI

### AI Design Tools
- **Recommended**: Product Card, Layout
- **Focus**: Creative workflows, UI kits, design assets
- **Examples**: Uizard, Galileo AI, Khroma

### AI Business Intelligence
- **Recommended**: Citation, Layout
- **Focus**: Analytics tools, data visualization, reporting
- **Examples**: Polymer, Yurts AI, Obviously.AI

### AI E-commerce Platforms
- **Recommended**: Floating Recommendations, Sidebar
- **Focus**: Store optimization, conversion tools
- **Examples**: Checkout Page AI, ConvertMate AI, Octane AI

### AI CRM Systems
- **Recommended**: Conversation Summary, Product Card
- **Focus**: Sales automation, customer management
- **Examples**: Regie.ai, CoPilot AI, Nooks

### AI Project Management
- **Recommended**: Floating Recommendations, Layout
- **Focus**: Productivity tools, collaboration, planning
- **Examples**: Taskade AI, Tability AI, Magical

## Performance Metrics & Revenue

Each format provides detailed analytics and revenue opportunities:
- **Click-through rates (CTR)** - Track user engagement
- **Conversion tracking** - Monitor successful purchases
- **User engagement metrics** - Measure interaction quality
- **Revenue attribution** - Calculate earnings per format

:::tip Optimize Your Revenue
Different ad formats have varying revenue potential. Use our earnings calculator to compare the earning potential of each format for your specific use case.

[Calculate Revenue by Format →](https://useadmesh.com/dashboard/earnings)
:::

## Ad Format Components

AdMesh provides seven distinct ad formats, each optimized for different integration scenarios and user experiences.

### Component Overview

| Component | Use Case | Integration Level | Best For |
|-----------|----------|------------------|----------|
| **One Line Ad** | Minimal recommendations | Low | AI code editors, minimal interfaces |
| **Product Card** | Detailed product info | Medium | AI design tools, e-commerce platforms |
| **Conversation Summary** | End-of-session recommendations | Medium | AI CRM systems, chat interfaces |
| **Citation** | Academic-style references | Low | AI business intelligence, research tools |
| **Floating Recommendations** | Context-aware suggestions | Medium | AI project management, productivity tools |
| **Sidebar** | Persistent recommendations | Low | AI dashboard interfaces, workspace apps |
| **Layout** | Comprehensive displays | High | Multi-product showcases, comparison tools |
| **Expandable Unit** | Premium sponsored content | Medium-High | Detailed product showcases, enterprise solutions |



## Getting Started

### Quick Integration

1. **Install the SDK**:
```bash
npm install admesh-ui-sdk
```

2. **Import components**:
```tsx
import { AdMeshProductCard, AdMeshExpandableUnit } from 'admesh-ui-sdk';
```

3. **Add to your AI platform**:
```tsx
// For AI code editors - simple inline format
<AdMeshProductCard variation="simple" />

// For AI business intelligence tools
<AdMeshCitationUnit citationNumber={1} />

// For AI e-commerce platforms
<AdMeshSidebar title="Store Tools" />

// For premium sponsored content
<AdMeshExpandableUnit ctaText="Get Started" />

// For comprehensive displays - grid layout
<div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
  {recommendations.map(rec => <AdMeshProductCard key={rec.ad_id} recommendation={rec} />)}
</div>
```

### Live Examples

**Interactive Storybook**: [https://storybook.useadmesh.com/](https://storybook.useadmesh.com/)

Explore all ad formats with live, interactive examples. See how each component works in different themes and configurations.

## Live Demo Components

Experience AdMesh ad units with real demo data. Each component shows how it would appear in your AI platform with actual product recommendations.

:::info Interactive Demos Available
Visit our [interactive demo page](https://useadmesh.com/demo) to see live examples of all ad formats in action.
:::

### Available Ad Formats

1. **One Line Ad** - Minimal, single-line recommendations
2. **Product Card** - Rich product information with features and pricing
3. **Conversation Summary** - End-of-conversation recommendations
4. **Citation** - Academic-style references with source attribution
5. **Expandable Unit** - Collapsible detailed recommendations
6. **Floating Recommendations** - Context-aware overlay suggestions
7. **Sidebar** - Persistent recommendation panel
8. **Layout** - Flexible grid-based arrangement

## Key Advantages

- **Intent Detection**: AI-powered understanding of user needs
- **Native Integration**: Seamlessly blends with conversational interfaces
- **Contextual Timing**: Recommendations appear at optimal moments
- **Academic Style**: Citations feel like helpful references
- **Value-First**: Genuine utility before monetization

---

**Ready to integrate AdMesh into your AI platform?** Start with the [Quick Start Guide](/getting-started/quick-start) or explore the [live Storybook examples](https://storybook.useadmesh.com/).

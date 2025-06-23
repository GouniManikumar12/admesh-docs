---
sidebar_position: 1
---

# Overview

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
| **One Line Ad** | Minimal recommendations | Low | AI code editors, minimal interfaces |
| **Product Card** | Detailed product info | Medium | AI design tools, e-commerce platforms |
| **Conversation Summary** | End-of-session recommendations | Medium | AI CRM systems, chat interfaces |
| **Citation** | Academic-style references | Low | AI business intelligence, research tools |
| **Floating Recommendations** | Context-aware suggestions | Medium | AI project management, productivity tools |
| **Sidebar** | Persistent recommendations | Low | AI dashboard interfaces, workspace apps |
| **Layout** | Comprehensive displays | High | Multi-product showcases, comparison tools |



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

3. **Add to your AI platform**:
```tsx
// For AI code editors
<AdMeshSimpleAd variation="statement" />

// For AI business intelligence tools
<AdMeshCitationUnit citationNumber={1} />

// For AI e-commerce platforms
<AdMeshSidebar title="Store Tools" />

// For comprehensive displays
<AdMeshLayout autoLayout={true} />
```

### Live Examples

**Interactive Storybook**: [https://storybook.useadmesh.com/](https://storybook.useadmesh.com/)

Explore all ad formats with live, interactive examples. See how each component works in different themes and configurations.

## Live Demo Components

Experience AdMesh ad units with real demo data below. Each component shows how it would appear in your AI platform with actual product recommendations.

import { OneLineAdDemo, ProductCardDemo, ConversationSummaryDemo, CitationDemo, FloatingRecommendationsDemo, SidebarDemo, LayoutDemo } from '@site/src/components/AdMeshDemo';

### One Line Ad
<OneLineAdDemo />

### Product Card
<ProductCardDemo />

### Conversation Summary
<ConversationSummaryDemo />

### Citation
<CitationDemo />

### Floating Recommendations
<FloatingRecommendationsDemo />

### Sidebar
<SidebarDemo />

### Layout
<LayoutDemo />

## Key Advantages

- **Intent Detection**: AI-powered understanding of user needs
- **Native Integration**: Seamlessly blends with conversational interfaces
- **Contextual Timing**: Recommendations appear at optimal moments
- **Academic Style**: Citations feel like helpful references
- **Value-First**: Genuine utility before monetization

---

**Ready to integrate AdMesh into your AI platform?** Start with the [Quick Start Guide](/getting-started/quick-start) or explore the [live Storybook examples](https://storybook.useadmesh.com/).

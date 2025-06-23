---
sidebar_position: 4
---

# AdMesh Ad Formats

AdMesh offers multiple ad formats designed to integrate seamlessly with AI agents and conversational interfaces. Each format is optimized for different use cases and user experiences.

## 🎯 Format Selection Guide

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

## 🔧 Real-World AI Platform Examples

### **ChatGPT-style Interfaces**
Perfect for conversational flows with natural product mentions:
```tsx
<AdMeshSimpleAd variation="question" />
<AdMeshConversationSummary showTopRecommendations={2} />
```

### **Perplexity-style Research Tools**
Ideal for academic-style citations and research contexts:
```tsx
<AdMeshCitationUnit citationNumber={1} showSource={true} />
<AdMeshLayout intentType="research_tools" />
```

### **Claude-style AI Assistants**
Great for contextual suggestions and helpful recommendations:
```tsx
<AdMeshAutoRecommendationWidget trigger="contextual" />
<AdMeshProductCard showFeatures={true} />
```

### **Notion AI-style Productivity Tools**
Perfect for sidebar recommendations and workspace integration:
```tsx
<AdMeshSidebar title="Suggested Tools" persistentDisplay={true} />
<AdMeshLayout autoLayout={true} maxDisplayed={4} />
```

### **GitHub Copilot-style Developer Tools**
Optimized for developer-focused recommendations:
```tsx
<AdMeshSimpleAd variation="statement" />
<AdMeshCitationUnit academicStyle={false} />
```

## 📊 Performance Metrics

Each format provides detailed analytics:
- **Click-through rates (CTR)** - Track user engagement
- **Conversion tracking** - Monitor successful purchases
- **User engagement metrics** - Measure interaction quality
- **Revenue attribution** - Calculate earnings per format

## 🎨 Interactive Ad Format Demos

### 1. One Line Ad Format

The most minimal and unobtrusive ad format - perfect for clean, natural product recommendations that blend seamlessly into content.

**🌐 [Try Interactive Demo →](https://storybook.useadmesh.com/?path=/story/one-line-ad--default)**

**Example Output:**
```
Looking for payment solutions for your business? Try Stripe
```

**Key Features**:
- **Ultra-minimal**: Single line of text with product name and simple description
- **Two variations**: Question format ("Looking for X? Try Y") or statement format ("Y offers X, visit")
- **Clean integration**: Blends naturally into any content
- **Powered by branding**: Optional "powered by AdMesh" attribution
- **Perfect for**: ChatGPT-style interfaces, content feeds, minimal UI designs

**Code Example**:
```tsx
import { AdMeshSimpleAd } from 'admesh-ui-sdk';

<AdMeshSimpleAd
  recommendation={recommendation}
  variation="question" // "question" or "statement"
  showPoweredBy={true}
  onClick={(adId, admeshLink) => {
    window.open(admeshLink, '_blank');
  }}
/>
```

### 2. Product Card Format

Comprehensive product recommendation cards with detailed information, features, and pricing.

**🌐 [Try Interactive Demo →](https://storybook.useadmesh.com/?path=/story/product-card--default)**

**Example Output:**
```
┌─────────────────────────────────────┐
│ Stripe                              │
│ Perfect payment solution for your   │
│ business with excellent developer   │
│ tools                              │
│                                    │
│ Features: Easy integration, Global  │
│ payments, Developer-friendly        │
│ Pricing: 2.9% + 30¢ per transaction│
│ Match Score: 95%                   │
└─────────────────────────────────────┘
```

**Key Features**:
- **Rich information**: Product details, features, pricing, and match scores
- **Visual appeal**: Clean card design with proper spacing and typography
- **Interactive elements**: Clickable cards with hover effects
- **Customizable display**: Show/hide features, pricing, and match scores
- **Perfect for**: Perplexity-style research tools, detailed AI recommendations

**Code Example**:
```tsx
import { AdMeshProductCard } from 'admesh-ui-sdk';

<AdMeshProductCard
  recommendation={recommendation}
  showFeatures={true}
  showPricing={true}
  showMatchScore={true}
  onClick={(adId, admeshLink) => {
    window.open(admeshLink, '_blank');
  }}
/>
```

### 3. Conversation Summary Format

End-of-conversation summaries with top recommendations based on the discussion.

**🌐 [Try Interactive Demo →](https://storybook.useadmesh.com/?path=/story/conversation-summary--default)**

**Example Output:**
```
Based on our conversation about payment solutions and AI integration,
here are the top recommendations for your project:

• Stripe - Perfect payment solution for your business
• OpenAI API - Industry-leading AI models for your applications
```

**Key Features**:
- **Natural conclusion**: Appears at the end of conversations
- **Contextual summary**: Summarizes the conversation and provides relevant recommendations
- **Top recommendations**: Shows the most relevant products based on discussion
- **Conversation flow**: Maintains natural chat interface flow
- **Perfect for**: ChatGPT-style interfaces, AI assistants, conversational tools

**Code Example**:
```tsx
import { AdMeshConversationSummary } from 'admesh-ui-sdk';

<AdMeshConversationSummary
  recommendations={recommendations}
  conversationSummary="Based on our conversation about payment solutions..."
  showTopRecommendations={3}
  onRecommendationClick={(adId, link) => window.open(link)}
/>
```

### 4. Citation Format

Academic-style citations that reference products like research sources, perfect for research tools and AI platforms.

**🌐 [Try Interactive Demo →](https://storybook.useadmesh.com/?path=/story/citation--default)**

**Example Output:**
```
For your startup's CRM needs, I recommend HubSpot¹ for its excellent
free tier and Salesforce² for enterprise features...

References:
¹ HubSpot CRM - Free tier with excellent startup features
² Salesforce - Enterprise-grade CRM with advanced automation
```

**Key Features**:
- **Academic style**: References products like research citations
- **Non-intrusive**: Blends naturally into educational content
- **Numbered references**: Clear citation numbering system
- **Source attribution**: Shows product information as citations
- **Perfect for**: Perplexity-style research tools, educational AI, academic platforms

**Code Example**:
```tsx
import { AdMeshCitationUnit } from 'admesh-ui-sdk';

<AdMeshCitationUnit
  recommendation={recommendation}
  citationNumber={1}
  showSource={true}
  onClick={(adId, admeshLink) => {
    window.open(admeshLink, '_blank');
  }}
/>
```

### 5. Floating Recommendations

Proactive recommendations that appear as floating widgets based on conversation context.

**🌐 [Try Interactive Demo →](https://storybook.useadmesh.com/?path=/story/floating-recommendations--default)**

**Example Output:**
```
┌─ Main Content Area ─────────────────┐
│ This is your main content...        │
│                                     │
│                    ┌─ Floating ─┐   │
│                    │ Stripe      │   │
│                    │ Payment     │   │
│                    │ Solutions   │   │
│                    └─────────────┘   │
└─────────────────────────────────────┘
```

**Key Features**:
- **Context-triggered**: Appears automatically when relevant topics are mentioned
- **Non-blocking**: Floats over content without disrupting user flow
- **Dismissible**: Users can easily close or ignore recommendations
- **Positioned**: Configurable positioning (bottom-right, bottom-left, etc.)
- **Perfect for**: Claude-style assistants, productivity tools, contextual suggestions

**Code Example**:
```tsx
import { AdMeshAutoRecommendationWidget } from 'admesh-ui-sdk';

<AdMeshAutoRecommendationWidget
  recommendations={recommendations}
  trigger="User mentioned project management challenges"
  autoShow={true}
  position="bottom-right"
/>
```

### 6. Sidebar Format

Persistent recommendation panels that complement main content without interrupting the user experience.

**🌐 [Try Interactive Demo →](https://storybook.useadmesh.com/?path=/story/sidebar--default)**

**Example Output:**
```
┌─ Main Content ─┬─ Sidebar ──────────┐
│ Your main      │ Recommended for You │
│ application    │                     │
│ content goes   │ • Stripe            │
│ here...        │ • OpenAI API        │
│                │ • Vercel            │
└────────────────┴─────────────────────┘
```

**Key Features**:
- **Persistent display**: Always visible alongside main content
- **Non-intrusive**: Complements rather than interrupts main content
- **Organized layout**: Clean list of recommendations with titles
- **Collapsible**: Can be minimized when not needed
- **Perfect for**: Notion-style productivity tools, dashboard interfaces, workspace applications

**Code Example**:
```tsx
import { AdMeshSidebar } from 'admesh-ui-sdk';

<AdMeshSidebar
  recommendations={recommendations}
  title="Recommended for You"
  maxDisplayed={4}
  onRecommendationClick={(adId, link) => window.open(link)}
/>
```

### 7. Layout Format

Comprehensive layout system that intelligently arranges multiple recommendations in various formats.

**🌐 [Try Interactive Demo →](https://storybook.useadmesh.com/?path=/story/layout--default)**

**Example Output:**
```
┌─ Auto Layout ─────────────────────────────────┐
│ ┌─ Stripe ──┐ ┌─ OpenAI ──┐ ┌─ Vercel ──┐    │
│ │ Payment   │ │ AI Models │ │ Hosting   │    │
│ │ Solutions │ │ & APIs    │ │ Platform  │    │
│ │ 95% match │ │ 92% match │ │ 88% match │    │
│ └───────────┘ └───────────┘ └───────────┘    │
└───────────────────────────────────────────────┘
```

**Key Features**:
- **Auto-layout**: Intelligently arranges recommendations based on content
- **Multiple formats**: Supports grid, list, and custom layouts
- **Responsive design**: Adapts to different screen sizes
- **Rich information**: Shows features, pricing, and match scores
- **Perfect for**: Comprehensive recommendation displays, research tools, detailed AI platforms

**Code Example**:
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

## 🚀 Getting Started

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
// For ChatGPT-style interfaces
<AdMeshSimpleAd variation="question" />

// For research tools
<AdMeshCitationUnit citationNumber={1} />

// For comprehensive displays
<AdMeshLayout autoLayout={true} />
```

### Live Examples

🌐 **Interactive Storybook**: [https://storybook.useadmesh.com/](https://storybook.useadmesh.com/)

Explore all ad formats with live, interactive examples. See how each component works in different themes and configurations.

## 🎯 Best Practices

### For ChatGPT-style Platforms
- Use **One Line Ad** for minimal integration
- Add **Conversation Summary** at the end of chats
- Keep recommendations contextual and helpful

### For Research Tools (Perplexity-style)
- Implement **Citation Format** for academic feel
- Use **Layout System** for comprehensive results
- Maintain clean, research-focused design

### For Productivity Tools (Notion-style)
- Add **Sidebar Recommendations** for persistent visibility
- Use **Floating Recommendations** for contextual suggestions
- Focus on workflow-enhancing tools

### For Developer Tools (GitHub Copilot-style)
- Use **One Line Ad** with statement variation
- Keep recommendations developer-focused
- Integrate naturally into coding workflows

## 🌐 Live Storybook Examples

### Interactive Component Showcase

Explore all AdMesh ad formats with live, interactive examples:

**🌐 Live Hosted Version**: [https://storybook.useadmesh.com/](https://storybook.useadmesh.com/)

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

## 📈 Why AdMesh is Different

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

- **🎯 Intent Detection**: Understands user needs from conversation context
- **📚 Academic Style**: Citations feel like helpful references, not ads
- **🤖 AI-Native**: Built specifically for AI platforms and conversational interfaces
- **🔄 Contextual Timing**: Shows recommendations at optimal moments
- **💡 Value-First**: Provides genuine value before monetization

---

**Ready to integrate AdMesh into your AI platform?** Start with the [Quick Start Guide](./quick-start) or explore the [live Storybook examples](https://storybook.useadmesh.com/).

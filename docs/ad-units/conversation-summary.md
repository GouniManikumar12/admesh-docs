---
sidebar_position: 4
---

# Conversation Summary

End-of-conversation summaries with top recommendations based on the discussion - perfect for providing contextual suggestions after meaningful interactions.

## Description

Conversation Summary appears at natural conclusion points in conversations, providing a recap of the discussion along with relevant product recommendations. This format feels like a helpful assistant summarizing key points and suggesting useful tools based on what was discussed.

## Key Features

- **Natural conclusion**: Appears at the end of conversations
- **Contextual summary**: Summarizes the conversation and provides relevant recommendations
- **Top recommendations**: Shows the most relevant products based on discussion
- **Conversation flow**: Maintains natural chat interface flow
- **Intelligent timing**: Appears at optimal conversation endpoints
- **Personalized content**: Tailored to specific conversation context

## Implementation

### Basic Usage

```tsx
import { AdMeshConversationSummary } from 'admesh-ui-sdk';

<AdMeshConversationSummary
  recommendations={recommendations}
  conversationSummary="Based on our conversation about payment solutions..."
  showTopRecommendations={3}
  onRecommendationClick={(adId, link) => window.open(link)}
/>
```

### Configuration Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `recommendations` | `Recommendation[]` | Required | Array of recommendation objects |
| `conversationSummary` | `string` | Required | Summary text of the conversation |
| `showTopRecommendations` | `number` | `3` | Number of top recommendations to display |
| `showSummary` | `boolean` | `true` | Display conversation summary text |
| `showMatchScores` | `boolean` | `false` | Show relevance scores for recommendations |
| `onRecommendationClick` | `(adId: string, link: string) => void` | Required | Click handler for recommendations |

### Display Variations

#### With Summary
```tsx
<AdMeshConversationSummary
  conversationSummary="Based on our discussion about e-commerce solutions..."
  showTopRecommendations={3}
  showSummary={true}
/>
```

#### Recommendations Only
```tsx
<AdMeshConversationSummary
  showTopRecommendations={5}
  showSummary={false}
  showMatchScores={true}
/>
```

## Best For

- **AI CRM Systems**: [Regie.ai](https://www.regie.ai), [CoPilot AI](https://www.copilotai.com), [Nooks](https://www.nooks.in)
- **Chat Interfaces**: Conversational AI platforms and chatbots
- **Customer Service**: Support platforms and help desk systems
- **Sales Tools**: Lead qualification and sales assistance platforms
- **Consultation Platforms**: Advisory and recommendation services

## Platform Examples

### AI CRM Systems
Perfect for sales and marketing tool recommendations:

**Examples**: [Regie.ai](https://www.regie.ai), [CoPilot AI](https://www.copilotai.com), [Nooks](https://www.nooks.in)

```tsx
<AdMeshConversationSummary
  conversationSummary="Based on your sales challenges, here are some recommended tools..."
  showTopRecommendations={3}
  onRecommendationClick={handleCRMToolClick}
/>
```

### Customer Service Platforms
Ideal for support tool suggestions:

```tsx
<AdMeshConversationSummary
  conversationSummary="To help resolve similar issues in the future..."
  showTopRecommendations={2}
  showMatchScores={false}
  onRecommendationClick={handleSupportToolClick}
/>
```

### Consultation Platforms
Great for advisory service recommendations:

```tsx
<AdMeshConversationSummary
  conversationSummary="Based on your business needs assessment..."
  showTopRecommendations={4}
  showMatchScores={true}
  onRecommendationClick={handleConsultingToolClick}
/>
```

## Content Structure

A typical Conversation Summary includes:

1. **Summary Header**: "Based on our conversation..." or similar
2. **Context Recap**: Brief summary of key discussion points
3. **Recommendation Introduction**: Transition to suggested tools
4. **Top Recommendations**: List of most relevant products
5. **Optional Scores**: Match percentages for each recommendation

## Timing and Triggers

Conversation Summary should appear when:

- **Natural endpoints**: User indicates conversation is concluding
- **Problem resolution**: After addressing user's main concern
- **Information gathering**: After collecting sufficient context
- **Decision points**: When user is ready to take action
- **Session timeouts**: After periods of inactivity

## Styling and Customization

The component maintains conversational flow while clearly presenting recommendations:

### CSS Classes

- `.admesh-conversation-summary`: Main container
- `.admesh-summary-text`: Conversation summary content
- `.admesh-recommendations-list`: Recommendations container
- `.admesh-recommendation-item`: Individual recommendation
- `.admesh-match-score`: Relevance score display

### Visual Design

- **Conversational tone**: Maintains chat interface aesthetics
- **Clear separation**: Distinguishes summary from recommendations
- **Scannable format**: Easy-to-read recommendation list
- **Consistent spacing**: Proper visual hierarchy

## Analytics and Tracking

Conversation Summary provides comprehensive analytics:

- **Summary impressions**: When summaries are displayed
- **Recommendation views**: Which recommendations are seen
- **Click patterns**: Most engaging recommendation positions
- **Conversation context**: What topics drive recommendations
- **Conversion attribution**: Revenue from conversation-based recommendations

## Performance Metrics

Conversation Summaries typically achieve:
- **High relevance**: 85%+ contextual accuracy
- **Good CTR**: 4-10% click-through rates
- **Strong conversions**: Higher purchase intent from context
- **User satisfaction**: Positive feedback on helpfulness



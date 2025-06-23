---
sidebar_position: 6
---

# Floating Recommendations

Proactive recommendations that appear as floating widgets based on conversation context - perfect for contextual suggestions that don't interrupt the main user flow.

## Description

Floating Recommendations appear as non-blocking overlay widgets that provide contextual suggestions based on user behavior and conversation topics. They float over the main content without disrupting the user experience, making them ideal for proactive assistance and contextual tool suggestions.

## Key Features

- **Context-triggered**: Appears automatically when relevant topics are mentioned
- **Non-blocking**: Floats over content without disrupting user flow
- **Dismissible**: Users can easily close or ignore recommendations
- **Positioned**: Configurable positioning (bottom-right, bottom-left, etc.)
- **Smart timing**: Appears at optimal moments in user workflow
- **Adaptive content**: Recommendations change based on context

## Implementation

### Basic Usage

```tsx
import { AdMeshAutoRecommendationWidget } from 'admesh-ui-sdk';

<AdMeshAutoRecommendationWidget
  recommendations={recommendations}
  trigger="contextual"
  autoShow={true}
  position="bottom-right"
  onRecommendationClick={(adId, link) => window.open(link)}
/>
```

### Configuration Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `recommendations` | `Recommendation[]` | Required | Array of recommendation objects |
| `trigger` | `"contextual" \| "manual" \| "timed"` | `"contextual"` | When to show recommendations |
| `position` | `"bottom-right" \| "bottom-left" \| "top-right" \| "top-left"` | `"bottom-right"` | Widget position |
| `autoShow` | `boolean` | `true` | Automatically display when triggered |
| `dismissible` | `boolean` | `true` | Allow users to close the widget |
| `maxRecommendations` | `number` | `3` | Maximum recommendations to show |
| `showDelay` | `number` | `1000` | Delay before showing (milliseconds) |
| `onRecommendationClick` | `(adId: string, link: string) => void` | Required | Click handler for recommendations |
| `onDismiss` | `() => void` | Optional | Handler when widget is dismissed |

### Trigger Types

#### Contextual Triggers
```tsx
<AdMeshAutoRecommendationWidget
  trigger="contextual"
  contextKeywords={["project management", "productivity", "collaboration"]}
  autoShow={true}
/>
```

#### Manual Triggers
```tsx
<AdMeshAutoRecommendationWidget
  trigger="manual"
  show={showRecommendations}
  onDismiss={() => setShowRecommendations(false)}
/>
```

#### Timed Triggers
```tsx
<AdMeshAutoRecommendationWidget
  trigger="timed"
  showDelay={5000}
  autoShow={true}
/>
```

## Best For

- **AI Project Management**: [Taskade AI](https://www.taskade.com), [Tability AI](https://www.tability.io), [Magical](https://www.getmagical.com)
- **Productivity Tools**: Workflow optimization and task management
- **Contextual Assistance**: Help systems and guided experiences
- **AI E-commerce Platforms**: Product suggestions during browsing
- **Content Platforms**: Related tool and service recommendations

## Platform Examples

### AI Project Management Platforms
Perfect for productivity tool suggestions:

**Examples**: [Taskade AI](https://www.taskade.com), [Tability AI](https://www.tability.io), [Magical](https://www.getmagical.com)

```tsx
<AdMeshAutoRecommendationWidget
  position="bottom-right"
  trigger="contextual"
  contextKeywords={["deadline", "task", "project"]}
  onRecommendationClick={handleProductivityToolClick}
/>
```

### AI E-commerce Platforms
Ideal for contextual product suggestions:

**Examples**: [Checkout Page AI](https://checkoutpage.co), [ConvertMate AI](https://convertmate.io), [Octane AI](https://www.octaneai.com)

```tsx
<AdMeshAutoRecommendationWidget
  position="bottom-left"
  trigger="contextual"
  maxRecommendations={2}
  onRecommendationClick={handleProductClick}
/>
```

### Content Creation Platforms
Great for tool and resource suggestions:

```tsx
<AdMeshAutoRecommendationWidget
  position="top-right"
  trigger="manual"
  dismissible={true}
  onRecommendationClick={handleCreativeToolClick}
/>
```

## Widget Behavior

### Appearance Animation

Floating widgets use smooth animations:
- **Slide in**: Gentle entrance from edge
- **Fade in**: Gradual opacity increase
- **Scale in**: Subtle size animation

### Interaction States

- **Default**: Subtle presence, non-intrusive
- **Hover**: Slight highlight or shadow
- **Active**: Clear focus indication
- **Dismissed**: Smooth exit animation

### Responsive Design

- **Desktop**: Full widget with all features
- **Tablet**: Optimized size and positioning
- **Mobile**: Adapted for touch interaction

## Positioning and Layout

### Position Options

#### Bottom-Right (Default)
```tsx
position="bottom-right"
// Appears in bottom-right corner, doesn't block main content
```

#### Bottom-Left
```tsx
position="bottom-left"
// Useful when right side has other UI elements
```

#### Top-Right
```tsx
position="top-right"
// Good for header-area recommendations
```

#### Top-Left
```tsx
position="top-left"
// Alternative top positioning
```

### Z-Index Management

Floating widgets automatically manage layering:
- Above main content
- Below modal dialogs
- Proper stacking context

## Context Detection

### Keyword Matching

```tsx
const contextKeywords = [
  "project management",
  "task tracking",
  "team collaboration",
  "deadline management"
];

<AdMeshAutoRecommendationWidget
  contextKeywords={contextKeywords}
  trigger="contextual"
/>
```

### Behavioral Triggers

- **Page dwell time**: Show after user spends time on page
- **Scroll patterns**: Trigger based on scroll behavior
- **Click patterns**: Respond to user interaction patterns
- **Form interactions**: Suggest tools during form completion

## Styling and Customization

### CSS Classes

- `.admesh-floating-widget`: Main widget container
- `.admesh-widget-header`: Widget title area
- `.admesh-widget-content`: Recommendations content
- `.admesh-widget-dismiss`: Close button
- `.admesh-recommendation-item`: Individual recommendations

### Theme Integration

Floating widgets adapt to your platform's design:
- **Color scheme**: Matches your brand colors
- **Typography**: Uses your font family
- **Border radius**: Follows your design system
- **Shadows**: Consistent with your elevation system

## Analytics and Tracking

Floating Recommendations provide detailed interaction analytics:

- **Trigger events**: What causes widgets to appear
- **Impression time**: How long widgets are visible
- **Interaction rates**: Percentage of users who engage
- **Dismissal patterns**: When and why users close widgets
- **Context effectiveness**: Which triggers work best

## Performance Metrics

Floating Recommendations typically achieve:
- **Moderate CTR**: 2-6% click-through rates
- **High relevance**: Context-driven suggestions
- **Low disruption**: Minimal impact on main workflow
- **Good timing**: Appear when users are receptive



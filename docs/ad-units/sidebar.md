---
sidebar_position: 7
---

# Sidebar

Persistent recommendation panels that complement main content without interrupting the user experience - perfect for dashboard interfaces and workspace applications.

## Description

Sidebar provides a dedicated space for recommendations that remains visible alongside your main content. This format is ideal for dashboard interfaces, workspace applications, and platforms where users benefit from persistent access to relevant tools and suggestions without disrupting their primary workflow.

## Key Features

- **Persistent display**: Always visible alongside main content
- **Non-intrusive**: Complements rather than interrupts main content
- **Organized layout**: Clean list of recommendations with titles
- **Collapsible**: Can be minimized when not needed
- **Contextual updates**: Recommendations change based on user activity
- **Professional appearance**: Suitable for business and enterprise platforms

## Implementation

### Basic Usage

```tsx
import { AdMeshSidebar } from 'admesh-ui-sdk';

<AdMeshSidebar
  recommendations={recommendations}
  title="Recommended Tools"
  maxDisplayed={4}
  onRecommendationClick={(adId, link) => window.open(link)}
/>
```

### Configuration Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `recommendations` | `Recommendation[]` | Required | Array of recommendation objects |
| `title` | `string` | `"Recommendations"` | Sidebar section title |
| `maxDisplayed` | `number` | `5` | Maximum recommendations to show |
| `collapsible` | `boolean` | `true` | Allow sidebar to be collapsed |
| `defaultCollapsed` | `boolean` | `false` | Start in collapsed state |
| `position` | `"left" \| "right"` | `"right"` | Sidebar position |
| `width` | `number` | `300` | Sidebar width in pixels |
| `showMatchScores` | `boolean` | `false` | Display relevance scores |
| `showDescriptions` | `boolean` | `true` | Show brief descriptions |
| `onRecommendationClick` | `(adId: string, link: string) => void` | Required | Click handler for recommendations |
| `onToggle` | `(collapsed: boolean) => void` | Optional | Handler for collapse/expand |

### Layout Variations

#### Right Sidebar (Default)
```tsx
<AdMeshSidebar
  position="right"
  title="Suggested Tools"
  maxDisplayed={4}
/>
```

#### Left Sidebar
```tsx
<AdMeshSidebar
  position="left"
  title="Recommendations"
  width={280}
/>
```

#### Collapsible Sidebar
```tsx
<AdMeshSidebar
  collapsible={true}
  defaultCollapsed={false}
  onToggle={handleSidebarToggle}
/>
```

## Best For

- **AI Dashboard Interfaces**: Business intelligence and analytics platforms
- **Workspace Applications**: Productivity and collaboration tools
- **AI E-commerce Platforms**: Store management and optimization tools
- **Content Management**: Publishing and content creation platforms
- **Enterprise Software**: Business applications and professional tools

## Platform Examples

### AI Business Intelligence Platforms
Perfect for business intelligence and analytics platforms:

**Examples**: [Polymer](https://www.polymersearch.com), [Yurts AI](https://www.yurts.ai), [Obviously.AI](https://www.obviously.ai)

```tsx
<AdMeshSidebar
  title="Analytics Tools"
  position="right"
  showMatchScores={true}
  onRecommendationClick={handleAnalyticsToolClick}
/>
```

### AI Project Management Platforms
Ideal for productivity and collaboration platforms:

**Examples**: [Taskade AI](https://www.taskade.com), [Tability AI](https://www.tability.io), [Magical](https://www.getmagical.com)

```tsx
<AdMeshSidebar
  title="Productivity Tools"
  maxDisplayed={6}
  collapsible={true}
  onRecommendationClick={handleWorkspaceToolClick}
/>
```

### AI E-commerce Platforms
Great for store enhancement and optimization tools:

**Examples**: [Checkout Page AI](https://checkoutpage.co), [ConvertMate AI](https://convertmate.io), [Octane AI](https://www.octaneai.com)

```tsx
<AdMeshSidebar
  title="Store Enhancement"
  position="left"
  showDescriptions={true}
  onRecommendationClick={handleStoreToolClick}
/>
```

## Sidebar Structure

### Header Section
- **Title**: Clear section heading
- **Collapse toggle**: Minimize/expand control
- **Optional subtitle**: Additional context

### Content Section
- **Recommendation list**: Organized tool suggestions
- **Item descriptions**: Brief tool explanations
- **Match scores**: Relevance indicators (optional)
- **Action buttons**: Clear call-to-action

### Footer Section
- **View more**: Link to expanded recommendations
- **Powered by**: AdMesh attribution (optional)

## Responsive Behavior

### Desktop Layout
- **Full sidebar**: Complete recommendation display
- **Fixed width**: Consistent sidebar dimensions
- **Smooth interactions**: Hover effects and animations

### Tablet Layout
- **Adaptive width**: Optimized for tablet screens
- **Touch-friendly**: Larger touch targets
- **Collapsible by default**: More screen space for content

### Mobile Layout
- **Hidden by default**: Preserves mobile screen space
- **Slide-out panel**: Accessible via toggle button
- **Full-screen overlay**: Maximum mobile usability

## Content Management

### Dynamic Updates

Sidebar content updates based on:
- **User activity**: Current page or section
- **Time of day**: Contextual relevance
- **User preferences**: Personalized suggestions
- **Platform state**: Application context

### Recommendation Rotation

```tsx
const [recommendations, setRecommendations] = useState([]);

useEffect(() => {
  // Update recommendations based on context
  const contextualRecs = getContextualRecommendations(userActivity);
  setRecommendations(contextualRecs);
}, [userActivity]);
```

## Styling and Customization

### CSS Classes

- `.admesh-sidebar`: Main sidebar container
- `.admesh-sidebar-header`: Title and controls
- `.admesh-sidebar-content`: Recommendations list
- `.admesh-sidebar-item`: Individual recommendation
- `.admesh-sidebar-toggle`: Collapse/expand button

### Theme Integration

Sidebars integrate seamlessly with your design system:
- **Background colors**: Match your application theme
- **Typography**: Use your font family and sizing
- **Borders**: Consistent with your design language
- **Spacing**: Follow your layout grid system

### Custom Styling

```css
.admesh-sidebar {
  background: var(--sidebar-bg);
  border-left: 1px solid var(--border-color);
  box-shadow: var(--sidebar-shadow);
}

.admesh-sidebar-item {
  padding: var(--spacing-md);
  border-bottom: 1px solid var(--border-light);
}
```

## Performance Considerations

### Lazy Loading
- **Deferred content**: Load recommendations when sidebar is visible
- **Progressive enhancement**: Basic functionality first, enhancements later
- **Efficient updates**: Only refresh when context changes

### Memory Management
- **Cleanup**: Remove event listeners when component unmounts
- **Caching**: Store frequently accessed recommendations
- **Throttling**: Limit update frequency for performance

## Analytics and Tracking

Sidebar interactions provide valuable insights:

- **Visibility metrics**: How often sidebar is viewed
- **Engagement rates**: Percentage of users who interact
- **Recommendation performance**: Which suggestions work best
- **Collapse patterns**: When users hide/show sidebar
- **Position effectiveness**: Left vs right sidebar performance

## Performance Metrics

Sidebars typically achieve:
- **High visibility**: 70%+ of users see recommendations
- **Steady engagement**: 5-15% interaction rates
- **Persistent value**: Ongoing utility throughout sessions
- **Professional appeal**: Enhances platform sophistication



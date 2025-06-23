---
sidebar_position: 5
---

# Citation

Academic-style citations that reference products like research sources - perfect for research tools and educational AI platforms that need professional, non-intrusive recommendations.

## Description

Citation format presents product recommendations as numbered references within content, similar to academic papers and research documents. This approach feels natural and authoritative, making it ideal for educational platforms, research tools, and professional environments where credibility is paramount.

## Key Features

- **Academic style**: References products like research citations
- **Non-intrusive**: Blends naturally into educational content
- **Numbered references**: Clear citation numbering system
- **Source attribution**: Shows product information as citations
- **Professional appearance**: Maintains document credibility
- **Contextual integration**: Seamlessly fits within text content

## Implementation

### Basic Usage

```tsx
import { AdMeshCitationUnit } from 'admesh-ui-sdk';

<AdMeshCitationUnit
  recommendation={recommendation}
  citationNumber={1}
  showSource={true}
  onClick={(adId, admeshLink) => window.open(admeshLink, '_blank')}
/>
```

### Configuration Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `recommendation` | `Recommendation` | Required | The recommendation data object |
| `citationNumber` | `number` | Required | Citation reference number |
| `showSource` | `boolean` | `true` | Display source information |
| `citationStyle` | `"numbered" \| "bracketed" \| "superscript"` | `"numbered"` | Citation display format |
| `showDescription` | `boolean` | `true` | Show brief product description |
| `academicStyle` | `boolean` | `true` | Use academic formatting |
| `onClick` | `(adId: string, admeshLink: string) => void` | Required | Click handler function |

### Citation Styles

#### Numbered Citations
```
For data analysis, consider Tableau¹ for its comprehensive visualization capabilities.

References:
¹ Tableau - Business intelligence and analytics platform
```

#### Bracketed Citations
```
Modern CRM solutions [1] provide comprehensive customer management features.

References:
[1] Salesforce - Cloud-based customer relationship management
```

#### Superscript Citations
```
Cloud storage solutions¹ offer scalable and secure data management.

References:
¹ AWS S3 - Scalable cloud storage service
```

## Best For

- **AI Business Intelligence**: [Polymer](https://www.polymersearch.com), [Yurts AI](https://www.yurts.ai), [Obviously.AI](https://www.obviously.ai)
- **Research Tools**: Academic and scientific platforms
- **Educational AI**: Learning management systems and educational content
- **Professional Content**: Business reports and analysis platforms
- **Documentation**: Technical documentation and knowledge bases

## Platform Examples

### AI Business Intelligence Platforms
Perfect for professional data tool references:

**Examples**: [Polymer](https://www.polymersearch.com), [Yurts AI](https://www.yurts.ai), [Obviously.AI](https://www.obviously.ai)

```tsx
<AdMeshCitationUnit
  citationNumber={1}
  showSource={true}
  academicStyle={true}
  onClick={handleAnalyticsToolClick}
/>
```

### Research Platforms
Ideal for academic and scientific tool recommendations:

```tsx
<AdMeshCitationUnit
  citationNumber={2}
  citationStyle="superscript"
  showDescription={true}
  onClick={handleResearchToolClick}
/>
```

### Educational Platforms
Great for learning tool suggestions:

```tsx
<AdMeshCitationUnit
  citationNumber={3}
  citationStyle="bracketed"
  academicStyle={true}
  onClick={handleEducationalToolClick}
/>
```

## Citation Integration

### In-Text References

Citations appear naturally within content:

```markdown
For comprehensive data visualization, researchers often use Tableau¹ 
due to its advanced analytics capabilities and user-friendly interface.
```

### Reference Lists

Citations are accompanied by reference sections:

```markdown
References:
¹ Tableau - Business intelligence platform with advanced data visualization
² PowerBI - Microsoft's business analytics solution
³ Looker - Modern business intelligence platform
```

### Multiple Citations

Handle multiple references in a single document:

```tsx
{recommendations.map((rec, index) => (
  <AdMeshCitationUnit
    key={rec.id}
    recommendation={rec}
    citationNumber={index + 1}
    showSource={true}
  />
))}
```

## Styling and Customization

Citations maintain academic formatting standards:

### CSS Classes

- `.admesh-citation`: Main citation container
- `.admesh-citation-number`: Citation number/marker
- `.admesh-citation-source`: Source information
- `.admesh-citation-description`: Product description
- `.admesh-reference-list`: References section

### Academic Formatting

- **Consistent numbering**: Sequential citation numbers
- **Professional typography**: Academic-style fonts and spacing
- **Clear hierarchy**: Distinguishes citations from main content
- **Standard formatting**: Follows academic citation conventions

## Content Guidelines

### Writing Style

- Use formal, academic tone
- Integrate citations naturally into sentences
- Provide context for why tools are mentioned
- Maintain professional language throughout

### Citation Placement

- **After statements**: Support claims with tool references
- **In methodology**: Reference tools used in processes
- **For comparisons**: Cite alternatives and options
- **In conclusions**: Recommend tools based on analysis

## Analytics and Tracking

Citation tracking provides academic-focused metrics:

- **Citation impressions**: How often citations are displayed
- **Reference clicks**: Engagement with citation sources
- **Context analysis**: What content drives citations
- **Academic credibility**: Impact on content authority
- **Research attribution**: Value provided to research workflows

## Performance Metrics

Citations typically achieve:
- **High trust**: 90%+ credibility scores
- **Moderate CTR**: 1-3% click-through rates (quality over quantity)
- **Strong authority**: Enhances content professionalism
- **Research value**: Provides genuine utility to researchers



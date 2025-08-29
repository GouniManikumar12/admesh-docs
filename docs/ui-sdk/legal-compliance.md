# Legal Compliance & Disclosure System

The AdMesh UI SDK includes a comprehensive disclosure system designed to ensure full compliance with FTC, EU, and ASCI guidelines while maintaining user trust and engagement.

## Overview

All AdMesh components automatically include appropriate disclosures and labels that:
- Meet legal requirements for sponsored content
- Use engagement-friendly language
- Provide transparent information about partner relationships
- Adapt based on recommendation quality

## Key Features

### ✅ Compliant Labeling
- **"Smart Pick"** for high-quality matches (greater than 80% match score)
- **"Partner Match"** for good matches (60-80% match score)
- **"Promoted Option"** for lower matches (30-60% match score)
- **"Related Option"** for expanded results (less than 30% match score)

### ✅ Clear Disclosures
- Inline disclosure text explaining partner compensation
- Tooltips with detailed transparency information
- Section-level notices that all results are monetized

### ✅ No Engagement-Reducing Terms
- Avoids "Ad", "Sponsored", or "Advertisement"
- Uses positive, helpful language
- Maintains professional appearance

## Implementation

### Automatic Disclosure System

All components automatically include appropriate disclosures:

```tsx
import { AdMeshProductCard } from 'admesh-ui-sdk';

// Automatically includes compliant labels and disclosures
<AdMeshProductCard 
  recommendation={recommendation}
  showBadges={true}
/>
```

### Manual Disclosure Control

For custom implementations, use the disclosure utilities:

```tsx
import { 
  getRecommendationLabel,
  getLabelTooltip,
  getInlineDisclosure,
  getSectionDisclosure
} from 'admesh-ui-sdk';

const label = getRecommendationLabel(recommendation);
const tooltip = getLabelTooltip(recommendation, label);
const disclosure = getInlineDisclosure(recommendation, false);
```

## Component-Specific Disclosures

### AdMeshProductCard
- Badge with match-based label ("Smart Pick", "Partner Match", etc.)
- Inline disclosure text below product description
- Tooltip with detailed transparency information

```tsx
<AdMeshProductCard 
  recommendation={recommendation}
  showBadges={true}  // Shows compliant badge labels
/>
```

### AdMeshProductCard - Simple Variation
- Prominent recommendation label at top
- Compact disclosure text
- Tooltip for additional transparency

```tsx
<AdMeshProductCard
  recommendation={recommendation}
  variation="simple"
/>
```

### AdMeshExpandableUnit
- Clean disclosure in header area
- No excessive visual effects
- Professional appearance

```tsx
<AdMeshExpandableUnit 
  recommendation={recommendation}
  initialExpanded={false}
/>
```

### AdMeshInlineRecommendation
- Compact disclosure for chat interfaces
- Maintains conversational flow
- Clear but unobtrusive labeling

```tsx
<AdMeshInlineRecommendation 
  recommendation={recommendation}
  compact={true}
/>
```

## Section-Level Disclosures

For layouts with multiple recommendations:

```tsx
import { getSectionDisclosure, hasHighQualityMatches } from 'admesh-ui-sdk';

const hasHighMatches = hasHighQualityMatches(recommendations);
const sectionDisclosure = getSectionDisclosure(hasHighMatches);

// Display at top of results
<div className="disclosure-banner">
  {sectionDisclosure}
</div>

{recommendations.map(rec =>
  <AdMeshProductCard key={rec.ad_id} recommendation={rec} />
)}
```

## Disclosure Text Examples

### High-Quality Matches
- **Label:** "Smart Pick"
- **Tooltip:** "This recommendation is from a partner who compensates us when you engage. We've matched it to your needs based on your query."
- **Inline:** "Top-rated match • Partner compensated"

### Medium-Quality Matches  
- **Label:** "Partner Match"
- **Tooltip:** "Top-rated partner solution matched to your specific requirements. Partner compensates us for qualified referrals."
- **Inline:** "Trusted partner • We earn from qualified referrals"

### Lower-Quality Matches
- **Label:** "Promoted Option"
- **Tooltip:** "This partner solution may be relevant to your needs. The partner compensates us when you take qualifying actions."
- **Inline:** "Sponsored Compensated placement"

### Expanded Results
- **Label:** "Related Option"
- **Section:** "Expanded Results: While these don't perfectly match your query, they're related solutions from our partner network. All partners compensate us for referrals."

## Legal Compliance Standards

### FTC Guidelines ✅
- **Clear and Conspicuous:** All disclosures are prominently displayed
- **Unavoidable Notice:** Users cannot miss the disclosure information
- **Honest Representation:** Accurately describes the commercial relationship
- **Material Connection:** Clearly states partner compensation

### EU Regulations ✅
- **Transparent Commercial Intent:** Clear identification of paid content
- **User-Friendly Language:** Easy to understand disclosures
- **Prominent Placement:** Disclosures are easily visible

### ASCI Standards ✅
- **Honest and Truthful:** Accurate representation of recommendations
- **Clear Commercial Distinction:** Obvious identification of paid content
- **No Misleading Implications:** Transparent about partner relationships

## Customization Options

### Custom Labels
```tsx
import { getRecommendationLabel } from 'admesh-ui-sdk';

const customConfig = {
  customLabels: {
    smartPick: 'Top Choice',
    partnerMatch: 'Recommended',
    promotedOption: 'Featured',
    relatedOption: 'Alternative'
  }
};

const label = getRecommendationLabel(recommendation, customConfig);
```

### Theme Integration
```tsx
import { createAdMeshTheme } from 'admesh-ui-sdk';

const theme = createAdMeshTheme({
  primaryColor: '#your-brand-color',
  // Disclosure styling automatically adapts to theme
});
```

## Best Practices

1. **Always Use Section Disclosures:** Include section-level notices for multiple recommendations
2. **Maintain Consistency:** Use the same disclosure language across all components
3. **Test Visibility:** Ensure disclosures are clearly visible in your design
4. **Regular Review:** Keep up with changing legal requirements
5. **User Testing:** Verify users understand the disclosure information

## Migration from Previous Versions

The new disclosure system is automatically applied to all components. No code changes required for basic compliance, but you can customize labels if needed:

```tsx
// Old way - basic component
<AdMeshProductCard recommendation={recommendation} />

// New way - same code, now includes automatic disclosures
<AdMeshProductCard recommendation={recommendation} />

// Optional customization
<AdMeshProductCard 
  recommendation={recommendation}
  theme={customTheme}  // Disclosure styling adapts automatically
/>
```

## Validation

To ensure your implementation is compliant:

1. **Visual Check:** Verify all components show appropriate labels
2. **Tooltip Test:** Confirm tooltips provide transparency information  
3. **Section Notice:** Ensure section disclosures are prominently displayed
4. **Mobile Test:** Check disclosure visibility on mobile devices
5. **Legal Review:** Have legal team review the implementation

The AdMesh disclosure system is designed to provide peace of mind while maintaining excellent user experience and engagement rates.

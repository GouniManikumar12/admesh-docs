# Advanced Customization

The AdMesh UI SDK provides extensive customization options to give AI platforms complete freedom over the appearance and behavior of ad components.

## Enhanced Theme System

### Basic Theme Configuration

```tsx
import { createAdMeshTheme, AdMeshProductCard } from 'admesh-ui-sdk';

const customTheme = createAdMeshTheme({
  mode: 'light',
  primaryColor: '#ff6b6b',
  secondaryColor: '#4ecdc4',
  accentColor: '#45b7d1',
  borderRadius: '16px',
  fontFamily: '"Poppins", sans-serif'
});

<AdMeshProductCard 
  recommendation={recommendation}
  theme={customTheme}
/>
```

### Complete Theme Interface

```tsx
interface AdMeshTheme {
  mode: 'light' | 'dark';
  
  // Colors
  primaryColor?: string;
  secondaryColor?: string;
  accentColor?: string;
  backgroundColor?: string;
  surfaceColor?: string;
  borderColor?: string;
  textColor?: string;
  textSecondaryColor?: string;
  
  // Typography
  fontFamily?: string;
  fontSize?: {
    small?: string;
    base?: string;
    large?: string;
    title?: string;
  };
  
  // Layout
  borderRadius?: string;
  spacing?: {
    small?: string;
    medium?: string;
    large?: string;
  };
  
  // Effects
  shadows?: {
    small?: string;
    medium?: string;
    large?: string;
  };
  
  // Icons
  icons?: {
    expandIcon?: string | React.ReactNode;
    collapseIcon?: string | React.ReactNode;
    starIcon?: string | React.ReactNode;
    checkIcon?: string | React.ReactNode;
    arrowIcon?: string | React.ReactNode;
  };
  
  // Gradients
  gradients?: {
    primary?: string;
    secondary?: string;
    accent?: string;
  };
  
  // Component overrides
  components?: {
    card?: React.CSSProperties;
    button?: React.CSSProperties;
    expandableUnit?: React.CSSProperties;
    productCard?: React.CSSProperties;
    ecommerceCards?: React.CSSProperties;
  };
  
  // Disable defaults for full control
  disableDefaultStyles?: boolean;
}
```

## Customization Examples

### 1. Brand Color Matching

```tsx
const brandTheme = createAdMeshTheme({
  primaryColor: '#1a73e8',    // Google Blue
  secondaryColor: '#34a853',  // Google Green
  accentColor: '#ea4335',     // Google Red
  fontFamily: '"Google Sans", sans-serif'
});
```

### 2. Minimal Design

```tsx
const minimalTheme = createAdMeshTheme({
  primaryColor: '#000000',
  borderRadius: '4px',
  shadows: {
    small: 'none',
    medium: '0 1px 3px rgba(0, 0, 0, 0.1)',
    large: '0 2px 6px rgba(0, 0, 0, 0.1)'
  }
});
```

### 3. Custom Icons

```tsx
// Using emoji icons
const emojiTheme = createAdMeshTheme({
  icons: {
    starIcon: '🌟',
    expandIcon: '▼',
    collapseIcon: '▲',
    checkIcon: '✅',
    arrowIcon: '➡️'
  }
});

// Using React components
import { ChevronDown, ChevronUp, Star } from 'react-icons/fa';

const reactIconTheme = createAdMeshTheme({
  icons: {
    expandIcon: <ChevronDown />,
    collapseIcon: <ChevronUp />,
    starIcon: <Star color="#fbbf24" />
  }
});
```

### 4. Complete Style Override

```tsx
const customTheme: AdMeshTheme = {
  mode: 'light',
  disableDefaultStyles: true,
  components: {
    card: {
      backgroundColor: '#f0f9ff',
      border: '2px solid #0ea5e9',
      borderRadius: '20px',
      padding: '24px',
      boxShadow: '0 8px 25px rgba(14, 165, 233, 0.15)'
    },
    button: {
      backgroundColor: '#0ea5e9',
      color: 'white',
      borderRadius: '12px',
      padding: '12px 24px',
      fontWeight: '600'
    }
  }
};
```

## Theme Utilities

### Preset Themes

```tsx
import { themePresets } from 'admesh-ui-sdk';

// Available presets
const themes = {
  minimal: themePresets.minimal,
  vibrant: themePresets.vibrant,
  corporate: themePresets.corporate,
  highContrast: themePresets.highContrast
};
```

### Dark Mode

```tsx
import { createDarkTheme } from 'admesh-ui-sdk';

const darkTheme = createDarkTheme({
  primaryColor: '#a78bfa',
  secondaryColor: '#34d399'
});
```

### Merging Themes

```tsx
import { mergeThemes, themePresets } from 'admesh-ui-sdk';

const combinedTheme = mergeThemes(
  themePresets.corporate,
  {
    primaryColor: '#custom-color',
    icons: { starIcon: '⭐' }
  }
);
```

## Component-Specific Customization

### AdMeshExpandableUnit

The expandable unit has been redesigned with clean, professional styling:

- Removed excessive gradients
- Improved color contrast
- Better spacing and typography
- Customizable icons
- Responsive design

```tsx
<AdMeshExpandableUnit
  recommendation={recommendation}
  theme={{
    primaryColor: '#3b82f6',
    borderRadius: '12px',
    spacing: { large: '20px' },
    icons: { expandIcon: '▼', collapseIcon: '▲' }
  }}
/>
```

### AdMeshProductCard

Enhanced with full theme support:

```tsx
<AdMeshProductCard
  recommendation={recommendation}
  theme={{
    primaryColor: '#8b5cf6',
    fontSize: { title: '18px', base: '14px' },
    shadows: { medium: '0 4px 12px rgba(0, 0, 0, 0.1)' }
  }}
/>
```

## CSS Custom Properties

For advanced customization, you can also use CSS custom properties:

```css
:root {
  --admesh-primary-color: #8b5cf6;
  --admesh-border-radius: 12px;
  --admesh-font-family: 'Inter', sans-serif;
}

[data-theme='dark'] {
  --admesh-primary-color: #a78bfa;
  --admesh-background-color: #1f2937;
  --admesh-text-color: #f9fafb;
}
```

## Best Practices

1. **Consistency**: Use the same theme across all AdMesh components
2. **Accessibility**: Ensure sufficient color contrast
3. **Performance**: Use `disableDefaultStyles` only when necessary
4. **Responsive**: Test themes on different screen sizes
5. **Brand Alignment**: Match your platform's design system

## Migration from Previous Versions

If you're upgrading from an older version:

```tsx
// Old way
const theme = {
  mode: 'light',
  accentColor: '#3b82f6'
};

// New way (backward compatible)
const theme = createAdMeshTheme({
  mode: 'light',
  primaryColor: '#3b82f6',  // More specific
  accentColor: '#3b82f6'    // Still supported
});
```

The enhanced theme system is fully backward compatible with existing implementations.

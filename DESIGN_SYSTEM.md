# Mahakumbh Design System

## Color Palette

### Primary Colors
- **Primary**: `#B94E2A` (Saffron-Warm)
  - Used for primary actions, branding, and key elements
- **Accent**: `#F4A261` (Light Orange)
  - Used for secondary actions and highlights

### Status Colors
- **Success**: `#2F9E44` (Green)
  - Used for positive actions and success messages
- **Warning**: `#F6C85F` (Yellow)
  - Used for warnings and caution messages
- **Danger**: `#D7263D` (Red)
  - Used for errors and dangerous actions

### Background Colors
- **Background**: `#FFF8F2`
  - Main background color
- **Card Background**: `#FFFFFF`
  - Card and component backgrounds

### Text Colors
- **Primary Text**: `#213547`
- **Secondary Text**: `#64748B`
- **Tertiary Text**: `#94A3B8`

## Typography

### Font Family
- **System Stack**: `system-ui, Avenir, Helvetica, Arial, sans-serif`

### Font Sizes
- **Extra Small**: `0.75rem` (12px)
- **Small**: `0.875rem` (14px)
- **Base**: `1rem` (16px)
- **Large**: `1.125rem` (18px)
- **Extra Large**: `1.25rem` (20px)
- **2XL**: `1.5rem` (24px)
- **3XL**: `1.875rem` (30px)
- **4XL**: `2.25rem` (36px)
- **5XL**: `3rem` (48px)

## Spacing Scale
- Base unit: `0.25rem` (4px)
- XS: `0.5rem` (8px)
- SM: `1rem` (16px)
- MD: `1.5rem` (24px)
- LG: `2rem` (32px)
- XL: `3rem` (48px)
- 2XL: `4rem` (64px)
- 3XL: `6rem` (96px)

## Border Radius
- **Small**: `0.25rem` (4px)
- **Medium**: `0.5rem` (8px)
- **Large**: `0.75rem` (12px)
- **Full**: `9999px` (pill/circular)

## Shadows
- **Small**: `0 1px 2px 0 rgba(0, 0, 0, 0.05)`
- **Medium**: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`
- **Large**: `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)`
- **Extra Large**: `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)`

## Usage Examples

### Buttons
```html
<!-- Primary Button -->
<button class="bg-primary hover:bg-primary/90 text-white font-medium py-2 px-4 rounded-lg">
  Primary Action
</button>

<!-- Secondary Button -->
<button class="bg-accent hover:bg-accent/90 text-white font-medium py-2 px-4 rounded-lg">
  Secondary Action
</button>

<!-- Success Button -->
<button class="bg-success hover:bg-success/90 text-white font-medium py-2 px-4 rounded-lg">
  Success Action
</button>

<!-- Danger Button -->
<button class="bg-danger hover:bg-danger/90 text-white font-medium py-2 px-4 rounded-lg">
  Danger Action
</button>
```

### Cards
```html
<div class="bg-background/card rounded-xl shadow-md p-6">
  <h3 class="text-xl font-bold text-text/primary mb-2">Card Title</h3>
  <p class="text-text/secondary">Card content goes here...</p>
</div>
```

### Text Styles
```html
<h1 class="text-4xl font-bold text-text/primary">Main Heading</h1>
<h2 class="text-2xl font-bold text-text/primary">Section Heading</h2>
<h3 class="text-xl font-semibold text-text/primary">Subsection Heading</h3>
<p class="text-base text-text/secondary">Body text content</p>
<small class="text-sm text-text/tertiary">Supporting text</small>
```

## Custom Classes

### Utility Classes
- `.text-gradient`: For gradient text effects
- `.card-hover`: For hover effects on cards
- `.transition-all`: For smooth transitions

To modify the design system, simply update the values in `tailwind.config.js` and the changes will be applied throughout the application.
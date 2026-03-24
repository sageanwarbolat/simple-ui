# Simple UI - Next.js Component Library

This is a minimal UI component library built with Next.js featuring Button, Text, and Card components inspired by the sds library structure.

## Project Structure

```
simple-ui/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Home page with component demo
│   │   ├── globals.css     # Global styles
│   │   └── next-env.d.ts   # Type definitions
│   └── components/
│       ├── Button/
│       │   ├── Button.tsx
│       │   ├── Button.module.css
│       │   └── index.ts
│       ├── Text/
│       │   ├── Text.tsx
│       │   ├── Text.module.css
│       │   └── index.ts
│       ├── Card/
│       │   ├── Card.tsx
│       │   ├── Card.module.css
│       │   └── index.ts
│       └── index.ts         # Main export file
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Components

### Button Component

A flexible button with multiple variants and sizes.

**Features:**
- Variants: `primary`, `neutral`, `subtle`
- Sizes: `small`, `medium`
- Disabled state
- Accessible (focus states, keyboard support)
- CSS Module based styling

**Usage:**
```tsx
import { Button } from '@/components';

export default function MyComponent() {
  return (
    <Button variant="primary" size="medium">
      Click me
    </Button>
  );
}
```

### Text Component

A flexible text component supporting various configurations.

**Features:**
- Multiple semantic HTML elements (p, span, div, small, strong)
- Line height options: `body`, `single`
- Line clamping support
- Forwardable ref
- CSS Module based styling

**Usage:**
```tsx
import { Text } from '@/components';

export default function MyComponent() {
  return (
    <Text lineHeight="body" lineClamp={2}>
      Your text content here
    </Text>
  );
}
```

### Card Component

A flexible container component for grouping content.

**Features:**
- Variants: `default`, `stroke`, `brand`
- Directions: `horizontal`, `vertical`
- Alignment: `start`, `center`, `end`
- Padding options: `600`, `800`
- Optional asset slot
- Optional interaction overlay
- CSS Module based styling

**Usage:**
```tsx
import { Card, Button, Text } from '@/components';

export default function MyComponent() {
  return (
    <Card variant="default" padding="600">
      <Text>Card content</Text>
      <Button variant="primary">Action</Button>
    </Card>
  );
}
```

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the component demo.

### Build

```bash
npm run build
npm start
```

## Styling Approach

The library uses **CSS Modules** for component styling, ensuring:
- No global style pollution
- Scoped CSS classes
- Type-safe style imports
- Easy component composition

CSS Variables are used within modules for:
- Color management
- Spacing consistency
- Theming flexibility

## Design Inspiration

This library is inspired by the **SDS (Syntax Design System)** with a simplified implementation:
- Component-based architecture
- Consistent props interface
- Semantic HTML
- Accessibility considerations
- Mobile-first responsive design

## Development Notes

- Components use TypeScript for type safety
- All components are forwardable refs
- CSS Modules prevent style conflicts
- Components follow React best practices (client-side directives where needed)
- Tailwind CSS available for utility styling

## License

MIT

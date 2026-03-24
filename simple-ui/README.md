# Simple UI Library

A minimal React component library built with Next.js featuring Button, Text, and Card components.

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Build

```bash
npm run build
npm start
```

## Components

### Button

A flexible button component with multiple variants and sizes.

```tsx
import { Button } from 'components'

export default function App() {
  return (
    <Button variant="primary" size="medium">
      Click me
    </Button>
  )
}
```

**Props:**
- `variant`: 'primary' | 'neutral' | 'subtle' (default: 'primary')
- `size`: 'small' | 'medium' (default: 'medium')
- `disabled`: boolean
- `type`: 'button' | 'submit' | 'reset' (default: 'button')

### Text

A basic text component with typography support.

```tsx
import { Text } from 'components'

export default function App() {
  return (
    <Text>This is some text</Text>
  )
}
```

**Props:**
- `lineHeight`: 'body' | 'single' (default: 'body')
- `lineClamp`: number (optional)
- `element`: HTML element type (default: 'p')

### Card

A flexible card component with optional asset and interaction areas.

```tsx
import { Card } from 'components'

export default function App() {
  return (
    <Card variant="default" direction="vertical">
      <h3>Card Title</h3>
      <p>Card content goes here</p>
    </Card>
  )
}
```

**Props:**
- `variant`: 'default' | 'stroke' | 'brand' (default: 'default')
- `direction`: 'horizontal' | 'vertical' (default: 'vertical')
- `align`: 'start' | 'center' | 'end' (default: 'start')
- `padding`: '600' | '800' (optional)
- `asset`: ReactNode (optional)
- `interactionProps`: object (optional)

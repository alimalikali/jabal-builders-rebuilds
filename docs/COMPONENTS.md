# Component Documentation

## UI Components

### Button
A reusable button component with various styles and states.

```tsx
import { Button } from "@/components/ui/button"

// Usage
<Button variant="default" size="lg">
  Click me
</Button>
```

**Props:**
- `variant`: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
- `size`: 'default' | 'sm' | 'lg' | 'icon'
- `disabled`: boolean
- `onClick`: () => void

### Card
A container component for content with optional header and footer.

```tsx
import { Card } from "@/components/ui/card"

// Usage
<Card>
  <CardHeader>Title</CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter>Footer</CardFooter>
</Card>
```

## Layout Components

### Navigation
The main navigation component with responsive design.

```tsx
import { Navigation } from "@/components/navigation"

// Usage
<Navigation />
```

**Features:**
- Responsive mobile menu
- Active link highlighting
- Smooth scroll behavior

### Footer
The site footer component with contact information and links.

```tsx
import { Footer } from "@/components/footer"

// Usage
<Footer />
```

## Feature Components

### ProjectCard
Displays project information in a card format.

```tsx
import { ProjectCard } from "@/components/projects/ProjectCard"

// Usage
<ProjectCard
  title="Project Name"
  description="Project description"
  image="/path/to/image.jpg"
  category="Residential"
/>
```

**Props:**
- `title`: string
- `description`: string
- `image`: string
- `category`: string
- `onClick`: () => void

### ContactForm
A form component for sending contact inquiries.

```tsx
import { ContactForm } from "@/components/contact/ContactForm"

// Usage
<ContactForm onSubmit={handleSubmit} />
```

**Props:**
- `onSubmit`: (data: ContactFormData) => void

## Animation Components

### ParallaxSection
Creates a parallax scrolling effect for sections.

```tsx
import { ParallaxSection } from "@/components/parallax/ParallaxSection"

// Usage
<ParallaxSection
  backgroundImage="/path/to/image.jpg"
  speed={0.5}
>
  Content
</ParallaxSection>
```

**Props:**
- `backgroundImage`: string
- `speed`: number
- `children`: ReactNode

## Form Components

### Input
A styled input component with validation support.

```tsx
import { Input } from "@/components/ui/input"

// Usage
<Input
  type="text"
  placeholder="Enter text"
  value={value}
  onChange={handleChange}
/>
```

**Props:**
- `type`: string
- `placeholder`: string
- `value`: string
- `onChange`: (e: ChangeEvent<HTMLInputElement>) => void
- `error`: string

### Select
A styled select component with custom styling.

```tsx
import { Select } from "@/components/ui/select"

// Usage
<Select
  options={[
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" }
  ]}
  value={value}
  onChange={handleChange}
/>
```

**Props:**
- `options`: Array<{ value: string, label: string }>
- `value`: string
- `onChange`: (value: string) => void
- `placeholder`: string

## Best Practices

1. **Component Organization**
   - Keep components small and focused
   - Use proper naming conventions
   - Group related components together

2. **Props**
   - Use TypeScript interfaces for props
   - Provide default values when appropriate
   - Document all props with JSDoc comments

3. **Styling**
   - Use Tailwind CSS classes
   - Follow the design system
   - Maintain consistent spacing and typography

4. **Accessibility**
   - Include proper ARIA labels
   - Ensure keyboard navigation
   - Maintain proper contrast ratios

5. **Performance**
   - Use React.memo when appropriate
   - Implement proper loading states
   - Optimize images and assets

6. **Testing**
   - Write unit tests for components
   - Test different prop combinations
   - Verify accessibility compliance 
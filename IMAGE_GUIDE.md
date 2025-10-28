# Image Placement Guide

This guide shows where to add your images in the website.

## Image Locations

### 1. Hero Section (`components/Hero.tsx`)
**Location**: Line 35-39  
**Size**: Recommended 1200x675px (16:9 aspect ratio)  
**Place**: Replace the placeholder div with:
```tsx
<Image
  src="/hero-image.jpg"
  alt="Global Shapers Ljubljana"
  width={1200}
  height={675}
  className="object-cover rounded-lg"
/>
```

### 2. Partner Logos (`components/Partners.tsx`)
**Location**: Lines 11-20  
**Size**: 200x128px each  
**Count**: 5 logos  
**Place**: In the `public/` folder as `partner1.jpg`, `partner2.jpg`, etc.

Example:
```tsx
<Image
  src="/partner1.jpg"
  alt="Partner 1"
  width={200}
  height={128}
  className="object-contain"
/>
```

### 3. Past Events (`components/PastEvents.tsx`)
**Location**: Lines 49-56  
**Size**: Recommended 800x600px  
**Files**: 
- `event1.jpg` (Daniel Nath event)
- `event2.jpg` (Žiga Vavpotič event)  
- `event3.jpg` (AI event)

Replace the placeholder div with:
```tsx
<Image
  src="/event1.jpg"
  alt={event.title}
  width={800}
  height={600}
  className="object-cover h-full w-full"
/>
```

### 4. Program Cards (`components/Programs.tsx`)
**Location**: Lines 48-54  
**Size**: Recommended 600x400px  
**Files**:
- `program1.jpg` (Academy)
- `program2.jpg` (Events)
- `program3.jpg` (Mastermind)

Replace placeholder with:
```tsx
<Image
  src="/program1.jpg"
  alt={program.title}
  width={600}
  height={400}
  className="object-cover h-full w-full"
/>
```

## How to Add Images

1. Place your images in the `public/` folder
2. Update the components to use `<Image>` from `next/image` instead of placeholder divs
3. Make sure to import Image at the top: `import Image from 'next/image'`

## Image Optimization

The Next.js Image component automatically:
- Optimizes images
- Lazy loads them
- Serves them in modern formats (WebP)
- Resizes them appropriately

## Testing

Run the development server:
```bash
npm run dev
```

Then visit http://localhost:3000 to see your changes.

## Deployment

After adding images, build and deploy:
```bash
npm run build
npm start
```

Or push to Git and deploy on Vercel for automatic deployment.



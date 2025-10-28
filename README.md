# GSC Website

A modern, responsive website built with Next.js, React, and Tailwind CSS, designed for deployment on Vercel.

## Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Lightweight components
- ✅ Optimized for Vercel deployment
- ✅ Mobile menu navigation
- ✅ Placeholder images ready for your content
- ✅ Email notifications for form submissions

## Tech Stack

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Vercel** - Deployment platform

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Email Setup

For email functionality to work, you need to configure SMTP settings. See [EMAIL_SETUP.md](./EMAIL_SETUP.md) for detailed instructions.

Create a `.env.local` file in the root directory:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM=noreply@gscljubljana.org
```

### Build

```bash
npm run build
npm start
```

## Deployment to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Vercel will automatically detect Next.js and deploy

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Customization

### Update Content

- Edit `components/Header.tsx` for navigation
- Edit `components/Hero.tsx` for hero section
- Edit `components/About.tsx` for about section
- Edit `components/Services.tsx` for services
- Edit `components/Footer.tsx` for footer

### Add Images

1. Place your images in the `public/` folder
2. Update the placeholder divs in components with:
   ```tsx
   <Image
     src="/your-image.jpg"
     alt="Description"
     width={1200}
     height={800}
     className="rounded-lg"
   />
   ```

### Change Colors

Update Tailwind classes in components to match your brand colors:
- Primary: `blue-600`
- Secondary: `gray-900`
- Background: `white`, `gray-50`, `gray-100`

## Responsive Breakpoints

- Mobile: `< 640px` (default)
- Tablet: `sm: 640px`
- Desktop: `md: 768px`
- Large Desktop: `lg: 1024px`

## File Structure

```
gsc-website/
├── app/
│   ├── api/
│   │   └── newsletter/
│   │       └── route.ts    # Newsletter API endpoint
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Services.tsx     # Services grid
│   ├── Newsletter.tsx   # Newsletter form
│   ├── PastEvents.tsx   # Past events with newsletter form
│   └── Footer.tsx       # Footer
├── public/              # Static assets
├── .env.local           # Environment variables (create this)
├── EMAIL_SETUP.md       # Email configuration guide
└── package.json
```

## License

MIT

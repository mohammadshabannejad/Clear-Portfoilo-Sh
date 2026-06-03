Clear Portfolio
A minimal portfolio crafted with focus and clarity, built with Next.js, TypeScript, and shadcn/ui.

Overview
Hero header with name, role, location, and social icons
About, What I Do, Core Skills, Currently Building, Previous Work, Highlights, Education, Achievements, Philosophy, and signature
Lucide React icons with clean external-link indicators
Responsive layout with a circular, grayscale profile image (hidden on small screens)
Reduced-motion friendly staggered fade-in on load
Tech Stack
Next.js 16 - React framework with App Router
TypeScript - Type-safe JavaScript
Tailwind CSS - Utility-first CSS framework
shadcn/ui - Re-usable components built with Radix UI and Tailwind CSS
Lucide React - Beautiful icon library
Fonts: Geist (body), Mrs Saint Delafield (signature) via Google Fonts
Project Structure
.
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Main page component
│   └── globals.css     # Global styles and Tailwind directives
├── components/
│   ├── Hero.tsx        # Hero section with profile and social links
│   ├── About.tsx       # About section
│   ├── WhatIDo.tsx     # What I Do section
│   ├── Skills.tsx      # Core Skills section
│   ├── CurrentlyBuilding.tsx  # Currently Building section
│   ├── PreviousWork.tsx       # Previous Work section
│   ├── Highlights.tsx          # Highlights section
│   ├── Education.tsx           # Education section
│   ├── Achievements.tsx        # Achievements section
│   ├── Philosophy.tsx          # Philosophy section
│   └── Signature.tsx           # Signature component
├── lib/
│   └── utils.ts        # Utility functions (cn helper)
├── public/
│   └── profile.png      # Profile image
├── components.json      # shadcn/ui configuration
├── tailwind.config.ts  # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── next.config.js       # Next.js configuration
Getting Started
Prerequisites
Node.js 18+ and npm/yarn/pnpm
Installation
Install dependencies:
npm install
Add your profile image:

Place your profile image at public/profile.png
Recommended size: 140x140px or larger (square image)
Run the development server:

npm run dev
Open http://localhost:3000 in your browser.
Build for Production
npm run build
npm start
Customization
Profile image: Replace public/profile.png (keep similar dimensions for best results)
Social links: Edit the links in components/Hero.tsx
Content: Update the text content in each component file
Styling: Modify Tailwind classes in components or update app/globals.css
Colors: Customize the color scheme in tailwind.config.ts and app/globals.css
Features
✅ Fully typed with TypeScript
✅ Responsive design with mobile-first approach
✅ Accessible with proper ARIA labels
✅ SEO optimized with Next.js metadata
✅ Performance optimized with Next.js Image component
✅ Reduced motion support for accessibility
✅ Modern UI with shadcn/ui components
✅ Clean, maintainable component structure
Accessibility Notes
Social icons have aria-labels
External links use rel="noopener" when opening in new tabs
Motion reduced automatically when users prefer reduced motion
Semantic HTML structure maintained
Performance Notes
Next.js optimizes images automatically
Fonts loaded via Google Fonts
Minimal bundle size with tree-shaking
Server-side rendering for better SEO

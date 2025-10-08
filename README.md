# CloudOpsIQ Marketing Website

A professional, modern multi-page SaaS marketing website for CloudOpsIQ - an enterprise-grade IT Operations Management and Workflow Automation Platform.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 14, React 18, TypeScript, and Tailwind CSS
- **Smooth Animations**: Framer Motion for beautiful page transitions and scroll animations
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **7 Complete Pages**:
  - Home (Landing Page)
  - Features
  - Pricing
  - Use Cases
  - Resources
  - About
  - Contact

## 🎨 Design System

- **Primary Color**: #594AE2 (Deep Indigo/Purple)
- **Secondary Color**: #00C9A7 (Teal/Turquoise)
- **Success Color**: #00D084 (Vibrant Green)
- **Typography**: Inter font family
- **Modern UI Components**: Reusable Button, Card, and Section components

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with Header/Footer
│   ├── page.tsx           # Home page
│   ├── features/          # Features page
│   ├── pricing/           # Pricing page
│   ├── use-cases/         # Use Cases page
│   ├── resources/         # Resources page
│   ├── about/             # About page
│   └── contact/           # Contact page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Section.tsx
│   ├── home/             # Home page sections
│   ├── Header.tsx        # Navigation header
│   └── Footer.tsx        # Footer component
├── public/               # Static assets
└── tailwind.config.ts    # Tailwind CSS configuration
```

## 🎯 Key Features Implemented

### Home Page
- Animated hero section with dashboard mockup
- Trusted by section with stats
- Key features overview (6 feature cards)
- Benefits section (alternating layout)
- Technology stack showcase
- Call-to-action section

### Features Page
- Detailed feature categories (8 categories)
- Interactive tabbed navigation
- Feature deep-dive sections
- Animated transitions

### Pricing Page
- 3 pricing tiers (Starter, Professional, Enterprise)
- Feature comparison
- FAQ section

### Use Cases Page
- 5 industry-specific use cases
- Customer testimonials
- Alternating image-text layout

### Resources Page
- 6 resource categories
- Featured resources
- Quick links to documentation

### About Page
- Company story
- Mission and vision
- Core values
- Contact information

### Contact Page
- Demo request form
- Multiple contact methods
- FAQ section

## 🎨 Design Elements

- **Animations**: Smooth scroll animations, hover effects, and page transitions
- **Responsive**: Mobile-first design that scales beautifully
- **Professional**: Clean, modern UI with consistent spacing and typography
- **Accessible**: Semantic HTML and keyboard navigation support

## 📝 Next Steps

### To Add Multi-Language Support (EN, BE, FR):
1. Install `next-intl` or `react-i18next`
2. Create translation files for each language
3. Update components to use translation keys
4. Add language switcher to header

### To Deploy:
- **Vercel**: Connect your GitHub repository to Vercel for automatic deployments
- **Netlify**: Similar to Vercel, supports Next.js out of the box
- **Custom Server**: Use `npm run build` and deploy the `.next` folder

## 🔧 Customization

### Colors
Edit `tailwind.config.ts` to change the color scheme.

### Content
Update the page content in the respective files under `app/` directory.

### Components
Modify or create new components in the `components/` directory.

## 📄 License

Copyright © 2025 CloudOpsIQ. All rights reserved.

## 🤝 Support

For questions or support, contact:
- Email: support@cloudopsiq.com
- Sales: sales@cloudopsiq.com

---

Built with ❤️ using Next.js, React, and Tailwind CSS

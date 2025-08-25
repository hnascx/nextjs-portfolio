# Next.js Portfolio

A modern, performant, and accessible portfolio website built with Next.js 15 and Tailwind CSS 4.

## ✨ Features

- **Modern Tech Stack** - Built with Next.js 15, React 19, and Tailwind CSS 4
- **Performance Optimized** - Lazy loading, image optimization and compression
- **SEO Ready** - Metadata API, Open Graph, robots.txt, and sitemap
- **Accessible** - ARIA labels and semantic HTML
- **Responsive Design** - Mobile-first approach with responsive breakpoints
- **Security** - Security headers and best practices
- **TypeScript** - Full type safety and better developer experience

## 🚀 Tech Stack

- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **Icons**: Lucide React

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/               # Base UI components
│   │   ├── tag.tsx       # Tag component
│   │   └── index.ts      # UI exports
│   ├── layout/           # Layout components
│   ├── sections/         # Page sections
│   │   ├── hero/         # Hero section
│   │   ├── about/        # About section
│   │   ├── experience/   # Experience section
│   │   ├── projects/     # Projects section
│   │   └── end-text/     # End text section
│   └── providers/        # Context providers
├── lib/                  # Utilities and data
│   ├── data/            # Static data
│   │   ├── personal-info.ts
│   │   ├── experience.ts
│   │   └── projects.ts
│   ├── hooks/           # Custom hooks
│   │   └── use-scroll-spy.ts
│   └── utils.ts         # Utility functions
└── styles/              # Global styles
    └── globals.css
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- pnpm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/hnascx/nextjs-portfolio.git
   cd nextjs-portfolio
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Run the development server**

   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 🎨 Architecture Highlights

### Component Architecture

- **Modular Design** - Components organized by functionality
- **Reusable UI** - Base components for consistency
- **Section-based** - Logical separation of page sections

### Data Management

- **Centralized Data** - All static content in `/lib/data`
- **Type Safety** - Full TypeScript coverage
- **Easy Maintenance** - Simple data updates

### Performance Features

- **Image Optimization** - Next.js Image component with WebP/AVIF
- **Lazy Loading** - Images load only when needed
- **Code Splitting** - Automatic route-based code splitting
- **Compression** - Built-in gzip compression

### SEO & Accessibility

- **Metadata API** - Dynamic meta tags
- **Open Graph** - Social media optimization
- **Semantic HTML** - Proper heading hierarchy
- **ARIA Support** - Screen reader compatibility

## 🔧 Configuration

### Next.js Config

- **Image Optimization** - Multiple formats and responsive sizes
- **Security Headers** - X-Frame-Options, CSP, etc.
- **Performance** - CSS optimization and compression

### Tailwind CSS

- **Custom Design System** - Consistent spacing, colors, and typography
- **Responsive Utilities** - Mobile-first responsive design
- **Custom Components** - Tailored component classes

## 📱 Responsive Design

- **Mobile First** - Designed for mobile devices first
- **Breakpoints** - Responsive design across all screen sizes
- **Touch Friendly** - Optimized for touch interactions

## 🌐 Browser Support

- **Modern Browsers** - Chrome, Firefox, Safari, Edge (latest versions)
- **Progressive Enhancement** - Core functionality works everywhere
- **CSS Grid & Flexbox** - Modern layout techniques

## 📊 Performance

- **Lighthouse Score** - Optimized for performance, accessibility and SEO
- **Core Web Vitals** - Focus on LCP, FID and CLS
- **Bundle Size** - Optimized JavaScript and CSS

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

# Nodes of Travel 🌍

A modern, responsive travel website built with Next.js, TailwindCSS, and shadcn/ui.

## Features

- **Home Page**: Hero section with call-to-action, blog preview, video preview, and newsletter subscription
- **Blog**: Card-based layout with Markdown support for blog posts
- **Videos**: Gallery of travel vlogs and destination guides
- **Plan Your Trip**: Interactive trip planning with three modes:
  - Trip Planning Form
  - Voice Assistant (UI demo)
  - AI Chatbot (UI demo)
- **About**: Learn about our mission and values
- **Contact**: Get in touch through our contact form
- **Responsive Design**: Mobile-first approach with hamburger navigation
- **Modern UI**: Built with shadcn/ui components for a polished look

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **Markdown**: gray-matter, react-markdown

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd nodes-of-travel
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
nodes-of-travel/
├── app/                      # Next.js app directory
│   ├── about/               # About page
│   ├── blog/                # Blog pages
│   │   └── [slug]/         # Dynamic blog post pages
│   ├── contact/            # Contact page
│   ├── plan-your-trip/     # Trip planning page
│   ├── videos/             # Videos page
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/             # React components
│   ├── ui/                # shadcn/ui components
│   ├── Footer.tsx         # Footer component
│   └── Navbar.tsx         # Navigation component
├── content/               # Content directory
│   └── blog/             # Markdown blog posts
├── lib/                  # Utility functions
│   ├── blog.ts          # Blog post utilities
│   └── utils.ts         # General utilities
├── public/              # Static assets
├── next.config.js       # Next.js configuration
├── tailwind.config.ts   # Tailwind configuration
└── tsconfig.json        # TypeScript configuration
```

## Adding Blog Posts

Create a new Markdown file in `content/blog/` with the following frontmatter:

```markdown
---
title: "Your Post Title"
date: "2024-01-01"
excerpt: "A brief description"
category: "Category Name"
author: "Author Name"
image: "🌴"
---

Your content here in Markdown format...
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub, GitLab, or Bitbucket
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy"

Your site will be live in minutes!

### Environment Variables

If you add any environment variables, create a `.env.local` file:

```bash
# Example
NEXT_PUBLIC_API_URL=your_api_url
```

## Customization

### Colors

Edit the color scheme in `app/globals.css` by modifying the CSS variables:

```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 96.1%;
  /* ... other colors */
}
```

### Navigation

Update navigation links in `components/Navbar.tsx`:

```typescript
const navLinks = [
  { href: "/", label: "Home" },
  // Add or modify links here
];
```

### Social Links

Update social media links in `components/Footer.tsx`.

## Features to Implement

This is a demo/starter template. Here are some features you might want to add:

- [ ] Real voice recognition API integration
- [ ] AI chatbot backend (OpenAI, Anthropic, etc.)
- [ ] Newsletter subscription backend
- [ ] Contact form backend
- [ ] Blog search functionality
- [ ] Blog categories and tags
- [ ] Comments system
- [ ] User authentication
- [ ] Booking integration
- [ ] Analytics (Google Analytics, Plausible, etc.)

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Support

For questions or support, visit our [Contact Page](http://localhost:3000/contact) or email hello@nodesoftravel.com.

---

Built with ❤️ for travelers around the world





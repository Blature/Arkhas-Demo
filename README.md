# EliteConsult - Expert Consultation Agency

A modern, responsive landing page for a multipurpose consultation agency, built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- **Next.js App Router**: Utilizing the latest Next.js features for optimal performance.
- **Tailwind CSS**: Rapid UI development with utility-first CSS.
- **Framer Motion**: Smooth and elegant animations for enhanced user experience.
- **Responsive Design**: Fully responsive layout that looks great on all devices.
- **Interactive UI**:
  - Custom modal for Login/Signup.
  - Interactive service cards with reveal animations.
  - Animated hero section.

## Project Structure

```
├── app/
│   ├── globals.css      # Global styles and Tailwind directives
│   ├── layout.tsx       # Root layout including Navbar and Footer
│   └── page.tsx         # Main landing page content
├── components/
│   ├── AuthModal.tsx    # Modal for authentication
│   ├── Footer.tsx       # Site footer
│   ├── Hero.tsx         # Hero section with animations
│   ├── Navbar.tsx       # Navigation bar
│   ├── PricingDisclaimer.tsx # Banner for pricing info
│   └── Services.tsx     # Services section with contact reveal
├── next.config.mjs      # Next.js configuration
├── package.json         # Project dependencies and scripts
├── postcss.config.js    # PostCSS configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## Getting Started

1.  **Install Dependencies**:

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

2.  **Run the Development Server**:

    The server is configured to run on port `8000` by default.

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

3.  **Open the Application**:

    Open [http://localhost:8000](http://localhost:8000) with your browser to see the result.

## Tech Stack

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/) (Icons)

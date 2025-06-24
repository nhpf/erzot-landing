# Erzot Landing Page

A modern, responsive landing page for Erzot - Building Digital Products with Startup Agility & Clockwork Precision.

## About Erzot

Founder-led engineers helping startups and enterprises bring ideas to market quickly and securely. We develop MVPs and scalable solutions as if they were our own.

## Development

This project is built with modern web technologies for optimal performance and developer experience.

### Prerequisites

- Node.js (recommended: install with [nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- npm or yarn

### Getting Started

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd erzot-landing-page

# Install dependencies
npm install

# Start the development server
npm run dev
```

The development server will start at `http://localhost:5173` with hot reload enabled.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Tech Stack

This project is built with:

- **Vite** - Fast build tool and development server
- **React** - UI library
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful and accessible UI components
- **React Router** - Client-side routing

## Project Structure

```
src/
├── components/         # Reusable UI components
│   └── ui/            # shadcn/ui components
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
└── pages/             # Page components
```

## Deployment

The project can be deployed to any static hosting service that supports Vite builds:

1. Run `npm run build` to create a production build
2. Deploy the `dist` folder to your hosting service

### Recommended Hosting Platforms

- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and proprietary to Erzot.

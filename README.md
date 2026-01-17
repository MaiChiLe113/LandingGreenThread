# GreenThread Landing Page

A vivid, animated landing page for GreenThread - an AI-powered wastewater monitoring platform for textile operations.

## Features

- 🎨 Modern, clean design with green eco-friendly theme
- ✨ Smooth animations powered by Anime.js
- 📱 Fully responsive layout
- ⚡ Built with React + TypeScript + Vite
- 🎭 Beautiful Unsplash imagery
- 🎯 Interactive hover effects and transitions
- 🔄 Scroll-triggered animations
- 💎 Tailwind CSS for styling

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Anime.js** - Powerful animation library
- **Lucide React** - Beautiful icon library

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
GreenthreadLanding/
├── src/
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles with Tailwind
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── README.md           # This file
```

## Animations

The landing page features several types of animations:

- **Hero entrance animations** - Text and icons fade in with stagger effect
- **Scroll-triggered animations** - Cards and sections animate when scrolling into view
- **Floating icons** - Subtle up/down floating motion
- **Hover effects** - Cards lift and scale on hover
- **Marquee text** - Infinite scrolling brand text
- **Interactive CTAs** - Smooth transitions on interaction

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```js
colors: {
  'green-primary': '#A8C686',
  'green-light': '#D4E7C5',
  'green-dark': '#5C7A3F',
}
```

### Images

Replace Unsplash URLs in `App.tsx` with your own images or use different Unsplash photos.

### Content

All content is in `App.tsx` - simply edit the text, headings, and descriptions to match your needs.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for use.

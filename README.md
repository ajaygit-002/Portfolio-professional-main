# Animated Portfolio - React + Vite

A stunning, modern portfolio website built with React, Vite, and Framer Motion featuring smooth animations, scroll effects, and a video background.

## ✨ Features

- 🎬 **Video Background** - Dynamic video background on hero section
- 🎨 **Smooth Animations** - Framer Motion powered animations throughout
- 📜 **Scroll Effects** - Animations triggered on scroll using Intersection Observer
- 📱 **Fully Responsive** - Works seamlessly on all devices
- 🎯 **Modern Design** - Clean, gradient-based UI with glassmorphism effects
- 🚀 **Fast Performance** - Built with Vite for lightning-fast development
- 🎭 **Interactive Elements** - Hover effects and transitions on all components

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
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

3. Open your browser and visit `http://localhost:3000`

### Build for Production

```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── App.css
├── index.html
├── vite.config.js
└── package.json
```

## 🎨 Customization

### Change Colors

Edit the CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --accent-color: #ec4899;
  --text-light: #ffffff;
  --text-dark: #1f2937;
  --bg-dark: #0f172a;
  --bg-light: #1e293b;
}
```

### Replace Video Background

In `src/components/Hero.jsx`, replace the video URL:

```jsx
<video autoPlay loop muted playsInline>
  <source src="YOUR_VIDEO_URL" type="video/mp4" />
</video>
```

### Update Personal Information

- **Hero Section**: Edit name and title in `src/components/Hero.jsx`
- **About Section**: Update bio and stats in `src/components/About.jsx`
- **Skills**: Modify skills array in `src/components/Skills.jsx`
- **Projects**: Update projects array in `src/components/Projects.jsx`
- **Contact**: Change contact info in `src/components/Contact.jsx`

## 📦 Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **Framer Motion** - Animation library
- **React Intersection Observer** - Scroll-triggered animations
- **CSS3** - Styling with modern features

## 🎯 Animation Features

1. **Entrance Animations** - Smooth fade-in and slide-in effects
2. **Scroll Animations** - Elements animate as you scroll
3. **Hover Effects** - Interactive hover states on cards and buttons
4. **Parallax Effects** - Depth and movement on scroll
5. **Gradient Animations** - Animated gradient text and backgrounds
6. **Floating Elements** - Subtle floating animations on icons

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🎨 Design Highlights

- Glassmorphism effects with backdrop blur
- Gradient color schemes
- Smooth transitions and animations
- Modern card-based layouts
- Interactive navigation with smooth scroll

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👤 Author

**Your Name**

- Website: [yourwebsite.com](https://yourwebsite.com)
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [@yourname](https://linkedin.com/in/yourname)

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

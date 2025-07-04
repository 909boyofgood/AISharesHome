# AIShares Official Website

🎯 **Turn AI chats into stunning PNG snapshots—in one click**

This is the official website for AIShares Chrome Extension, built with Vue.js and modern web technologies.

## ✨ Features

- **Modern Design**: Clean, professional design with light blue theme
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Vue.js Integration**: Interactive components and smooth animations
- **Performance Optimized**: Fast loading with lazy loading and optimized assets
- **SEO Friendly**: Semantic HTML structure and meta tags
- **Accessibility**: WCAG compliant design patterns

## 🚀 Quick Start

### Prerequisites

- Python 3.x (for local development server)
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/aishares/website.git
cd website
```

2. Start the development server:
```bash
npm start
# or
python3 -m http.server 8000
```

3. Open your browser and visit:
```
http://localhost:8000
```

## 📁 Project Structure

```
AISharesHome/
├── index.html          # Main HTML file
├── styles.css          # CSS styles with light blue theme
├── script.js           # Vue.js application logic
├── package.json        # Project configuration
├── README.md          # Project documentation
└── .trae/             # Trae AI configuration
    └── rules/
        └── project_rules.md
```

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#667eea` - Main brand color
- **Secondary Purple**: `#764ba2` - Gradient accent
- **Light Blue**: `#4299e1` - CTA buttons
- **Background**: `#f7fafc` - Light sections
- **Text**: `#1a202c` - Primary text
- **Muted**: `#4a5568` - Secondary text

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Responsive scaling**: Fluid typography

### Components
- **Navigation**: Fixed header with blur effect
- **Hero Section**: Gradient background with floating card
- **Feature Cards**: Hover effects and icons
- **Testimonials**: Quote cards with author info
- **FAQ**: Accordion-style expandable items
- **CTA Buttons**: Gradient backgrounds with hover animations

## 🛠️ Development

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Open preview in browser
- `npm run lint` - Run code linting
- `npm run deploy` - Deploy to production

### Code Structure

#### HTML (`index.html`)
- Semantic HTML5 structure
- Vue.js template syntax
- Accessibility attributes
- Meta tags for SEO

#### CSS (`styles.css`)
- Mobile-first responsive design
- CSS Grid and Flexbox layouts
- Custom animations and transitions
- CSS variables for theming

#### JavaScript (`script.js`)
- Vue.js 3 Composition API
- Interactive components
- Smooth scrolling navigation
- Performance optimizations

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Customization

### Changing Colors
Update the CSS custom properties in `styles.css`:

```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --accent-color: #4299e1;
}
```

### Adding New Sections
1. Add HTML structure in `index.html`
2. Add corresponding styles in `styles.css`
3. Add Vue.js logic in `script.js` if needed

### Modifying Content
Update the data properties in the Vue.js app:

```javascript
data() {
  return {
    features: [...],
    testimonials: [...],
    faqs: [...]
  }
}
```

## 🚀 Deployment

### Static Hosting
The website is a static site and can be deployed to:
- **Netlify**: Drag and drop deployment
- **Vercel**: Git integration
- **GitHub Pages**: Free hosting
- **AWS S3**: Scalable hosting

### Build Process
```bash
npm run build
```

This creates a `dist/` folder with optimized files ready for deployment.

## 🔍 SEO Optimization

- **Meta Tags**: Title, description, keywords
- **Open Graph**: Social media sharing
- **Structured Data**: JSON-LD markup
- **Sitemap**: XML sitemap generation
- **Performance**: Optimized loading times

## 📊 Analytics

The website includes event tracking for:
- CTA button clicks
- Section scrolling
- FAQ interactions
- Mobile menu usage

Integrate with Google Analytics by adding your tracking ID.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: Check this README
- **Issues**: [GitHub Issues](https://github.com/aishares/website/issues)
- **Email**: support@aishares.com
- **Discord**: [Join our community](https://discord.gg/aishares)

## 🙏 Acknowledgments

- **Vue.js**: Reactive framework
- **Font Awesome**: Icon library
- **Google Fonts**: Typography
- **Unsplash**: Stock photography
- **Community**: Beta testers and contributors

---

**Made with ❤️ by the AIShares team**

*Turn your AI conversations into beautiful, shareable images with just one click!*
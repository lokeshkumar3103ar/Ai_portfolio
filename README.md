# AI Portfolio

An interactive AI-powered portfolio showcasing real-time AI collaboration, live projects, and innovative prompt engineering frameworks.

## 🚀 Live Demo

Visit the live portfolio: [https://lokeshkumar3103ar.github.io/Ai_portfolio/](https://lokeshkumar3103ar.github.io/Ai_portfolio/)

## ✨ Features

### AI Collaboration Showcase
- **Meet the AI Team**: Interactive rotation showcasing GPT-4, GitHub Copilot, and AI orchestration
- **Real-time project demonstrations** with smooth animations
- **Context-aware transitions** that guide visitors through the experience

### Live Projects Dashboard
- **Interactive project cards** with hover overlays
- **Real project data** with tech stacks, timelines, and impact metrics
- **Classified project** showcase with NDA-protected content

### 30-Day Challenge Section
- **Fire animation transitions** for visual impact
- **Authentic statistics** about rapid development capabilities
- **Contact overlay integration** for direct client outreach

### Advanced UI/UX
- **Smooth Framer Motion animations** throughout
- **Dark/Light theme support** with proper contrast
- **Responsive design** optimized for all devices
- **GPU-accelerated transforms** for optimal performance

## 🛠️ Technology Stack

- **React 18** - Modern UI framework
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Advanced animations
- **React Icons** - Comprehensive icon library

## 🎯 Key Sections

1. **About AI** - Introduction to AI generalist approach
2. **AI Agents** - Team showcase with rotation functionality  
3. **Live Projects** - Interactive dashboard with real project data
4. **Prompt Systems** - Framework showcases (TINE, SUPREME CODE, IT DOC)
5. **Tech Radar** - Learning and technology exploration
6. **Vision & Impact** - Future goals and contact integration
7. **30-Day Challenge** - Rapid development capabilities

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/lokeshkumar3103ar/Ai_portfolio.git

# Navigate to project directory
cd Ai_portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Building for Production
```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Deployment

This portfolio is automatically deployed to GitHub Pages using GitHub Actions.

### Automatic Deployment
- Push to `main` branch triggers automatic deployment
- GitHub Actions builds and deploys to GitHub Pages
- Live at: https://lokeshkumar3103ar.github.io/Ai_portfolio/

### Manual Deployment
```bash
# Build the project
npm run build

# Deploy to GitHub Pages (if using gh-pages package)
npm run deploy
```

## 🎨 Customization

### Colors & Themes
- Update `tailwind.config.js` for color schemes
- Modify `src/context/ColorThemeContext.jsx` for theme variations
- Dark/light mode toggle built-in

### Content Updates
- Project data: `src/components/dashboard/LiveProjectsDashboard.jsx`
- AI team info: `src/components/agents/AgentGallery.jsx`
- Prompt frameworks: `src/components/promptSystems/PromptSystemsGrid.jsx`

## 🔧 Configuration

### Vite Configuration
```javascript
// vite.config.js
export default defineConfig({
  plugins: [react()],
  base: '/Ai_portfolio/', // GitHub Pages base path
  server: {
    port: 3000
  }
});
```

## 📱 Responsive Design

- **Mobile-first approach** with Tailwind CSS
- **Breakpoints**: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)
- **Touch-optimized interactions** for mobile devices
- **Optimized animations** for different screen sizes

## 🎭 Animations & Performance

- **Framer Motion** for smooth transitions
- **GPU acceleration** with `transform3d`
- **Intersection Observer** for scroll-triggered animations
- **Optimized re-renders** with React best practices

## 📧 Contact Integration

- **Contact overlay** with social links and contact information
- **Resume download** functionality
- **Professional site** linking
- **Email and phone** integration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **AI Collaboration**: Built with GPT-4 and GitHub Copilot
- **Design inspiration**: Modern portfolio trends and AI-first approach
- **Open source libraries**: React, Tailwind CSS, Framer Motion

---

**Built with AI collaboration in 3 days** ⚡

For questions or collaboration opportunities, visit the portfolio and use the contact integration!

# Vishal's Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Vite, and Tailwind CSS. View it live at [vsv2014.github.io/Bolt_VSV_porfolio](https://vsv2014.github.io/Bolt_VSV_porfolio/).

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/vsv2014/Bolt_VSV_porfolio.git

# Navigate to project directory
cd Bolt_VSV_porfolio/project

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🛠️ Development

### Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

### Project Structure

```
project/
├── src/
│   ├── components/
│   │   ├── layout/       # Layout components (Header, FloatingContact)
│   │   └── sections/     # Page sections (Hero, Skills, Projects, etc.)
│   ├── utils/           # Utility functions
│   ├── assets/         # Static assets
│   ├── styles/         # Global styles and Tailwind config
│   ├── App.tsx         # Main App component
│   └── main.tsx        # Entry point
├── public/            # Public assets
└── dist/             # Build output
```

### Branch Management

```bash
# Create a new feature branch
git checkout -b feature/your-feature-name

# Create a bug fix branch
git checkout -b fix/issue-description

# Push your branch
git push origin your-branch-name

# Create a PR
# Go to GitHub > Pull Requests > New Pull Request
```

## 🚀 Deployment

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

### Automatic Deployment

The project uses GitHub Actions for automatic deployment. Any push to the `main` branch triggers the deployment workflow:

1. Builds the project
2. Deploys to GitHub Pages
3. Updates the live site

## 🐛 Common Issues & Solutions

### React Configuration

If you encounter "React is not defined" errors:
1. Ensure proper React imports:
   ```typescript
   import React from 'react';
   ```
2. Check `vite.config.ts` has correct React plugin setup:
   ```typescript
   plugins: [react()]
   ```
3. Verify `tsconfig.json` has proper JSX configuration:
   ```json
   {
     "compilerOptions": {
       "jsx": "react-jsx"
     }
   }
   ```

### Asset Path Issues

For asset loading issues in production:
1. Use the `assetPath` utility:
   ```typescript
   import { getAssetPath } from '@/utils/assetPath';
   const imagePath = getAssetPath('/images/example.jpg');
   ```
2. Ensure `base` in `vite.config.ts` is set correctly:
   ```typescript
   base: process.env.NODE_ENV === 'production' ? '/Bolt_VSV_porfolio/' : '/'
   ```

### TypeScript Issues

Common TypeScript fixes:
1. Component props typing:
   ```typescript
   interface ComponentProps {
     title: string;
     onClick?: () => void;
   }
   
   const Component: React.FC<ComponentProps> = ({ title, onClick }) => {
     // ...
   };
   ```
2. Event handling:
   ```typescript
   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
     // ...
   };
   ```

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run deploy` - Deploy to GitHub Pages
- `npm run typecheck` - Run TypeScript type checking

## 📝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'feat: add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

# The Immigration Index 2025

An interactive immigration data visualization built with TypeScript, Handlebars, and SCSS. Features dynamic data tables, smooth scrolling navigation, accessible FAQ components, and responsive design.

## Tech Stack

- **TypeScript** - Type-safe JavaScript
- **Webpack 5** - Module bundler and build tool
- **Handlebars** - Component-based templating
- **SCSS** - Advanced CSS with variables and mixins
- **DataTables.net** - Interactive sortable tables
- **ESLint** - JavaScript/TypeScript linting
- **Stylelint** - CSS linting with alphabetical property ordering
- **Prettier** - Code formatting
- **Husky** - Git hooks for pre-commit automation
- **lint-staged** - Run linters on staged files only

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

```bash
npm run setup
```

This command installs all dependencies. The `prepare` script will automatically run after installation to set up Husky git hooks.

### Development

```bash
npm run start
```

Runs the app in development mode with webpack-dev-server. Open your browser to view the application. The page will reload when you make changes.

### Production Build

```bash
npm run build
```

Builds the app for production to the `public` folder. It bundles the application in production mode and optimizes the build for best performance.

### Deploy

```bash
npm run deploy
```

Builds the production bundle and deploys it using the toolkit deploy script. This command runs the production build first, then executes the deployment process.

## Available Scripts

### Core Scripts
- `npm run setup` - Install packages and set up git hooks
- `npm run start` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run deploy` - Build and deploy to production

### Linting Scripts
- `npm run lint` - Lint all files (JavaScript/TypeScript, CSS, and Handlebars)
- `npm run lint:fix` - Lint and automatically fix all files
- `npm run lint:js` - Lint JavaScript/TypeScript files only
- `npm run lint:js:fix` - Lint and fix JavaScript/TypeScript files only
- `npm run lint:css` - Lint CSS files only
- `npm run lint:css:fix` - Lint and fix CSS files only
- `npm run lint:html` - Lint Handlebars component templates only
- `npm run lint:html:fix` - Lint and fix Handlebars component templates only

### Development Tools
- `npm run gen:component` - Generate a new component with boilerplate files
- `npm run git:commit` - Interactive git commit helper

**Note:** The `prepare` script runs automatically after `npm install` to initialize Husky git hooks.

## Project Structure

```
src/
├── app.ts              # Application entry point
├── components/         # Reusable Handlebars components
│   ├── Blog/          # Blog post cards
│   ├── Chapter/       # Content chapters with scroll observers
│   ├── Contact/       # Contact CTA sections
│   ├── Content/       # Generic content blocks
│   ├── Content-image/ # Content with image layouts
│   ├── Faq/           # Accessible FAQ accordion
│   ├── Footer/        # Page footer
│   ├── Head/          # HTML head meta tags
│   ├── Header/        # Header with mobile menu
│   ├── Hero/          # Hero sections
│   ├── Quote/         # Quote blocks
│   ├── Score-card/    # Scorecard components
│   ├── Sidebar/       # Sidebar with TOC and social
│   ├── Social/        # Social share buttons
│   ├── Table/         # DataTables integration
│   └── Toc/           # Table of contents navigation
├── config/            # Application configuration
├── styles/            # SCSS styles
│   ├── global/        # Global styles and resets
│   ├── layout/        # Layout grid system
│   ├── mixins/        # SCSS mixins (media queries, etc)
│   ├── settings/      # Variables and breakpoints
│   └── utils/         # Utility classes
├── templates/         # Handlebars page templates
└── utilities/         # Helper functions and base classes
```

## Path Aliases

The following path aliases are configured in `tsconfig.json` and `webpack.config.mjs`:

- `@` - `src/`
- `@styles` - `src/styles/`
- `@components` - `src/components/`
- `@utilities` - `src/utilities/`
- `@config` - `src/config/`
- `@legacy` - `src/legacy/`

## Code Quality

### ESLint

Configured with TypeScript support, Prettier integration, and auto-fix on save in VS Code.

- Validates JavaScript and TypeScript code
- Enforces code style and best practices
- Auto-fixes issues on save

### Stylelint

Configured with:
- Alphabetical property ordering
- Tailwind CSS support
- Stylistic rules for consistency
- Auto-fix on save in VS Code

### Prettier

Configured for Handlebars component templates:
- Auto-formats `.hbs` files in `src/components/`
- Double quotes for HTML attributes
- 120 character line width
- Auto-fix on save in VS Code
- Main template files (with partials) are excluded from formatting

### Git Hooks

Pre-commit hooks are managed by **Husky** and **lint-staged**:
- Automatically runs on `git commit`
- Only lints staged files (faster than linting entire project)
- Auto-fixes issues when possible
- Blocks commit if unfixable errors remain

**What runs on commit:**
- JavaScript/TypeScript: `eslint --fix` then `eslint`
- CSS: `stylelint --fix` then `stylelint`
- Handlebars components: `prettier --write` (excludes files with partials)

## VSCode Setup

### Recommended Extensions

Press `cmd + shift + p` (Mac) or `ctrl + shift + p` (Windows/Linux), then type "recommended".

The sidebar will open with a list of recommended extensions to be installed.

### Workspaces Extension

The [Workspaces](https://marketplace.visualstudio.com/items?itemName=Fooxly.workspace) extension is highly recommended as it allows you to show/hide files for a cleaner development experience.

### Show Hide System Files (ZEN MODE)

![alt text](https://assets.fooxly.com/extensions/workspace/example.gif)

## Key Features

### Component Architecture
- **Modular Components** - Reusable Handlebars components with TypeScript classes
- **Component Class Base** - Shared functionality including scroll observers and fade-in animations
- **Dynamic Data Tables** - Configurable DataTables with multiple dataset support
- **Accessibility First** - ARIA attributes, keyboard navigation, and screen reader support

### Scroll & Navigation
- **Intersection Observers** - Automatic TOC highlighting as you scroll
- **Smooth Scroll** - Smart scroll-to with dynamic content adjustment
- **Multiple TOC Support** - Synced highlighting across header and sidebar TOCs
- **Mobile Menu** - Click-outside and link-click to close functionality

### Responsive Design
- **Breakpoints**: 420px (sml), 768px (med), 1024px (lrg), 1280px (xlrg), 1520px (xxlrg)
- **Visibility Utilities** - Show/hide at breakpoints (`.u-show-from-med`, `.u-hide-from-med`)
- **Flexible Grid** - 12-column responsive grid system
- **Mobile-First** - SCSS mixins for min-width and max-width media queries

### Performance
- **Code Splitting** - Webpack optimization for smaller bundles
- **Image Optimization** - Automatic WebP conversion and minification
- **CSS Minification** - PostCSS with autoprefixer
- **Tree Shaking** - Removes unused code in production

## Component Generator

Generate new components with boilerplate:

```bash
npm run gen:component
```

This creates:
- `ComponentName.component.ts` - TypeScript class
- `ComponentName.template.hbs` - Handlebars template
- `ComponentName.styles.scss` - Component styles

## Browser Support

Targets the last 2 versions of major browsers and browsers with >1% market share (excluding dead browsers).

## Fonts

Custom fonts are loaded via Google Fonts:
- Inter (primary font family with weights 300, 400, 500, 600, 700, 800)

The project also uses a custom icon font for UI elements.

## License

Private project for Remitly.

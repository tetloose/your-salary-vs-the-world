# Your Salary VS the World

A salary comparison calculator built with TypeScript, Handlebars, and Tailwind CSS. This interactive tool analyzes how many hours you would need to work to earn your current salary in different countries around the world.

## Tech Stack

- **TypeScript** - Type-safe JavaScript
- **Webpack 5** - Module bundler
- **Handlebars** - Templating engine
- **Tailwind CSS 3** - Utility-first CSS framework
- **jQuery** - DOM manipulation and legacy support
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

## Available Scripts

- `npm run setup` - Install packages and set up git hooks
- `npm run start` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run lint` - Lint all files (JavaScript/TypeScript, CSS, and Handlebars)
- `npm run lint:fix` - Lint and automatically fix all files
- `npm run lint:js` - Lint JavaScript/TypeScript files only
- `npm run lint:js:fix` - Lint and fix JavaScript/TypeScript files only
- `npm run lint:css` - Lint CSS files only
- `npm run lint:css:fix` - Lint and fix CSS files only
- `npm run lint:html` - Lint Handlebars component templates only
- `npm run lint:html:fix` - Lint and fix Handlebars component templates only
- `npm run git:commit` - Interactive git commit helper

**Note:** The `prepare` script runs automatically after `npm install` to initialize Husky git hooks.

## Project Structure

```
src/
├── app.ts              # Application entry point
├── components/         # Handlebars components
├── legacy/            # Legacy JavaScript files
├── styles/            # CSS files including Tailwind
├── templates/         # Handlebars page templates
└── utilities/         # Helper functions
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
- Handlebars components: `prettier --write` then `prettier --check`

## VSCode Setup

### Recommended Extensions

Press `cmd + shift + p` (Mac) or `ctrl + shift + p` (Windows/Linux), then type "recommended".

The sidebar will open with a list of recommended extensions to be installed.

### Workspaces Extension

The [Workspaces](https://marketplace.visualstudio.com/items?itemName=Fooxly.workspace) extension is highly recommended as it allows you to show/hide files for a cleaner development experience.

### Show Hide System Files (ZEN MODE)

![alt text](https://assets.fooxly.com/extensions/workspace/example.gif)

## Fonts

Custom fonts are loaded via Adobe Fonts (TypeKit):
- RalewayExtraBold
- kepler-std
- Masqualero
- greycliff-cf

The project also uses Font Awesome for icons.

## License

Private project for Remitly.

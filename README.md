# VitePress Template

This is a minimal [VitePress](https://vitepress.dev/) template project.

## Getting Started

### Prerequisites

- Node.js (version 18+ recommended)
- npm

### Installation

1. Clone the repository (if you haven't already):
   ```bash
   git clone <your-repo-url>
   cd VitePress-Template
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
   
3. Install VitePress:
   ```bash
   npm add -D vitepress@next
   ```

## Usage

### Development

To start the local development server:

```bash
npm run docs:dev
```

The documentation will be available at `http://localhost:5173`.

### Build

To build the documentation for production:

```bash
npm run docs:build
```

### Preview

To preview the production build locally:

```bash
npm run docs:preview
```

## Project Structure

```
.
├── docs/                # Documentation source files (Markdown)
│   ├── .vitepress/      # VitePress configuration and theme
│   ├── guide.md         # Example guide page
│   └── index.md         # Home page
├── package.json         # Project dependencies and scripts
└── README.md            # Project documentation
```

## Customization

- **Configuration:** Edit `docs/.vitepress/config.js` to change the site title, description, and navigation.
- **Theme:** Edit `docs/.vitepress/theme/custom.css` to add custom styles.
- **Content:** Add Markdown files to the `docs/` directory to create new pages.

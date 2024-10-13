# Svelte HVAC Portfolio

A modern and responsive web application built with Svelte, Tailwind CSS, and Splide.js to showcase the services and expertise of an HVAC company.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode).

## Features:

- Svelte: Used to create the overall structure and components of the web application.
- Vite: Used as the development server and build tool.
- Tailwind CSS: Used to style the website's elements.
- Splide.js: Used to create swiping animations for images.

## Getting Started:

### Prerequisites:

- Node.js (version 14 or later): https://nodejs.org/en/
- npm (bundled with Node.js) or yarn: https://yarnpkg.com/

### Clone the Repository:

- HTTPS:
```Bash
git clone https://github.com/Lusanco/svelte-hvac-portfolio.git
```
- GitHub CLI:
```Bash
gh repo clone Lusanco/svelte-hvac-portfolio
```

### Install Dependencies:

```Bash
cd svelte-hvac-portfolio
npm install
```

## Development:

### Start the Development Server:

```Bash
npm run dev
```

This will open your web browser in localhost by default.

### Make Changes: 

Edit the Svelte components and Tailwind CSS class names within the src directory to customize the website's content and appearance.

### Hot Module Replacement (HMR): 

Vite provides HMR, which automatically refreshes the browser with your changes without restarting the server.

### Building for Production:

Create an Optimized Build:

```Bash
npm run build
```

This generates production-ready HTML, CSS, and JavaScript files in the `dist` directory.

## Deployment:

Deploy the contents of the dist directory to your preferred web hosting platform.

## Customization:

The src/App.svelte file is the primary component for your portfolio website. Contains layouts and the routes of the web app.

Tailwind CSS configuration can be found in tailwind.config.js. As Vite configuration can be found in vite.config.js.

## Disclaimer:


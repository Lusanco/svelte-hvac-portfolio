# Svelte HVAC Portfolio

A modern and responsive web application built with Svelte, Tailwind CSS, and Splide.js to showcase the services and expertise of an HVAC company.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode).

## Features:

- **Svelte:** Offers a performant and component-based architecture for a smooth user experience and efficient code organization.
- **Vite:** Provides a blazing-fast development server and build tool, streamlining the development process and generating optimized production files.
- **Tailwind CSS:** Simplifies styling with utility classes, enabling rapid and responsive website design.
- **Splide.js:** Enhances user engagement with swiping animations for images.

## Getting Started:

### Prerequisites:

- Node.js (version 20 or later): https://nodejs.org/en/
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

- Deploy the contents of the dist directory to your preferred web hosting platform.
- Refer to your hosting provider's documentation or community resources for setting up routing for your web application (e.g., configuring .htaccess for Apache servers).

## Customization:

- The src/App.svelte file is the primary component. Edit it to update content and layout.
- Customize Tailwind CSS in tailwind.config.js.
- Configure Vite in vite.config.js.

## Project Status and Public Content:

- Deployed Website: This project was released and deployed for a real client at Hostgator under the domain name/URL https://828-llc.com/.
- Content Ownership: All content, including text, translations, images, and the primary color (company logo color code), was provided by the company and remains their property.
- Public Content Authorization: We hold explicit authorization from the client to showcase this repository, its code, publicly accessible company content (provided and agreed upon), and images and/or videos relating to the current state of the project.
- Visual Disparity: If the code in this repository diverges significantly from the deployed version's visual design, the public URL will be removed to maintain consistency and avoid misrepresentation.

## License

This project is licensed under the [Svelte HVAC Portfolio Client License](LICENSE). Please review the LICENSE file for more information.


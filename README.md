# React application template

This is a basic template to kickstart projects using React.js. It provides a simple initial structure to help developers get started quickly with their React projects.

## Technologies

This template includes the following packages and technologies:

- `ViteJS`: A [Vite](https://vitejs.dev/) single page app.
- `Tanstack - React Query`: A library for fetching, caching, and updating server state in React applications. [Link](https://react-query.tanstack.com/)
- `Tailwind CSS`: A utility-first CSS framework for rapidly building custom designs. [Link](https://tailwindcss.com/)
- `PostCSS`: A tool for transforming CSS with JavaScript plugins. [Link](https://postcss.org/)
- `Axios`: A promise-based HTTP client for making XMLHttpRequests in the browser and Node.js. [Link](https://axios-http.com/)
- `React Hot Toast`: A toast notification library for React applications with hot reloading support. [Link](https://react-hot-toast.com/)
- `React Hook Form`: A library for building flexible and composable forms with React hooks. [Link](https://react-hook-form.com/)
- `zod`: A TypeScript-first schema declaration and validation library. [Link](https://github.com/colinhacks/zod)


This template includes the following packages and technologies as dev dependencies:

- `biome`: A tool for linting, format and check files. [Link](https://biomejs.dev/pt-br/)
- `commitlint`: Linting tool for enforcing conventional commit messages. [Link](https://commitlint.js.org/)
- `lint-staged`: Run linters on git staged files. [Link](https://github.com/okonet/lint-staged)
- `vitest`: A framework of test runner for all things JavaScript. [Link](https://vitest.dev/)
- `husky`: Git hooks made easy. [Link](https://typicode.github.io/husky/#/)


This template and packages is 100% [TypeScript](https://www.typescriptlang.org/).

## 🚀 How to run the project

### Prerequisites

Before you begin, you will need to have the following tools installed on your machine:<br />
→ [Git](https://git-scm.com);<br />
→ [Node.js](https://nodejs.org/en/);<br />

It is also good to have an editor to work with the code like [VSCode](https://code.visualstudio.com/);

---

### 🧭 Running the web application 

```bash
# Clone this repository
$ git clone https://github.com/vitorrsousaa/WaiterApp.git

# Navigate to the Frontend application folder
$ cd client

# Install the dependencies
yarn install

# Run the application
yarn start
# The application will open at port:5173 - visit http://localhost:5173
```

### Settings environment variables

Add a `.env` file to the root folder, following the `env.example` in this repository.


## Executing tests

## Project Structure

### Folder Structure
The repository has the following folder structure:

- public: This folder contains static files that will be publicly served by the server. This includes the index.html file, the entry point for the React application, and any other static resources such as images, fonts, or icon files.
- docs: This folder typically serves as a central location for documentation related to a project.
- src: This is the main folder for the source code of the React application. It contains React components, CSS styles, JavaScript scripts, and any other files related to the application logic. Here's an overview of the structure within the src folder:
- app
  - config: Configuration files and settings for the application.
  - contexts: Context providers for managing global state in React applications.
  - hooks: Custom React hooks for reusable logic across components.
  - libs: Utility libraries or functions used throughout the application.
  - services: Service modules for handling API requests or external services.
  - storage: Modules or utilities for managing local storage or client-side storage.
  - utils: General-purpose utility functions or helpers used across the application.
- view:
  - assets: Static assets such as images, fonts, or icons used in the application.
  - components: This folder contains reusable React components of the application. Each component is typically in its own file for ease of maintenance and reuse.
  - layouts: Layout components defining the overall structure of pages or sections.
  - pages: React components representing individual pages/routes of the application.
  - router: Configuration and setup for client-side routing using a router library (e.g., React Router).
  - ui: UI components or elements specific to the application's design system.


```
├── src
│   ├── app 
│   │   ├── config
│   │   ├── contexts
│   │   ├── hooks
│   │   ├── libs
│   │   ├── services
│   │   ├── storage
│   │   ├── utils
│   ├── view
│   │   ├── assets
│   │   ├── components
│   │   ├── layouts
│   │   ├── pages
│   │   ├── router
│   │   ├── ui
├── public
│   ├── vite.svg
├── dist or build
├── node_modules
├── package-lock.json
└── .gitignore
```

### File Structure

The repository has the following file structure:

- .commitlintrc: Configuration file for commit linting rules, ensuring consistent commit messages.
- .env.example: Example environment variables file used as a template for defining environment configurations.
- .gitignore: Specifies which files and directories should be ignored by Git version control.
- biome.json: JSON file containing biome data or configuration specific to the application.
- index.html: HTML file serving as the entry point for the application in web environments.
- package.json: Manifest file for Node.js projects, specifying dependencies, scripts, and metadata.
- postcss.config.js: Configuration file for PostCSS, a tool for transforming CSS with JavaScript plugins.
- README.md: Markdown file containing documentation and information about the project.
- tailwind.config.js: Configuration file for Tailwind CSS, a utility-first CSS framework.
- tsconfig.json: Configuration file for TypeScript compiler, specifying compiler options and project settings.
- tsconfig.node.json: TypeScript configuration specific to Node.js environments.
- vite.config.ts: Configuration file for Vite, a next-generation frontend build tool.
- vitest.config.ts: Configuration file for Vite tests.
- yarn.lock: Lock file generated by Yarn package manager, ensuring deterministic dependency resolution.
- .gitignore: Specifies which files and directories should be ignored by Git version control.

```
├── .commitlintrc
├── .env.example
├── .gitignore
├── biome.json
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── vitest.config.ts
├── yarn.lock
└── .gitignore
```






## Linting and format code

We use Biome, EditorConfig, and an integrated StyleGuide with automatic formatting. Please download these extensions in your code editor.

1. [Biome](https://marketplace.visualstudio.com/items?itemName=biomejs.biome)
2. [EditorConfig](https://github.com/editorconfig/editorconfig-vscode)

> To ensure that Prettier formats on save, add `"editor.formatOnSave": true` to your VSCode personal settings.


### Expanding the Biome configuration

You can change the biome configuration on `biome.json` file on root folder. You can read more about project structure in [Project Structure Section](#project-structure).

### Using Biome Linting

You can format files and directories using the format command with the `--write` parameter:

```bash
yarn biome format --write <files>
```
Or using default script to run format defined on `package.json`:

```bash
yarn format
```

You can analyze and apply safe fixes to files and directories using the lint command with the `--apply` parameter:

```bash
yarn biome lint --apply <files>
```
Or using default script to run lint defined on `package.json`:

```bash
yarn lint
```

You can apply both with the check command:

```bash
yarn biome check --apply <files>
```
Or using default script to run check defined on `package.json`:

```bash
yarn check
```
The check command runs multiple tools at once. So far, it:

Formats files
Analyzes files
Organizes imports
# React application template

This is a basic template to kickstart projects using React.js. It provides a simple initial structure to help developers get started quickly with their React projects.

## Folder Structure
The repository has the following folder structure:

public: This folder contains static files that will be publicly served by the server. This includes the index.html file, the entry point for the React application, and any other static resources such as images, fonts, or icon files.
src: This is the main folder for the source code of the React application. It contains React components, CSS styles, JavaScript scripts, and any other files related to the application logic. Here's an overview of the structure within the src folder:
components: This folder contains reusable React components of the application. Each component is typically in its own file for ease of maintenance and reuse.
styles: This folder contains CSS style files for styling the application components. Styles can be organized into separate files or a single file, depending on the developer's preference.
App.js: This is the main component of the React application. It serves as the entry point of the component hierarchy and typically renders other components of the application.
index.js: This file is the entry point for the React application. It renders the main component (App.js) into the HTML page.
.gitignore: This file specifies which files and folders should be ignored by Git during code versioning. It typically includes temporary files, build files, and development dependencies that should not be publicly shared.
package.json: This file is used by npm (Node Package Manager) to manage project dependencies, build scripts, development commands, and other project-related configurations.

- src
  - app
    - hooks
  - view
    - pages

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}

devDependencies:
husky
https://typicode.github.io/husky/get-started.html

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


Você pode formatar arquivos e diretórios usando o comando format com o parâmetro --write:


yarn biome format --write <files>


Você pode analisar e aplicar correções seguras em arquivos e diretórios utilizando o comando lint com o parâmetro --apply:

yarn biome lint --apply <files>

Você pode aplicar ambos com o comando check

yarn biome check --apply <files>

O comando check executa múltiplas ferramentas de uma vez. Até o momento, ele:

formata arquivos
analisa arquivos
organiza as importações
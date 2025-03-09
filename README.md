# Package Quality

This package provides ESLint and Prettier configurations for TypeScript projects.

## Installation

Install the package using npm:

```bash
npm install @jterrazz/quality --save-dev
```

## Usage

1. Create an ESLint configuration file (e.g., `eslint.config.js`) in your project root:

```javascript
// eslint.config.js
import { eslintConfig } from '@jterrazz/quality';

export default eslintConfig;
```

2. Create a Prettier configuration file (e.g., `prettier.config.js`) in your project root:

```javascript
// prettier.config.js
import { prettierConfig } from '@jterrazz/quality';

export default prettierConfig;
```

3. You can now use these configurations in your TypeScript project!

Happy linting! 🚀

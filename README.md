
In this project I would like to explain how to convert your [Next.js](https://nextjs.org/) project to monorepository project within 10 minutes.

## Getting Started

#### 1. You need to update your project's structure like this:
```
.
|-- apps
	|-- project-one
	   |-- pages
	   |-- next.config.js
	   |-- tsconfig.json
	|-- project-two
	   |-- pages
	   |-- next.config.js
	   |-- tsconfig.json
|-- libs
	|-- common-component
		|-- common-component.tsx
|-- package.json
|-- tsconfig.json
```
#### 2. Create in the root new `tsconfig.json` and  then add follow params:
```json
{
	"compilerOptions": {
		...
		"baseUrl": ".",
		"paths": {
			"@common/common-component": ["libs/common-component"]
		}
	}
}
```
#### 3. Put into root directory `monorepo-tools` directory from this repository.
#### 4. Add custom **Webpack** configuration to `next.config.js`:
```js
const  patchWebpackConfig = require("../../monorepo-tools/webpack");
const  config = {
	webpack: patchWebpackConfig,
};

module.exports = config;
```
*That should be done for every project in your monorepo.*

#### 5. Update package.json
Because how we have two projects we have to update `package.json` to have `dev`, `build`, `start` commands for each project.
```json
"scripts": {
	"dev:project-one": "next dev apps/project-one",
	"dev:project-two": "next dev apps/project-two",
	"build:project-one": "next build apps/project-one",
	"build:project-two": "next build apps/project-two",
	"start:project-one": "next start apps/project-one",
	"start:project-two": "next start apps/project-two"
}
```

That's all!

## How to add new common module?

Just create new directory in `libs` and add new section in `tsconfig.json`.
```json
{
	"compilerOptions": {
		...
		"paths": {
			"@common/common-component": ["libs/common-component"],
			"@common/common-component-two": ["libs/common-component-two"],
		}
	}
}
```

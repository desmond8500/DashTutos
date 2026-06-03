# [Tabler](readme.md)

## Installation

1. Installation du template

    ```console
    npm install @tabler/core
    ```

    Dans le fichier `angular.json`

    ```json
    "styles": [
    "node_modules/@tabler/core/dist/css/tabler.min.css",
    "src/styles.scss"
    ],
    "scripts": [
    "node_modules/@tabler/core/dist/js/tabler.min.js"
    ]
    ```

2. Installer les icones

    ```console
    npm install @tabler/icons-webfont
    ```

    Dans le fichier `angular.json`

    ```json
    "styles": [
        "node_modules/@tabler/icons-webfont/dist/tabler-icons.min.css",
        "node_modules/@tabler/core/dist/css/tabler.min.css",
        "src/styles.scss"
    ]
    ```

## Structure

```html
src/app/
├── layout/
│   ├── sidebar/
│   ├── navbar/
│   └── layout.component.ts
├── pages/
│   ├── dashboard/
│   ├── users/
│   └── settings/
```
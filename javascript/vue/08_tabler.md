# [Tabler](readme.md)

## Description

## Installation

```console
npm install @tabler/core
```

## Erreurs

Créez un fichier src/globals.d.ts

```ts
declare module '*.css';
```

Ajoutez dans tsconfig.json :

```js
{
  "compilerOptions": {
    "types": ["vite/client"]
  }
}
```
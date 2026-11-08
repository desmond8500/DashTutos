# [Tabler](readme.md)

## Description

Utilisation du template tabler

## Installation

```console
npm install @tabler/core
npm install @tabler/icons-vue
```

*[Tabler Icons NPM](https://www.npmjs.com/package/@tabler/icons-vue)
*[Tabler Icons Website](https://tabler.io/icons)

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

## Configuration

### App.vue

```vue
<script setup lang="ts">
import { RouterView } from 'vue-router'
import Footer from './layouts/Footer.vue'
import Navbar from './_components/navbar.vue'
</script>

<template>
  <Navbar />

  <div class="container">
    <RouterView />
  </div>

  <Footer />
</template>

<style scoped></style>
```

### Services

Dans le fichier `services/api.ts`

```js
import axios from 'axios'

const api = axios.create({
  baseURL: 'https://dash3.yonkou.info/api/v1', // URL de ton API Laravel
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

export default api
```
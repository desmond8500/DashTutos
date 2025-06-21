# [Lightbox](../../javascript/readme.md)

## Installation laravel

* Jquery est requis

```bash
npm install lightbox2 --save
```

::: code-group

```js [vite.config.js]
server: {
    cors: true, // Active les CORS
    // host: 'localhost',
    // port: 5173,
},
optimizeDeps: {
    include: ['jquery', 'lightbox2'],
},
```

```js [app.js]
import $ from 'jquery';
window.$ = window.jQuery = $;
import lightbox from 'lightbox2';
import 'lightbox2/dist/css/lightbox.css';
```

:::

[Site occifiel](https://lokeshdhakar.com/projects/lightbox2/)
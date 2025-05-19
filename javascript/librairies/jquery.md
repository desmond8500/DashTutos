# [JQuery](../readme.md)

## Installation

```bash
npm install jquery
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

* [Site](https://www.npmjs.com/package/jquery)

# [Vite](readme.md)

## Description

 
## Imports

* Jquery
  

::: code-group

```js [vite.config.js]
    optimizeDeps: {
        include: ['jquery'],
    },
```

```js [ressources.js.app.js]
import $ from 'jquery';
window.$ = window.jQuery = $;

$(document).ready(function () {
    console.log('jQuery est prêt à fonctionner !');
});
```

:::


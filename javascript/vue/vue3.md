# [VUE 3](readme.md)

* [Get Started](https://vuejs.org/guide/quick-start.html)

## CDN

```html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
```

## Page de démo

```html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

<div id="app">{{ message }}</div>

<script>
  const { createApp, ref } = Vue

  createApp({
    setup() {
      const message = ref('Hello vue!')
      return {
        message
      }
    }
  }).mount('#app')
</script>
```
 

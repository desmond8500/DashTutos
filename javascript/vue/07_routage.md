# [Routes](readme.md)

## Routage

réer le fichier ``src/routes.vue``

::: code-group

```vue [Parent]
<script setup lang="ts">
import HomePage from './Homepage.vue'
import BlogPage from './Blogpage.vue'
import ArticlePage from './Articlepage.vue'
export const routes = [
    { path: "/", component: 'HomePage', name: 'home'}
    { path: "/blog", component: 'BlogPage', name: 'blog'}
    { path: "/article", component: 'ArticlePage', name: 'article', props:true }
]

</script>

```

# [Formulaire](readme.md)

## V-model

```vue
<script setup lang="ts">

const name = ref('') 
const add = () => {

}
</script>

<template>
    <form @submit.prevent="add">

        <input v-model="name"> {{ count }} </input>
        <button> Submit </button>
    </form>
</template>
```

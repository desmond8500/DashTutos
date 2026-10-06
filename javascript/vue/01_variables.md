# [Variables](readme.md)

## Déclarer une variable

```vue
<script setup lang="ts">
import { ref } from 'vue'

interface Todo {
    id: number
    name: string
    status: boolean
}

const name = ref('') // string
const count = ref(0) // int
const table = ref([0,1]) // array
const objet = ref({a:1}) // objet
const todos = ref<Todo[]>([])

</script>

<template>

    <p> {{ count }} </p>
 
</template>
```

## Modifier une variable

```vue
<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
const increment = () =>{
    count.value++
}
</script>

<template>

    <p @click="increment"> {{ count }} </p>
 
</template>

```

## Computed

Pour récupérer une valeur dérivée d'une autre valeur

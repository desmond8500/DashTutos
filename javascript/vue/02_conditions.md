# [Conditions](readme.md)

## V-show

```vue
<template>

    <p @click="increment"> {{ count }} </p>
    <div v-show="count > 0"> Hello </div>
    <div v-hide="count > 0"> Hello </div>

    <div v-if="count > 0"> Hello </div>
    <div v-else="count > 0"> Hella </div>
 
</template>
```

## V-bind, attributs dynamiques

Cela permet de nommer dynamiquement des attributs

```vue
<template>

    <div :id="`p-${count}`" > 0"> Hello </div>
 
</template>
```

## Styles dynamiques

```vue
<template>

    <div :style="{color: count =2 ? 'red' : 'blue' }"> Hello </div>
 
</template>
```

## Classe dynamiques

```vue
<template>

    <div :class="{color: count =2  }"> Hello </div>
 
</template>
```

## V-html

Va afficher le contenu sans echapper les balises.

```vue
<script setup lang="ts">
import { ref } from 'vue'

const demi = '<div :class="{color: count =2  }"> Hello </div>'
</script>
<template>

    <div v-html="demo">  </div>
 
</template>
```
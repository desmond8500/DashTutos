# [Pinia](readme.md)

## Description

Si vous savez écrire un composable, vous savez écrire un store : la différence est que l’état est partagé dans toute l’application.

::: code-group

```js [useCompteur.js]
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCompteurStore = defineStore('compteur', () => {
  // state = ref
  const compteur = ref(0)

  // getters = computed
  const double = computed(() => compteur.value * 2)

  // actions = fonctions
  function incrementer() {
    compteur.value++
  }

  function reinitialiser() {
    compteur.value = 0
  }

  return { compteur, double, incrementer, reinitialiser }
})
```

```php [CompteurView.vue]
<script setup>
import { useCompteurStore } from '@/stores/compteur'

const store = useCompteurStore()
</script>

<template>
  <p>Valeur : {{ store.compteur }}</p>
  <p>Double : {{ store.double }}</p>
  <button @click="store.incrementer">+1</button>
  <button @click="store.reinitialiser">Reset</button>
</template>
```

:::

 

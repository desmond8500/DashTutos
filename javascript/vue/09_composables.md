# [Composables](readme.md)

## Description

Un composable est une fonction (par convention useXxx) qui utilise l’API de réactivité de Vue (ref, computed, watch, onMounted...) et retourne des variables et des fonctions réutilisables dans n’importe quel composant.

## Exemple1

::: code-group

```js [useCompteur.js]
import { ref } from 'vue'

export function useCompteur() {
  // état (variable réactive)
  const compteur = ref(0)

  // fonction
  function incrementer() {
    compteur.value++
  }

  // on expose ce qui sera utilisable dans la page
  return { compteur, incrementer }
}
```

```vue [Compteur.vue]
<script setup>
import { useCompteur } from '@/composables/useCompteur'

const { compteur, incrementer } = useCompteur()
</script>

<template>
  <p>Valeur : {{ compteur }}</p>
  <button @click="incrementer">+1</button>
</template>
```

:::

## Exemple 2


::: code-group

```js [useCompteur.js]
import { ref, computed } from 'vue'

export function useCompteur(valeurInitiale = 0, pas = 1) {
  const compteur = ref(valeurInitiale)

  // variable dérivée : se recalcule toute seule
  const estPair = computed(() => compteur.value % 2 === 0)
  const double = computed(() => compteur.value * 2)

  function incrementer() {
    compteur.value += pas
  }

  function decrementer() {
    compteur.value -= pas
  }

  function reinitialiser() {
    compteur.value = valeurInitiale
  }

  return {
    compteur,
    estPair,
    double,
    incrementer,
    decrementer,
    reinitialiser,
  }
}
```

```vue [CompteurView.vue]
<script setup>
import { useCompteur } from '@/composables/useCompteur'

// on peut choisir ce qu'on récupère, et passer des paramètres
const { compteur, estPair, double, incrementer, decrementer, reinitialiser } =
  useCompteur(10, 2)
</script>

<template>
  <h1>Compteur : {{ compteur }}</h1>
  <p>Double : {{ double }}</p>
  <p>{{ estPair ? 'Pair' : 'Impair' }}</p>

  <button @click="decrementer">-</button>
  <button @click="incrementer">+</button>
  <button @click="reinitialiser">Reset</button>
</template>
```

:::

## Réutilisation

Chaque appel à useCompteur() crée un état indépendant. C’est la grande force des composables :

```vue
<script setup>
import { useCompteur } from '@/composables/useCompteur'

const a = useCompteur(0)
const b = useCompteur(100, 10)
</script>

<template>
  <p>A : {{ a.compteur }}</p>
  <button @click="a.incrementer">A +1</button>

  <p>B : {{ b.compteur }}</p>
  <button @click="b.incrementer">B +10</button>
</template>
```
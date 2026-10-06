# [Composants](readme.md)

## Passer des variables parent vers enfant

::: code-group

```vue [Parent]
<script setup lang="ts">
const name = ref('bob')
</script>
<template>
    <template label="label" :name="name" />
</template>
```

```vue [enfant]
<script setup lang="ts">
defineProps({
    label: String,
    name: String,
})
</script>

<template>

    {{ label }} 
</template>
```

## Passer des variables enfant vers parent

:::

```vue [Parent]
<script setup lang="ts">
const reload = () => {
    // do
} 
</script>
<template>
    <template label="label" :name="name" @check="reload" >
</template>
```

```vue [enfant]
<script setup lang="ts">
defineEmits(['check', 'uncheck'])

const onChange() = (event) => {
    emits('check',12)
} 
</script>

<template>
    <input type="checkbox" @change=(onChange) />
</template>
```

:::

## Slot


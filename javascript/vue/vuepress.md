# [Vuepress](readme.md)

# Documents

* [Manuel d'installation](http://itesaidf.free.fr/Documentations%20Techniques/Intrusion/Galaxy/Dimension%20Installation.pdf)

## Activation / Désactivation Totale

* Code PIN + A
* Code PIN + ENT

## Activation / Désactivation Partielle

* Code PIN + B
* Code PIN + ENT

## Installation

```console
npm install -D vuepress@next
```

## Lancer le server

Pour lancer le serveur :

```console
npm run docs:dev
```

Compiler le projet

```console
npm run docs:build
```

::: details
This is a details block, which does not work in IE / Edge
:::

## Afficher un message

```html
Hello, {{ msg }}

<script setup>
    const msg = 'Vue in Markdown'
</script>
```

## Click Button

```html
{{ count }}
<button @click="count++">Click Me!</button>
<script setup>
    import { h, ref } from 'vue'
    const count = ref(0)
</script>
```

## Sources

*[Vuepress](https://vuepress.vuejs.org/)
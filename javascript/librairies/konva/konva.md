# [Konva JS](readme.md)

[Site officiel](konvajs.org)

## [Nouveau projet](konvajs.org)

```html
    <script src="https://cdn.jsdelivr.net/npm/konva@9/konva.min.js"></script>
    <div id="container"></div>
```

Créer un stage

```js
var stage = new Konva.Stage({
  container: 'container', // id of container <div>
  width: 500,
  height: 500,
});
```

Créer un layer

```js
var layer = new Konva.Layer();
```

Créer un composant cercle

```js
var circle = new Konva.Circle({
  x: stage.width() / 2,
  y: stage.height() / 2,
  radius: 70,
  fill: 'red',
  stroke: 'black',
  strokeWidth: 4,
});
```

Ajouter le composant au layer

```js
layer.add(circle);
```

Ajouter le layer au stage

```js
stage.add(layer);
```

# [File input](readme.md)

## Description

Personnaliser un bouton d'upload

## Code

::: code-group

```html [html]
<input type="file" id="file" accept="image/*">
<label for="file"> Choisir un avatar </label>
```

```css [CSS]
input[type="file"]{
    display: none;
}
label{
    background: blue;
    color: white;
    padding: 5px;
    border-radius: 5px;
}
```

:::
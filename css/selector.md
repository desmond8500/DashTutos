# [Selecteurs CSS](readme.md)

## Description

## Inputs

::: code-group

```html
<input class="form-check-input" type="checkbox" value="" id="">
```

```css
input:checked{
    background: blue
}
```

:::

## Childs

```css
span:nth-child(2n){
    background: blue
}
```

* 2n = 2e
* n -1 = Saute une ligne
* first child = Première ligne
* last child = Dernière ligne

## Data attributes

::: code-group

```html
<div data-red="false">Hello</div>
```

```css
[data-red]="true"{
    background: red;
}
```

:::
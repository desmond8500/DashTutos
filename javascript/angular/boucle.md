# [Boucle](readme.md)

## Description

::: code-group

```html [html]
<div *ngFor="let color of colors">
  <h2>{{color}}</h2>
</div>
```

```typescript [css]
public color =["red", "blue","green"];
```

:::

::: code-group

```html [html]
<div *ngFor="let color of colors; index as i">
  <h2> {{i}} {{color}}</h2>
</div>
```

```typescript [css]
public color =["red", "blue","green"];
```

:::
# [Carte](readme)

----------
  

<div class="demo">
  <img src="./img/Image1.jpg" class="img1">
  <img src="./img/luffy.jpg" class="img2">
  <div class="text">One Piece</div>
</div>


::: code-group

```html []
<div class="demo">
  <img src="./img/Image1.jpg" class="img1">
  <img src="./img/luffy.jpg" class="img2">
  <div class="text">One Piece</div>
</div>
```

```css []
.demo{
    display: grid;
    grid-template-areas: "stack";
    align-items: end;
    width: 300px;
}

.img1{
    grid-area: stack;
    z-index: 1;
    width: 100%;
    height: 50px;
    opacity: 0.5;
    border-radius: 0 0 15px 15px;
}

.img2{
    grid-area: stack;
    width: 100%;
    height: auto;
    border-radius: 15px;
}

.text{
    grid-area: stack;
    z-index: 2;
    color: yellow;
    font-size: 2em;
    font-weight: bold;
    text-align: center;
    margin-bottom: 10px;
}
```

:::

<style>
.demo{
    display: grid;
    grid-template-areas: "stack";
    align-items: end;
    width: 300px;
}

.img1{
    grid-area: stack;
    z-index: 1;
    width: 100%;
    height: 50px;
    opacity: 0.5;
    border-radius: 0 0 15px 15px;
}

.img2{
    grid-area: stack;
    width: 100%;
    height: auto;
    border-radius: 15px;
}

.text{
    grid-area: stack;
    z-index: 2;
    color: yellow;
    font-size: 2em;
    font-weight: bold;
    text-align: center;
    margin-bottom: 10px;
}

</style>
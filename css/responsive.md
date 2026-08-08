# [Responsive](readme.md)

## Images carrées

<div class="demo">
    <div class='section'>
        <img src="./img/Image1.jpg" class="img1">
        <div class="text">Image Normale</div>
    </div>    
    <div>
        <img src="./img/Image1.jpg" class="img2">
        <div class="text">Image carrée</div>
    </div>    
</div>

<style>
.section{
    float:left;
    margin-right: 20px;
}
.img2{
    aspect-ratio: 1/1; /* carré*/
    height: 100px;
    object-fit: cover; /* image en plein ecran*/
}
.img1{
    height: 100px;
    text-align: center;
}
</style>

```css
img{
    aspect-ratio: 1/1; /* carré*/
    max-width: 100%; /* largeur max*/
    object-fit: cover; /* image en plein ecran*/
}
```

## Grilles

<div class="boxes">
    <div class='box'>
        <img src="./img/luffy.jpg" class="img1">
    </div>
    <div class='box'>
        <img src="./img/luffy.jpg" class="img1">
    </div>
    <div class='box'>
        <img src="./img/luffy.jpg" class="img1">
    </div>
    <div class='box'>
        <img src="./img/luffy.jpg" class="img1">
    </div>
    <div class='box'>
        <img src="./img/luffy.jpg" class="img1">
    </div>
    <div class='box'>
        <img src="./img/luffy.jpg" class="img1">
    </div>
    <div class='box'>
        <img src="./img/luffy.jpg" class="img1">
    </div>
    <div class='box'>
        <img src="./img/luffy.jpg" class="img1">
    </div>
    <div class='box'>
        <img src="./img/luffy.jpg" class="img1">
    </div>
</div>

<style>
 .boxes{
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 100px), 1fr));
    gap: 1rem;
} 

</style>

```css
.boxes{
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 200px), 1fr));
    gap: 1rem;
}
```

[Source](https://www.youtube.com/watch?v=MDqhKkEN-IM&list=TLPQMDgwNzIwMjWnE5-nOfNFJw&index=4&ab_channel=OptimisticWeb)
# [Responsive](readme.md)

## Images carrées

```css
img{
    aspect-ratio: 1/1; /* carré*/
    max-width: 100%; /* largeur max*/
    object-fit: cover; /* image en plein ecran*/
}
```

## Griles

```css
.boxes{
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 200px), 1fr));
    gap: 1 rem;
}
```

[Source](https://www.youtube.com/watch?v=MDqhKkEN-IM&list=TLPQMDgwNzIwMjWnE5-nOfNFJw&index=4&ab_channel=OptimisticWeb)
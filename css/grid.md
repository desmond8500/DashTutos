# [grid](readme.md)

## Responsive Grid

::: code-group

```html [HTML]
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Grid</title>
</head>
<body class="grid-container">
    <nav>Navbar</nav>
    <aside>Sidebar</aside>
    <main>
        Main
    </main>
    <footer>Footer</footer>
</body>
</html>
```

```css [CSS]
body{
    display: grid;
    grid-template-areas:
        "nav nav nav"
        "aside main main"
        "footer footer footer";
    grid-gap: 10px;
    height: 100vh;
    margin: 0;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 300px 1fr;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
nav {
    grid-area: nav;
    background-color: lightblue;
    padding: 10px;
}
aside {
    grid-area: aside;
    background-color: lightgreen;
    padding: 10px;
}
main {
    grid-area: main;
    background-color: lightcoral;
    padding: 10px;
}
footer {
    grid-area: footer;
    background-color: lightgray;
    padding: 10px;
}

@media (max-width: 768px) {
    .grid-container {
        grid-template-columns: 1fr;
        /* Single column on smaller screens */
        grid-template-areas:
            "nav"
            "main"
            "footer";
    }
    aside{
        display: none;
    }
}
```

:::


 

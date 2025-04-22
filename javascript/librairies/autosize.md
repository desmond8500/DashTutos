# [Autosize](readme.md)

[Site Officiel](https://www.jacklmoore.com/autosize/)

## CDN

 ```html
    <script src="https://cdnjs.cloudflare.com/ajax/libs/autosize.js/3.0.20/autosize.min.js" integrity="sha512-EAEoidLzhKrfVg7qX8xZFEAebhmBMsXrIcI0h7VPx2CyAyFHuDvOAUs9CEATB2Ou2/kuWEDtluEVrQcjXBy9yw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
 ```

## Code

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Autosize</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/core@1.1.1/dist/css/tabler.min.css" />
    <script src="https://cdn.jsdelivr.net/npm/@tabler/core@1.1.1/dist/js/tabler.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/autosize.js/3.0.20/autosize.min.js" integrity="sha512-EAEoidLzhKrfVg7qX8xZFEAebhmBMsXrIcI0h7VPx2CyAyFHuDvOAUs9CEATB2Ou2/kuWEDtluEVrQcjXBy9yw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</head>
<body>
    <div class="container-xl">
        
        <textarea id="myTextarea" rows="1" placeholder="Tapez votre texte..."></textarea>

        <script>
            autosize(document.getElementById('myTextarea'));
            autosize(document.querySelectorAll('textarea'));
        </script>
    </div>
</body>
</html>
``` 
# [BrowserShot](readme.md)

## Description

## Installations

```bash
composer require spatie/browsershot
```

## Enregistrer PDF

```php
use Spatie\Browsershot\Browsershot;
function pdf(){
    $template = view('_pdf.test')->render();
    return Browsershot::html($template)->save('example3.pdf');
}
```

## Sources

* []()
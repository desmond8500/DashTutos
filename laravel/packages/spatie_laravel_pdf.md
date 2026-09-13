# [Spatie laravel PDF](../readme.md)

## [INSTALLATION](https://spatie.be/docs/laravel-pdf/v2/installation-setup)

```console
composer require spatie/laravel-pdf
composer require spatie/browsershot
npm install puppeteer
```

## Génération d'une page

::: code-group

```php [web.php]
Route::get('test-pdf', function () {
    return PdfControlleur::pdf();
})->name('task_pdf');
```

```php [PdfControlleur]
static function pdf(){
    // Generate PDF
    $pdf = Pdf::view('_pdf.test_pdf', []);

    $pdf->format('a4');
    $pdf->margins(10, 0, 5, 0);
    return $pdf->name('invoice.pdf');
}
```

:::

# [Commandes](readme.md)

## Description

Permet de programmer des commandes personnalisées. C'est utile pour automatiser des taches et de les lancer à partir des lignes de commandes.

## Créer une commande

```php
php artisan make:command GenerateModel

```

Laravel va générer un fichier

```php
app/
└── Console/
    └── Commands/
        └── GenerateModel.php
```

## Définir la commande

```php
protected $signature = 'app:demo-model {model : Nom du modèle}';
protected $description = 'Command description';
```

```php
public function handle()
{
    $model = $this->argument('model');
    $this->info("Modèle : {$model}");
    return self::SUCCESS;
}
```

L'argument peut etre facultatif ou avoir une valuer par défaut

```php
// Optional argument...
'mail:send {user?}'

// Optional argument with default value...
'mail:send {user=foo}'
```

L'argument peut être un  

```php
'mail:send {user*}'
```

```console
php artisan mail:send 1 2
```

## Afficher un message

```php
$this->info('The command was successful!');
```

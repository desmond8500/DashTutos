# [Laravel livewire Layout](readme.md)

## Description

## Utiliser un layout personnalisé

::: code-group

```php [Option 1]
#[Layout('layouts.app')] 
public function render()
{
    return view('livewire.create-post');
}
```

```php [Option 2]
public function render()
{
    return view('livewire.create-post')
         ->layout('layouts.app'); 
}
```

:::

## Utiliser les extensions

::: code-group

```php Extends1
public function render()
{
    return view('livewire.show-posts')
        ->extends('layouts.app'); 
}
```

```php Extends2
public function render()
{
    return view('livewire.show-posts')
        ->extends('layouts.app')
        ->section('body'); 
}
```

:::

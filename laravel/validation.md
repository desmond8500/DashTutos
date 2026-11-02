# [Validation](readme.md)

## Unique

```php
'email' => 'unique:App\Models\User,email_address'
```

## **exists** Existe dans la base de donnée

```php
private $rules = [
    'user' => 'exists:App\Models\User,id'
]

```

## Date

Antérieur à une date

```php
private $rules = [ 'date' => 'before:date']
```

Antérieur ou égal à une date

```php
private $rules = [ 'date' => 'before_or_equal:date']
```

Postérieur à une date

```php
private $rules = [ 'date' => 'after:date']
```

Postérieur ou égal à une date

```php
private $rules = [ 'date' => 'after_or_equal:date']
```

## Validation laravel 10 API Rest

```php
$validator = Validator::make($request->all(), [
    'nom' => ['required', 'string', 'max:255'],
    'email' => ['required', 'email'],
    'client_id' => ['required', 'integer', 'exists:clients,id'],
]);

if ($validator->fails()) {
    return response()->json([
        'success' => false,
        'message' => 'Les données fournies sont invalides.',
        'errors' => $validator->errors(),
    ], 422);
}
```

## Sources

* [Laravel Validation](https://laravel.com/docs/10.x/validation#rule-exists)

# [Erreurs](readme.md)

## Uncaught TypeError: $(...).modal is not a function

```javascript
$('#modal-id').modal();
```

Correction

```javascript
window.$('#modal-id').modal();
```

## Modals et dropdowns qui ne fonctionnent pas

Dans le fichier ``layout/app.blade

```html
 <script>
        document.addEventListener('livewire:navigated', () => {
        // Réinitialise tous les dropdowns Bootstrap sur la nouvelle page
        const dropdownElementList = document.querySelectorAll('[data-bs-toggle="dropdown"]');
        const dropdownList = [...dropdownElementList].map(dropdownToggleEl => new bootstrap.Dropdown(dropdownToggleEl));

        const modalTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="modal"]'));
        modalTriggerList.map(function (modalTriggerEl) {
        return new bootstrap.Modal(modalTriggerEl);
        });

        });
    </script>
```
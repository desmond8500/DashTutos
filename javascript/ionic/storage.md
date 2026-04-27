# [Stokage](readme.md)

## Description

## Ionic Storage (recommandé)

C’est la solution standard Ionic pour stocker des données localement (clé/valeur), avec fallback automatique (IndexedDB, SQLite…).

1. Installer la librairie

    ```console
    npm install @ionic/storage-angular
    ```

    Dans le fichier ``main.ts``

    ```javascript
    import { importProvidersFrom } from '@angular/core';
    import { IonicStorageModule } from '@ionic/storage-angular';

    bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(IonicStorageModule.forRoot())
    ]
    });
    ```

2. Crééer un service

    ```console
    ionic g service services/StorageService    
    ```

    ```javascript
    import { Injectable } from '@angular/core';
    import { Storage } from '@ionic/storage-angular';

    @Injectable({
    providedIn: 'root'
    })
    export class StorageService {
    private _storage: Storage | null = null;

    constructor(private storage: Storage) {
        this.init();
    }

    async init() {
        this._storage = await this.storage.create();
    }

    set(key: string, value: any) {
        return this._storage?.set(key, value);
    }

    get(key: string) {
        return this._storage?.get(key);
    }
    }
    ```

## Ionic préférences

Tu peux aussi éviter Ionic Storage et utiliser directement Capacitor Preferences :

```javascript
import { Preferences } from '@capacitor/preferences';

await Preferences.set({
  key: 'user',
  value: JSON.stringify({ name: 'Desmond' })
});

const { value } = await Preferences.get({ key: 'user' });
```
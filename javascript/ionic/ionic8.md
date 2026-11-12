# [Ionic 8](readme.md)

## Description

Procédure pour créér une application mobile avec ionic sans utiliser android Studio.

## Prérequis

- [NodeJS](https://nodejs.org/en/download/current)
- [Android SDK](https://developer.android.com/tools/releases/platform-tools?hl=fr)
- JDK 21

## Installation

1. Créer un projet Ionic + Angular

    ```console
    npm install -g @ionic/cli
    ionic start myApp blank --type=angular
    cd myApp
    ```

2. Installer Capacitor

    ```console
    npm install @capacitor/core @capacitor/cli
    ```

3. Build

    ```console
    npm run build
    ```

4. Ajouter Android

    ```console
    npm install @capacitor/android
    npx cap add android
    ```

5. Ajouter le fichier local.properties

    ```console
    touch android/local.properties
    echo "sdk.dir=C:/Users/Zacharias/AppData/Local/Android/Sdk" > android/local.properties
    ```

6. Synchroniser projet

    ```console
    npx cap sync android
    ```

7. Générer APK Debug

    ```console
    ./gradlew assembleDebug
    ```

Le fichier est généré dans le dossier `android/app/build/outputs/apk/debug/app-debug.apk`

## Génération de l'APK

1. Ajouter dans le fichier ``package.json``

   ```js
    "scripts": {
        "apk:debug": "npm run build && cap sync android && node scripts/gradle.mjs assembleDebug",
        "apk:release": "npm run build && cap sync android && node scripts/gradle.mjs assembleRelease"
    }
   ```

2. Le fichier est généré dans le dossier `android/app/build/outputs/apk/debug/app-debug.apk`


## Personnalisation

1. Nom & ID de l’application
   Dans le fichier ``capacitor.config.ts``

    ```javascript
    export default {
        appId: "com.site.app",
        appName: "App",
        webDir: "www"
    }
    ```

2. Icône & Splash Screen

    ```console
    npm install @capacitor/assets
    npx capacitor-assets generate
    ```

    assets/icon.png        (1024x1024)  
    assets/splash.png      (2732x2732)  

3. Couleurs & thème

    Dans le fichier ``src/theme/variables.scss``

    ```console
    :root {
    --ion-color-primary: #0A1F44;
    --ion-color-primary-contrast: #ffffff;

    --ion-color-secondary: #00C2FF;
    }
    ```

4. Forcer le mode IOS Global
    Dans ``src/main.ts``

    ```javascript
    import { bootstrapApplication } from '@angular/platform-browser';
    import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
    import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

    import { routes } from './app/app.routes';
    import { AppComponent } from './app/app.component';

    bootstrapApplication(AppComponent, {
    providers: [
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        provideIonicAngular({
            mode: 'ios'
        }),
        provideRouter(routes, withPreloading(PreloadAllModules)),
    ],
    });

    ```

## Build Rapide

```console
npm run build
npx cap sync
cd android
./gradlew assmbleDebug
```

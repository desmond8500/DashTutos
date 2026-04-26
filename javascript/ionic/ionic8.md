# [Ionic 8](readme.md)

## Description

Procédure pour créér une application mobile avec ionic sans utiliser android Studio.

## Prérequis

- [NodeJS](https://nodejs.org/en/download/current)
- [Angular](https://angular.dev/installation)
- [Java 17](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)
- [Android SDK](https://developer.android.com/tools/releases/platform-tools?hl=fr)

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

3. Build Angular

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

6. Modifier le fichier android/gradle.properties

    ```console
    echo "org.gradle.java.home=C:\\Program Files\\Java\\jdk-17" >> android/gradle.properties
    ```

7. Ajouter à la fin du fichier android/build.gradle

    ```console
    subprojects {
        afterEvaluate { project ->
            if (project.hasProperty("android")) {
                project.android {
                    compileOptions {
                        sourceCompatibility JavaVersion.VERSION_17
                        targetCompatibility JavaVersion.VERSION_17
                    }
                }
            }

            tasks.withType(JavaCompile).configureEach {
                sourceCompatibility = "17"
                targetCompatibility = "17"
            }
        }
    }
    ```

8. Synchroniser projet

    ```console
    npx cap sync android
    ```

9. Générer APK Debug

    ```console
    ./gradlew assembleDebug
    ```

    Après les erreurs

    ```console
    ./gradlew --stop
    ./gradlew clean
    ./gradlew assembleDebug
    ```

    Le fichier est généré dans le dossier `android/app/build/outputs/apk/debug/app-debug.apk`

## Installer sur téléphone

```console
adb install app-debug.apk
```

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

    Sinon dans ``src/app/app.module.ts``

    ```javascript
    import { IonicModule } from '@ionic/angular';

    @NgModule({
        imports: [
            IonicModule.forRoot({
            mode: 'ios'
            })
        ]
    })
    export class AppModule {}
    ```

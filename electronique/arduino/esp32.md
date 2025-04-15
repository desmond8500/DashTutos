# [ESP32](readme.md)

## Description

ESP32 Devkit V1

## Prérequis

* Arduino IDE
* ESP32

## Configuration

Dans l'IDE allez dans ```Fichier > Préférences```.
Ajoutez cette URL dans "URL de gestionnaire de cartes supplémentaires" :

```text
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

Allez dans Outils > Type de carte > Gestionnaire de cartes, recherchez "ESP32", et installez la bibliothèque.

Dans Outils, choisissez :

* Type de carte : "ESP32 Dev Module" (ou le modèle spécifique de votre carte).
* Port série : sélectionnez le port correspondant à l'ESP32.

## Drivers

Il faudra installer le pilote de l'ESP32 s'il n'est pas déjà sur votre PC.

[Pilote ESP32 devkit](https://www.silabs.com/developer-tools/usb-to-uart-bridge-vcp-drivers?tab=downloads)

## Modes de fonctionnement Wi-Fi

L'ESP32 peut fonctionner dans trois modes principaux :

1. Station (STA) : Se connecte à un réseau Wi-Fi existant (comme un routeur).
2. Point d'accès (AP) : Crée son propre réseau Wi-Fi auquel d'autres appareils peuvent se connecter.
3. AP + STA : Combine les deux modes.

## Code 1

```html
<!DOCTYPE html>
    <html>
    <head>
      <title>ESP32 Serveur Web</title>
      <style>
        body { font-family: Arial; text-align: center; margin: 0; padding: 0; }
        .button { padding: 15px; background-color: #008CBA; color: white; border: none; font-size: 16px; }
        .button:hover { background-color: #005F73; }
      </style>
      <script src="https://cdn.jsdelivr.net/npm/@tabler/core@1.1.1/dist/js/tabler.min.js"></script>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/core@1.1.1/dist/css/tabler.min.css" />

    </head>
    <body>

        div
      
      <h1>Bienvenue sur l'ESP32</h1>
      <button class="btn btn-primary" onclick="location.href='/on'">Allumer</button>
      <button class="btn btn-primary" onclick="location.href='/off'">Éteindre</button>
    </body>
    </html>
```
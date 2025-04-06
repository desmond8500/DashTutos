# [Présentation](readme.md)

## Description

Nous voulons developper un système domotique distribué, avec un contrôleur principal (master) et plusieurs modules esclaves adressés.

- Contrôleur principal : Raspberry Pi avec Home Assistant
- Modules ESP32 : contrôlent relais, capteurs, etc.
- Communication :
  - RS485 : pour une partie filaire (robuste et fiable)
  - Wi-Fi : pour des modules distants ou mobiles
- Interface web : Home Assistant (et éventuellement pages perso sur ESP32)

## Architecture réseau

```less
            +---------------------+
            |   Raspberry Pi      |
            |  (Home Assistant)   |
            +---------------------+
                  |        |
              Wi-Fi     RS485 (USB→RS485)
               |           |
     ----------------     Bus RS485
     |              |        |
 [ESP32 WiFi]   [ESP32 WiFi] [ESP32 RS485]
 (adresse 10)   (adresse 11)   (adresse 01)
```

## Mode de communication

1. Bus série RS485
   - Fiable, parfait pour longues distances, peu coûteux
   - Nécessite des modules RS485 (ex: MAX485) pour chaque ESP32
   - Chaque module a une adresse unique

2. Wi-Fi + MQTT

   - Facile si tu veux t’appuyer sur un réseau Wi-Fi existant
   - Pas de câblage (mais dépend du Wi-Fi)
   - Chaque module est un client MQTT avec un identifiant unique
   - Le contrôleur agit comme broker MQTT ou client connecté à un broker
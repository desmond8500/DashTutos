# [Module](readme.md)

## Description

## Communication RS485

1. Module MAX485 connecté au port série de l’ESP32
1. Chaque ESP32 a une adresse unique (hardcodée ou stockée en EEPROM)
1. Communication via UART (ex: Serial2)
1. Décodage de message du type ```[START][ADDR][CMD][DATA][END]```
1. Réponse possible vers le contrôleur

## Communication Wifi

1. Utilise MQTT pour envoyer/recevoir des commandes
1. Home Assistant agit comme client MQTT (ou utilise Mosquitto comme broker)
1. Tu peux aussi exposer une API REST ou interface web légère si besoin

## Equipements

| Désignation | Référence | quantité |
| :-- | :-- | --: |
| ESP32 | [ESP32](https://yuupee.com/product/esp-wroom-32-esp32-esp-32s-carte-de-developpement-2-4-ghz-dual-mode-wifi-bluetooth/) | 1 |
| Module émetteur-récepteur TTL UART série vers RS-485 Module pour Arduino Raspberry Pi  | [MAX485 ]([ESP32](https://yuupee.com/product/max485-rs485-module-emetteur-recepteur-ttl-uart-serie-vers-rs-485-module-pour-arduino-raspberry-pi/)) | 1 |

## Cablage

```lua
+---------+
    | MAX485  |
    +---------+
       |   | 
       |   +--- RO  → ESP32 RX (ex: GPIO16)
       |      
       +--- DI  → ESP32 TX (ex: GPIO17)
       |
       +--- DE & RE (contrôlables via un GPIO ou forçage en mode réception/transmission)
       |
       +--- Vcc  → 5V (ou 3.3V, selon le module et l’ESP32)
       |
       +--- GND  → GND commun (à relier au GND du Raspberry Pi et des autres modules)
```

Notes complémentaires :

__DE/RE :__ Pour simplifier, tu peux connecter les deux broches ensemble et les piloter via un GPIO de l’ESP32 afin de basculer entre les modes émission (transmission) et réception. Si ton application est uniquement en réception (ou émission prédominante), tu peux les forcer en les reliant respectivement à Vcc ou à GND (consulte la datasheet du MAX485 pour les détails sur le mode de fonctionnement).

__Alimentation :__ Vérifie que l’alimentation du MAX485 correspond bien aux niveaux logiques de ton ESP32. Certains modules fonctionnent en 5V, d’autres en 3.3V.

## Adressage

### Matériel

1. 1x DIP switch 4 positions (par ex. DIP-04)
1. 4x résistances de 10kΩ (pull-down)
1. Connexion des 4 DIP vers 4 GPIOs de l’ESP32 (ex: GPIO 32 à 35)
1. Option : un GPIO de sélection (ex: USE_DIP_ADDRESS), ou logique dans le firmware

## Schéma

```lua
          DIP SWITCH (4 bits)
        +---+---+---+---+
        | 1 | 2 | 3 | 4 |
        +-+-+---+---+---+
          |   |   |   |
         R   R   R   R    ← Pull-down (10kΩ à GND)
          |   |   |   |
      GPIO32 33  34  35  ← Entrées ESP32

```

## Code

```c++
#define ADDR_PIN_0 32
#define ADDR_PIN_1 33
#define ADDR_PIN_2 34
#define ADDR_PIN_3 35
#define USE_DIP_GPIO 25  // Ex: jumper ou bouton pour forcer le DIP

int readDipAddress() {
  int addr = 0;
  addr |= digitalRead(ADDR_PIN_0) << 0;
  addr |= digitalRead(ADDR_PIN_1) << 1;
  addr |= digitalRead(ADDR_PIN_2) << 2;
  addr |= digitalRead(ADDR_PIN_3) << 3;
  return addr;
}

int readStoredAddress() {
  // Ex: depuis NVS/EEPROM
  return preferences.getUChar("addr", 0);
}

int getDeviceAddress() {
  pinMode(USE_DIP_GPIO, INPUT_PULLUP);
  if (digitalRead(USE_DIP_GPIO) == LOW) {
    // Jumper connecté → utiliser DIP
    return readDipAddress();
  } else {
    return readStoredAddress();
  }
}

```

Tu peux aussi inverser la logique : priorité au DIP switch si une adresse n’est pas encore stockée, ou ajouter un mode web pour la changer.

## Boitier rail DIN

## Boitier

* https://www.amazon.fr/11-111L050-Bo%C3%AEtier-pour-tableaux-96mm/dp/B0DF5YDBMG/ref=sr_1_245?dib=eyJ2IjoiMSJ9.J0v2kZfSLroaKHP296GOYBrexDXHCCoUs-_RqdTdH13t9VvNUbtEo3woO1z8SsWrbx4rXVtO7n0SA8WEqAOk1kU0qSHyPR2cvQFl3ioXrkc.ynlz_X9_yAMm7ANEiBSM9vINTlhzpwO1_GCvu-p3IV8&dib_tag=se&keywords=ITALTRONIC&qid=1743921705&sr=8-245&xpid=2Snw12TGMssng
* https://www.amazon.fr/11-109L057-Bo%C3%AEtier-pour-tableaux-48mm/dp/B0CJSKVFL6/ref=sr_1_254?dib=eyJ2IjoiMSJ9.f4ijeubyiMIxqtzAqpy3XwGM7N-SYgrXx8uZODzPuzKS3pL-Rplj8kgFf8kAmMCz9bAthlW9fQ_mO6rLxHGXHhw0l_DeEIK5MvzdOelrYTZh_IirGMcaaxJt_32rfgoF6XQ2g2o93moJOiqKgy3EnOTNLh0svvleBJ7hzs59iX42RtQ8oy7jHreQsx-k6AFcOW6bwn_1U5PNdHFIh4hegj-bpXN6SNOmcDGgCSDTil2XYU-b4uiTyl85h3CpnYuNf7qPH8tnEjuqxRmViJTuIbgnJfyEyR2SS56bfeqUwm0.g-uP_Lh1ECNhZ4cFpERlThf1udwflcP08o4bLZxAmew&dib_tag=se&keywords=ITALTRONIC&qid=1743921705&sr=8-254&xpid=2Snw12TGMssng
* https://www.amazon.fr/16-211L057-Enclosure-panel-polypropylene-ITALTRONIC/dp/B07FS489N5/ref=sr_1_258?dib=eyJ2IjoiMSJ9.f4ijeubyiMIxqtzAqpy3XwGM7N-SYgrXx8uZODzPuzKS3pL-Rplj8kgFf8kAmMCz9bAthlW9fQ_mO6rLxHGXHhw0l_DeEIK5MvzdOelrYTZh_IirGMcaaxJt_32rfgoF6XQ2g2o93moJOiqKgy3EnOTNLh0svvleBJ7hzs59iX42RtQ8oy7jHreQsx-k6AFcOW6bwn_1U5PNdHFIh4hegj-bpXN6SNOmcDGgCSDTil2XYU-b4uiTyl85h3CpnYuNf7qPH8tnEjuqxRmViJTuIbgnJfyEyR2SS56bfeqUwm0.g-uP_Lh1ECNhZ4cFpERlThf1udwflcP08o4bLZxAmew&dib_tag=se&keywords=ITALTRONIC&qid=1743921705&sr=8-258&xpid=2Snw12TGMssng
* https://www.amazon.fr/12-0000010-Enclosure-junction-X44-5mm-ITALTRONIC/dp/B0764B5LNK/ref=sr_1_269?dib=eyJ2IjoiMSJ9.f4ijeubyiMIxqtzAqpy3XwGM7N-SYgrXx8uZODzPuzKS3pL-Rplj8kgFf8kAmMCz9bAthlW9fQ_mO6rLxHGXHhw0l_DeEIK5MvzdOelrYTZh_IirGMcaaxJt_32rfgoF6XQ2g2o93moJOiqKgy3EnOTNLh0svvleBJ7hzs59iX42RtQ8oy7jHreQsx-k6AFcOW6bwn_1U5PNdHFIh4hegj-bpXN6SNOmcDGgCSDTil2XYU-b4uiTyl85h3CpnYuNf7qPH8tnEjuqxRmViJTuIbgnJfyEyR2SS56bfeqUwm0.g-uP_Lh1ECNhZ4cFpERlThf1udwflcP08o4bLZxAmew&dib_tag=se&keywords=ITALTRONIC&qid=1743921705&sr=8-269&xpid=2Snw12TGMssng
* https://www.amazon.fr/12-0200007-Enclosure-junction-X44-5mm-ITALTRONIC/dp/B07646Z6P7/ref=sr_1_270?dib=eyJ2IjoiMSJ9.f4ijeubyiMIxqtzAqpy3XwGM7N-SYgrXx8uZODzPuzKS3pL-Rplj8kgFf8kAmMCz9bAthlW9fQ_mO6rLxHGXHhw0l_DeEIK5MvzdOelrYTZh_IirGMcaaxJt_32rfgoF6XQ2g2o93moJOiqKgy3EnOTNLh0svvleBJ7hzs59iX42RtQ8oy7jHreQsx-k6AFcOW6bwn_1U5PNdHFIh4hegj-bpXN6SNOmcDGgCSDTil2XYU-b4uiTyl85h3CpnYuNf7qPH8tnEjuqxRmViJTuIbgnJfyEyR2SS56bfeqUwm0.g-uP_Lh1ECNhZ4cFpERlThf1udwflcP08o4bLZxAmew&dib_tag=se&keywords=ITALTRONIC&qid=1743921705&sr=8-270&xpid=2Snw12TGMssng

## Composantes

* [Boitier](https://www.amazon.fr/bo%C3%AEtiers-pour-carte-module-ESP32/dp/B0DTPZLJMF/ref=sr_1_12?crid=TYFG18CZ1NPZ&dib=eyJ2IjoiMSJ9.kz5pG2qbTDYzFQfvPiB94hHqKdy9v1PHh6z9cQn2qHLxQZAO7k1bErkH97OWBpCt9JYhTAi5epYSM4QWvaDfPFl2RP0DTNvomffd7nvWx7N8_M59S41xYQizH3Tmu0y71a9YLwN5Cdv3lNqoiG-cRP4LoXCS1Xfa-vwl6rzF5bpnBADTFosFNtze__h2BoiK-AhheI1S6TWNJ56rvV8ePo5Z4gaY3Xr-09-z_t2AEbS7zYAdV2fmVCNY-jn1EMK8Rd9sCK80xgSuEQt-7X7GhMJ-yZKtdsTVv-3VxYUi6nE.vaWd3DN__0IsNkZgtC6649nI_GtVXcdTXgURuMswvJQ&dib_tag=se&keywords=boitier+esp32&qid=1743922062&sprefix=boitier+es%2Caps%2C178&sr=8-12)
* [Boitier](https://www.amazon.fr/coques-pour-module-ESP32-LoRa/dp/B0DTHVYMGJ/ref=sr_1_27?crid=TYFG18CZ1NPZ&dib=eyJ2IjoiMSJ9.kz5pG2qbTDYzFQfvPiB94hHqKdy9v1PHh6z9cQn2qHLxQZAO7k1bErkH97OWBpCt9JYhTAi5epYSM4QWvaDfPFl2RP0DTNvomffd7nvWx7N8_M59S41xYQizH3Tmu0y71a9YLwN5Cdv3lNqoiG-cRP4LoXCS1Xfa-vwl6rzF5bpnBADTFosFNtze__h2BoiK-AhheI1S6TWNJ56rvV8ePo5Z4gaY3Xr-09-z_t2AEbS7zYAdV2fmVCNY-jn1EMK8Rd9sCK80xgSuEQt-7X7GhMJ-yZKtdsTVv-3VxYUi6nE.vaWd3DN__0IsNkZgtC6649nI_GtVXcdTXgURuMswvJQ&dib_tag=se&keywords=boitier+esp32&qid=1743922062&sprefix=boitier+es%2Caps%2C178&sr=8-27)
* [Boitier](https://www.amazon.fr/bo%C3%AEtiers-appareils-carte-module-ESP32/dp/B0DTPSV5FT/ref=sr_1_30?crid=TYFG18CZ1NPZ&dib=eyJ2IjoiMSJ9.kz5pG2qbTDYzFQfvPiB94hHqKdy9v1PHh6z9cQn2qHLxQZAO7k1bErkH97OWBpCt9JYhTAi5epYSM4QWvaDfPFl2RP0DTNvomffd7nvWx7N8_M59S41xYQizH3Tmu0y71a9YLwN5Cdv3lNqoiG-cRP4LoXCS1Xfa-vwl6rzF5bpnBADTFosFNtze__h2BoiK-AhheI1S6TWNJ56rvV8ePo5Z4gaY3Xr-09-z_t2AEbS7zYAdV2fmVCNY-jn1EMK8Rd9sCK80xgSuEQt-7X7GhMJ-yZKtdsTVv-3VxYUi6nE.vaWd3DN__0IsNkZgtC6649nI_GtVXcdTXgURuMswvJQ&dib_tag=se&keywords=boitier+esp32&qid=1743922062&sprefix=boitier+es%2Caps%2C178&sr=8-30) 
* [Boitier](https://www.amazon.fr/12-0000006-Enclosure-junction-X44-5mm-ITALTRONIC/dp/B0763Z9GYF/ref=sr_1_222?dib=eyJ2IjoiMSJ9.iFQ-vigCZqZhOTQMFtZhsUjn3dFz5Xlk6dMxNlxhK1tT8zhkURGH6Zp-9A7PDombGDh6VsAyE2yG-IBjET2gRvC0frxUv-4VUeZjHaSPUk9hHdoJgB8KPwMaeVC2ML7NDz61oL-CjiXIP3-W6iCX9R1iDUOGJJmUS-6TpnV9-61Xyl_SnbzRNWc6n3lQ8EADrg9yECrSsOaxzYLgyTUIQWIGNqOYDekTyaHI81a1qiYFBRqaJA8Pf0UC0FgH9Qae13_kstjWr8sE8WDO_j7O_8_Fu5cNoywayvoQmz_NhMQ.49wZUVelMA6NfxNKuruDDvEbHsWeDm82if06B4IRovg&dib_tag=se&keywords=ITALTRONIC&qid=1743921685&sr=8-222&xpid=2Snw12TGMssng)
* [Boitier](https://www.amazon.fr/12-0000004-Enclosure-junction-mount-ITALTRONIC/dp/B07NYBGSJP/ref=sr_1_227?dib=eyJ2IjoiMSJ9.iFQ-vigCZqZhOTQMFtZhsUjn3dFz5Xlk6dMxNlxhK1tT8zhkURGH6Zp-9A7PDombGDh6VsAyE2yG-IBjET2gRvC0frxUv-4VUeZjHaSPUk9hHdoJgB8KPwMaeVC2ML7NDz61oL-CjiXIP3-W6iCX9R1iDUOGJJmUS-6TpnV9-61Xyl_SnbzRNWc6n3lQ8EADrg9yECrSsOaxzYLgyTUIQWIGNqOYDekTyaHI81a1qiYFBRqaJA8Pf0UC0FgH9Qae13_kstjWr8sE8WDO_j7O_8_Fu5cNoywayvoQmz_NhMQ.49wZUVelMA6NfxNKuruDDvEbHsWeDm82if06B4IRovg&dib_tag=se&keywords=ITALTRONIC&qid=1743921685&sr=8-227&xpid=2Snw12TGMssng)
* [Ecran](https://www.amazon.fr/Binghe-d%C3%A9veloppement-Intelligent-Connectivit%C3%A9-Compatible/dp/B0CWTNLB1B/ref=sr_1_6?crid=VKYXLOYLJMKS&dib=eyJ2IjoiMSJ9.wTvSoCz8Ztrot43czcXUJ0UXINjHGNWD5afgvB9tB7RPTolP2e8Z75Pfbzta7Bwfc02AtU9CiSLBPzteJXOg-wLKHdF7x81cPptvMKzXeTo4FIwslt5kYtVbs1h78O8_-E5avzx_wVFFNOdKgeWyrprrDqS91zRwy1k_OwmALOGc8qlVx7JC8vnWlimNmtnuyCPrHtY1a2-5o4mJj1gFn1Vjwd3J8qWEDCw2jO3Q4JCdYVvorLg-q4f3vO6k0517O9bRL-CrqJwj6gr3BfTyqa8UF5hlKjPlL8i325Mr_JU.gCQeTB1uWBh2n27fakBgsMzKJzsYi8hF9d5f149ru1k&dib_tag=se&keywords=esp32+ecran+tactile&qid=1743922472&sprefix=esp32+%2Caps%2C244&sr=8-6)
-----

## RS485 avec adresse

Chaque ESP32 esclave :

- Écoute sur le bus série (via MAX485)
- Vérifie si le message est pour lui (via l'adresse)
- Répond si l’adresse correspond

Câblage (RS485 via MAX485)

- A <-> A
- B <-> B
- GND <-> GND

Code minimal

```txt
[START][ADDR][CMD][DATA][CRC][END]
```

exemple de code

```txt
[START][ADDR][CMD][DATA][CRC][END]
```

- ```0xAA``` → start
- ```0x01``` → adresse module 1
- ```0x10``` → commande "allumer relais"
- ```0x00``` → pas de données
- ```CRC``` → somme de contrôle
- ```0xFF``` → end

## Exemple de code coté arduino

```cpp
#define MY_ADDR 0x02

void loop() {
  if (Serial.available()) {
    if (Serial.read() == 0xAA) { // Start
      byte addr = Serial.read();
      if (addr == MY_ADDR) {
        byte cmd = Serial.read();
        if (cmd == 0x10) {
          digitalWrite(RELAIS_PIN, HIGH); // Allume relais
        }
      }
    }
  }
}
```
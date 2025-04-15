# [Protections](readme.md)

## Description

## Protections contre les courts circuits

* Utiliser un fusible réarmable (PTC) sur l’alim de chaque module (5V ou 3.3V)
* Ajouter une résistance série faible (10–22 Ω) sur les lignes A et B
* Prévoir un driver RS485 avec protection interne 

```text
[Alim 5V] --- [PTC Fuse] --- VCC module

RS485_A  --- [10Ω] --- MAX485_A
RS485_B  --- [10Ω] --- MAX485_B
```

## Protection contre les surtensions / ESD

| Protection | Rôle | À mettre entre... |
| :-- | :-- | :-- |
| TVS Diode (SM712, PESD1CAN...) | Clampe les pics transitoires | Entre A/B et GND |
| Varistor | Absorbe surtensions prolongées | Entre A-B, A-GND, B-GND |
| Ferrite bead | Filtre les interférences EMI | En série sur A/B |
| Condensateurs 100nF | Filtrent les parasites haute fréquence | Vers GND |

```text
          RS485_A o---[10Ω]---+---[TVS diode]--- GND
                             |
                         MAX485_A

          RS485_B o---[10Ω]---+---[TVS diode]--- GND
                             |
                         MAX485_B
```

## Protection contre les inversions de polarité

* Le bus RS485 est différentiel, mais certains modules crashent si on inverse A/B
* Solution simple : prévoir un switch de sélection de polarité (ou jumper)
* Ou coder un auto-scan au démarrage si pas de réponse → tester inversion

## Protection de l'alimentation

Si tu partages l’alim 5V sur tout le bus :

* Mettre une diode Schottky pour éviter retour de courant
* Utiliser un buck ou LDO local si la ligne est longue
* Ajoute un PTC par module et un condensateur 100µF + 100nF par carte

## Résistances de terminaison et pull-up/pull-down

Obligatoire pour éviter les réflexions parasites :

| Type | Où ? | Valeur |
| :-- | :-- | :-- |
| Terminaison | Aux 2 extrémités du bus | 120 Ω entre A et B |
| Pull-up / Pull-down | Optionnel au maître | 680 Ω A → VCC, B → GND |

## Résumé : check-list de protection RS485

Par module :

* [ ] 10–22 Ω sur A/B
* [ ] TVS diode ou varistor
* [ ] Fusible réarmable PTC sur l’alim
* [ ] Condensateurs de découplage (100nF + 10µF)
* [ ] Résistance de terminaison si aux extrémités

En bonus :

* [ ] Inversion A/B tolérée
* [ ] LED de diagnostic communication
* [ ] Shielding si câble long ou exposé

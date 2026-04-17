# [Galaxy Dimension](readme.md)

## Master (Utilisateur Maitre)

### Ajouter un code

`code_maitre` > `ENT` > `42 (Codes)` > `ENT` >

## Accéder au mode installateur

Pour effectuer des modifications sur le fonctionnement du système il faut accéder au mode installateur. Pour y accéder il faut d'abord l'activer.

1. Activer le mode  
    `code_maitre` > `ENT` > `48 (Accès installateur)` > `ENT` > `ENT` > `1` > `ENT` > `ESC` > `ESC` > `ESC`

2. Entrer dans le mode  
    `112233` > `ENT`

## Sortir du mode installateur

`112233` > `ESC`  

Le système va passer en autocontrole et vérifier toute l'installation :

- Si le système ne présente aucun défaut le mode sera quitté
- S'il y a un défaut le système restera dans ce mode

Le mode sera désactivé automatiquement si un code utilisateur est utilisé.

## Changer de langue

En mode installateur :

`51` > `17` > `3`

## Programmation de zone

En mode installateur :

``52 (Programmation entrées)`` > Zones

| Entree | Numero | champ |
| :-- | :-: | :-- |
| Finale | 01 | champ |
| Intrusion | 03 | champ |
| Panique | 13 | champ |
| Libre | 18 | champ |
| Incendie | 19 | champ |

Exemple : 3005

- 3 = numéro de ligne de la centrale
- 05 = adresse rio
- 7 = zone sur le rio

## RIO

| Centrale | Adresses |
| :-- | :-: |
| GD-48 | 2-5 |
| GD-520 | 1-9 et A-F |

## Exclure la ligne téléphonique

En mode installateur :

``56 (Communications)`` -> ``10 (Défaut de ligne / line fail)``

Désactiver 1, 2 et 3

## Tempo de sortie

``51 (Paramètres)`` -> ``04 (Tempo de sortie)`` -> 20 -> ``ENT``

## Tempo d'entrée

``51 (Paramètres)`` -> ``05 (Tempo d'entrée')`` -> 20 -> ``ENT``

## Menus

| Menu | Description |
| :-- | :-- |
| 11 | Exclusion de zone |
| 21 | Afficher zones |
| 22 | Historique |
| 32 | Test de sorties |
| 41 | Date et heure |
| 42 | Codes |
| 47 | Acces Distant |
| 48 | Accès installateur |
| 41 | Date et heure |
| 52 | Programmation de zone |
| 52 | Programmation de sorties |
| 56 | Communications |
| 65 | Programme hebdomadaire |

[galaxy](galaxy_search.md)

## Utilisateurs

### Activer le système

En généra il suffit de faire :

``code`` + ``A``

S'il y a des groupes dans le système :

``code`` + ``A`` + (le numéro des groupe) + ``ENT``

### Désactiver le système

``code`` + ``ENT``

### Isoler une zone

``code`` + ``ENT``  > ``11``  
Sélectionnez une zone puis appuyez sur ``#`` pour l'isoler ou le réactiver

## Clavier /  Voyant d'alimentation

Le voyant d'alimentation vert reste allumé lorsque le clavier est connecté à une alimentation secteur. Une panne de courant est indiquée par un clignotement lent du voyant. Le voyant clignote rapidement si la batterie est faible.tage tombe en dessous du seuil minimum ou si l'un des fusibles du PCB du panneau de commande saute.

## Codes

| Utilisateur | Code par défaut |
| :-- | :-: |
| Installateur | 112233 |
| Utilisateur distant | 543210 |
| Manager maître | 12345 |
| Autorisation | 54321 |

## Adresses

| Périphérique | Ligne | GD-48 | GD-520 |
| :-- | :-: | :-: | :-: |
| Clavier | 1 <br> 2 <br> 3-4 | 2-5 <br> - <br> - <br> | 2-9, B-F <br> 0-9, F <br> 0-6, F |
| RIO / Alim |  1 <br> 2 <br> 3-4 | 2-5 <br> - <br> - <br> | 2-9, A-F <br> 0-9, A-F <br> 0-9, A-F <br> |
| Ethernet | 1 | B | B |

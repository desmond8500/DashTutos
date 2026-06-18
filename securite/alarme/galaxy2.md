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


## Codes

| Utilisateur | Code par défaut |
| :-- | :-: |
| Installateur | 112233 |
| Utilisateur distant | 543210 |
| Manager maître | 12345 |
| Autorisation | 54321 |

## Mise en réseau

En mode installateur

1. 56 (Communications)
2. 4 (Ethernet)
3. 01 (Config Module)
   1. Adresse IP
   2. Nom
   3. Passerelle
   4. Masque
4. 02 (Report d'alarme)
   1. 02 (IP Primaire)
      1. Adresse IP = 0
      2. Port 0 
   2. 03 (IP Secondaire)
      1. Adresse IP = 0
      2. Port = 0
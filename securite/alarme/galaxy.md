# [Galaxy Dimension](readme.md)

## Changer de langue

En mode installateur :

51 puis 17 puis 3

## Programmation de zone

52 (Programmation entrées)

| Entree | Numero | champ |
| :-- | :-- | :-- |
| Finale | 01 | champ |
| Intrusion | 03 | champ |
| Panique | 13 | champ |
| Libre | 18 | champ |
| Incendie | 19 | champ |

Exemple : 3005

* 3 = numéro de ligne de la centrale
* 05 = adresse rio
* 7 = zone sur le rio

## RIO

Adresses valides = 2-5 GD-48
Adresses valides = 1-9 et A-F GD-520



## Exclure la ligne téléphonique

56 (Communications) -> 10 (Défaut de ligne / line fail)

Désacctiver 1 2 et 3

## Tempo de sortie

51 (Paramètres) -> 04 (Tempo de sortie) -> 20 -> ENT

## Tempo d'entrée'

51 (Paramètres) -> 05 (Tempo d'entrée') -> 20 -> ENT

## Menus

| Menu | Description |
| :-- | :-- | :-- |
| 11 | Exclusion de zone |
| 22 | Historique |
| 42 | Codes |
| 47 | Acces Distant |
| 48 | Accès installateur |
| 41 | Date et heure |
| 52 | Programmation de zone |
| 52 | Programmation de sorties |
| 56 | Communications |
| 65 | Programme hebdomadaire |

[galaxy](galaxy_search.md)

## Adresses

| Périphérique | Ligne | GD-48 | GD-520 |
| :-- | :-- | :-- | :-- |
| Clavier | 1 <br> 2 <br> 3-4 | 2-5 <br> - <br> - <br> | 2-9, B-F <br> 0-9, F <br> 0-6, F |
| RIO / Alim |  1 <br> 2 <br> 3-4 | 2-5 <br> - <br> - <br> | 2-9, A-F <br> 0-9, A-F <br> 0-9, A-F <br> |
| Ethernet | 1 | B | B |

## Clavier /  Voyant d'alimentation

Le voyant d'alimentation vert reste allumé lorsque le clavier est connecté à une alimentation secteur. Une panne de courant est indiquée par un clignotement lent du voyant. Le voyant clignote rapidement si la batterie est faible.tage tombe en dessous du seuil minimum ou si l'un des fusibles du PCB du panneau de commande saute.

## Codes

| | Code par ddéfaut |
| :-- | :-- |
| Installateur | 112233 |
| Utilisateur distant | 543210 |
| Manager maître | 12345 |
| Autorisation | 54321 |
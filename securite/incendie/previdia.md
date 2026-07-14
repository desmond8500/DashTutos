# [Previdia](readme.md)

## Codes utilisateurs

| Niveau | Code |
| :-- | :-- |
| Utilisateur | 00001 |
| Super Utilisateur | 00002 |
| Code d'entretien | 00003 |
| Installation | 00004 |

## Identifiant Previdia

| Utilisateur | Identifiant | Mot de passe |
| :-- | :-- | :-- |
| Utilisateur | User | pass |
| Super Utilisateur | UserADV | passadv |
| Programmateur | Admin | admin |

## Site officiel

[Inim](https://www.inim.it/fr/produits/fire-safety/)

## Lecture de boucle

Sur une centrale Previdia Compact, les fonctions Read Address et Enroll ont des rôles différents :

Read Address (Lire l'adresse) : la centrale interroge un détecteur ou un module déjà adressé pour lire son adresse actuelle, son type, son numéro de série et d'autres informations. Cette opération ne modifie rien sur le dispositif. Elle est utile pour vérifier ou identifier un équipement existant.
Enroll (Enrôler / Enregistrer) : la centrale ajoute un nouveau détecteur ou module dans sa configuration. Elle détecte le dispositif présent sur la boucle et l'enregistre dans la base de données de la centrale afin qu'il soit supervisé et utilisé par le système.

En pratique :

Vous remplacez un détecteur déjà configuré et vous voulez simplement vérifier son adresse → Read Address.
Vous installez un nouveau détecteur ou un nouveau module qui n'est pas encore connu de la centrale → Enroll.
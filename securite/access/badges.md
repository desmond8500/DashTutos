# [Badges](readme.md)

## IUD

L’UID d’un tag RFID est analogue à l’adresse MAC pour les cartes réseau Ethernet. Le fabricant de puce le grave en usine au moment de la conception du tag. Il lui attribue un numéro à partir d’une base de données. Ce numéro se trouve sur une partie qui n’est pas réinscriptible*,  il n’est donc pas modifiable.  

* Désormais, il est possible de trouver sur le marché asiatique des tags de type Mifare avec UID modifiables. C’est-à-dire que l’on pourrait y inscrire l’UID d’un tag Mifare existant…

## Mifaire

Chaque carte à puce contient un circuit intégré avec un numéro d’identification permanent unique (UID) gravé pendant le processus de fabrication. Cet UID est souvent appelé le numéro de série de la carte (CSN).  
Le numéro de série de la carte n’est pas crypté, tout lecteur conforme ISO peut lire le numéro de série de la carte.  
Le numéro de série de la carte Mifare est donc l’identifiant unique défini dans la norme ISO 14443-3A.  

A titre d’information, les tags Mifare Classic 1K qui sont les plus répandus, contiennent 64 blocs de données. L’UID est stocké sur le premier secteur (le « bloc 0 ») et les 63 suivants sont dédiés au stockage des données.  

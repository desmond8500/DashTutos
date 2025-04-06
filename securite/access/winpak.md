# [Winpak](readme.md)

## Description

Logiciel de gestion centralisé de controle d'accès de la marque Honeywell.

## Ajouter un controlleur PRO32R2

Si c'est une carte d'extention il faut aller sur le controlleur principal et ajouter un controlleur SIO.

1. Pour ajouter le controlleur dans le poste de controle `configuration > poste de controle
1. Pour ajouter le lese lecteurs dans le poste de controle `configuration > Access ..
1. Fermer et ouvrir les fenêtres

## Installation

Si c'est sur un système windows serveur il faut activer les fonctionalités pour le netframeword 3.5 et les services web pour poursuivre l'installation.

- Il faut aller dans le panneau de configuration
- puis sur activer ou desactiver des fonctionalités
- faire suivant 3 fois
- activer le server web
- net framework 3.5
- puis installer

## Première connexion

- Lancer ```Winpak system Manager```
- aller sur l'```option Option de sécurité RPC```
- cocher ```environment WORKGROUP```
- redemmarer les services
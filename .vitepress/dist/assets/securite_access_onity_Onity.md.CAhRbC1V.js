import{_ as i,c as a,o as l,ae as r}from"./chunks/framework.EaAuVE1v.js";const m=JSON.parse('{"title":"Onity","description":"","frontmatter":{},"headers":[],"relativePath":"securite/access/onity/Onity.md","filePath":"securite/access/onity/Onity.md"}'),n={name:"securite/access/onity/Onity.md"};function o(t,e,s,c,u,d){return l(),a("div",null,e[0]||(e[0]=[r('<h1 id="onity" tabindex="-1"><a href="./readme.html">Onity</a> <a class="header-anchor" href="#onity" aria-label="Permalink to &quot;[Onity](readme.md)&quot;">​</a></h1><h2 id="description" tabindex="-1">Description <a class="header-anchor" href="#description" aria-label="Permalink to &quot;Description&quot;">​</a></h2><p>Il faut utiliser le lien de téléchargement pour avoir la dernière version du logiciel, les licences, docs etc</p><p>Pour la formation nous avons pris la version 2.1 independent (FrontDesk)</p><h2 id="installation-comme-serveur" tabindex="-1">Installation comme serveur <a class="header-anchor" href="#installation-comme-serveur" aria-label="Permalink to &quot;Installation comme serveur&quot;">​</a></h2><ol><li>Choix du type d&#39;installation (station ou serveur) <ol><li>Si on choisi le serveur il faudra : <ol><li>Copier la clé de licence</li><li>le coller dans <em>server_envkey</em></li><li>puis save keys</li><li>puis faire un get d&#39;une licence ou de la prélicence</li></ol></li></ol></li><li>Charger le fichier de licence</li><li>choix de la langue</li><li>Identifiant et mot de passe (le mot de passe c&#39;est les trois derniers mots du lien <em>a4gg6-rv5q2-7ekmo</em> )</li><li>Nouvel organigramme</li></ol><p>Le Firewall peut bloquer l&#39;installation <em>services - onportal - Connexion - compte local - appliquer - redemmarer le service</em></p><h2 id="connexion" tabindex="-1">Connexion <a class="header-anchor" href="#connexion" aria-label="Permalink to &quot;Connexion&quot;">​</a></h2><ul><li>Identifiant: onitytech</li><li>password: a4gg6-rv5q2-7ekmo</li></ul><h2 id="backups" tabindex="-1">backups <a class="header-anchor" href="#backups" aria-label="Permalink to &quot;backups&quot;">​</a></h2><p>Le logiciel fait des sauvegardes de l&#39;installation en cours dans un dossier du pc <em>D:\\Onity\\OnPortal\\FrontDeskClient\\Backup</em></p><h2 id="configuration-des-chambres" tabindex="-1">Configuration des chambres <a class="header-anchor" href="#configuration-des-chambres" aria-label="Permalink to &quot;Configuration des chambres&quot;">​</a></h2><p>Menu / Organigramme</p><ol><li>Table Horaire <ol><li>Ajouter</li><li>Nommer puis sauvegarder (Par défaut c&#39;est H24)</li></ol></li><li>Type de passe <ol><li>Ajouter</li><li>Nom et description</li></ol></li><li>Profil Serrure <ol><li>activer carte de programmation</li><li>aciver l&#39;ouverture avec la privacité</li><li>Chambres <ol><li>Créer les chambres</li></ol></li><li>Organigramme <ol><li>Choisir le type de cartes qui ont accès à la chambre</li></ol></li></ol></li></ol><ul><li><em>Carte programmation</em> permet de programmer des cartes manuellement</li><li><em>Show low battery</em> n&#39;est pas activé pour les hotels</li><li><em>Privacité</em> à activer pour les chambres</li></ul><h2 id="type-de-chambre" tabindex="-1">Type de chambre <a class="header-anchor" href="#type-de-chambre" aria-label="Permalink to &quot;Type de chambre&quot;">​</a></h2><ul><li>Chambre</li><li>Foyer = tout le monde avec une carte valide a accès</li><li>Selective = on peut selectionner les portes <ul><li>un menu carte autaurisés apparait</li><li>on selectionne les chambres ou les profils</li></ul></li><li>Suite</li><li>En lien</li><li>Groupe de suite</li></ul><h2 id="finlaisation-de-la-configuration" tabindex="-1">Finlaisation de la configuration <a class="header-anchor" href="#finlaisation-de-la-configuration" aria-label="Permalink to &quot;Finlaisation de la configuration&quot;">​</a></h2><ol><li>Menu orgnigramme</li><li>Terminer</li><li>Donner le nombre de serrures finaux prévus</li><li>On finalise une seule fois sauf si le nombre prévisionnel est dépassé.</li></ol><h2 id="ajouter-un-encodeur" tabindex="-1">Ajouter un encodeur <a class="header-anchor" href="#ajouter-un-encodeur" aria-label="Permalink to &quot;Ajouter un encodeur&quot;">​</a></h2><ol><li>Menu configuration</li><li>Scanner</li></ol><h2 id="ajouter-des-cartes" tabindex="-1">Ajouter des cartes <a class="header-anchor" href="#ajouter-des-cartes" aria-label="Permalink to &quot;Ajouter des cartes&quot;">​</a></h2><ul><li>Le checkin ecrase les cartes précédentes</li></ul><h2 id="desinstaller-et-reinstaller-onportal" tabindex="-1">Désinstaller et reinstaller Onportal <a class="header-anchor" href="#desinstaller-et-reinstaller-onportal" aria-label="Permalink to &quot;Désinstaller et reinstaller Onportal&quot;">​</a></h2><p>Dans le dossier onPortal lancer le fichier <em>PostUnistallCleanup</em> puis relancer le service onPortal</p><h2 id="connexion-en-tant-que-client" tabindex="-1">Connexion en tant que client <a class="header-anchor" href="#connexion-en-tant-que-client" aria-label="Permalink to &quot;Connexion en tant que client&quot;">​</a></h2><ul><li>Identifiant / password / nom du serveur / numéro de port</li></ul><h2 id="initiamlisation-de-serrure" tabindex="-1">Initiamlisation de serrure <a class="header-anchor" href="#initiamlisation-de-serrure" aria-label="Permalink to &quot;Initiamlisation de serrure&quot;">​</a></h2><ol><li>Maintenance</li><li>Intilisation</li><li>Choisir une serrure</li><li>Initialiser</li></ol><h2 id="roles" tabindex="-1">Roles <a class="header-anchor" href="#roles" aria-label="Permalink to &quot;Roles&quot;">​</a></h2><ol><li>Security</li></ol><p>Lorsqu&#39;on annule une carte staff et qu&#39;on en crée une autre toutes les cartes du profils seront inactive</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><ul><li><a href="https://www.onity.net/portal/35/a4gg6-rv5q2-7ekmo" target="_blank" rel="noreferrer">Lien de téléchargement</a></li></ul><h2 id="onity-flasher" tabindex="-1">Onity Flasher <a class="header-anchor" href="#onity-flasher" aria-label="Permalink to &quot;Onity Flasher&quot;">​</a></h2><ol><li>Arreter le service onportal</li><li>Dans le dossier front desk client</li></ol>',36)]))}const p=i(n,[["render",o]]);export{m as __pageData,p as default};

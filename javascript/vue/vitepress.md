# [Vitepress](readme.md)

## Description

## Installation

```bash
npm add -D vitepress
```

```bash
npx vitepress init
```

## Déploiement sur Netlify

Il faut ajouter vitepress au projet.

```bash
npm install vitepress --save-dev
```

## Configuration de déploiement

| Line | Content |
| :-- | :-- |
| Runtime | Not set |
| Base directory | / |
| Build command | yarn docs:build |
| Publish directory | /.vitepress/dist |
| Functions directory | /netlify/functions |
| Deploy log visibility | Logs are public |
| Build status | Active |

## Importer du code

```markdown
<<< @/javascript/angular/themes/theme.md
```

## Importer in fichier

```markdown
<!--@include: themes/theme.md-->
```
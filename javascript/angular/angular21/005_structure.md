# [Structure de projet](readme.md)

## Description

 ```html
 src/
│
├── app/
│   ├── core/
│   │   ├── services/
│   │   ├── guards/
│   │   ├── interceptors/
│   │   ├── models/
│   │   └── core.providers.ts
│   │
│   ├── shared/
│   │   ├── components/
│   │   │   ├── button/
│   │   │   ├── table/
│   │   │   ├── dialog/
│   │   │   └── navbar/
│   │   │
│   │   ├── directives/
│   │   ├── pipes/
│   │   └── shared.providers.ts
│   │
│   ├── layout/
│   │   ├── main-layout/
│   │   ├── auth-layout/
│   │   └── sidebar/
│   │
│   ├── features/
│   │   ├── auth/
│   │   │   ├── pages/
│   │   │   ├── services/
│   │   │   └── auth.routes.ts
│   │   │
│   │   ├── dashboard/
│   │   │   ├── pages/
│   │   │   ├── components/
│   │   │   └── dashboard.routes.ts
│   │   │
│   │   ├── users/
│   │   │   ├── pages/
│   │   │   ├── components/
│   │   │   ├── services/
│   │   │   └── users.routes.ts
│   │   │
│   │   └── settings/
│   │       ├── pages/
│   │       └── settings.routes.ts
│   │
│   ├── app.routes.ts
│   ├── app.config.ts
│   └── app.component.ts
│
├── assets/
│   ├── images/
│   ├── icons/
│   └── styles/
│       ├── variables.scss
│       ├── theme.scss
│       └── prime-overrides.scss
│
├── environments/
│   ├── environment.ts
│   └── environment.prod.ts
│
├── styles.scss
└── main.tsdz
 ```
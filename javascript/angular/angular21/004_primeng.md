# [PrimeNG](readme.md)

## Description

## Installation

```console
npm install primeng @primeng/themes primeicons
```

Dans le fichier ``app.config.ts``

```ts
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync()
  ]
};
```

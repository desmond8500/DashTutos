# [HTTP Client](readme.md)

## Requettes http

[Source](https://angular.fr/http/client.html)

::: code-group

```ts [app.config.ts]
import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient()
  ]
};
```

```ts [user.ts]
// @filename: user.interface.ts
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

// @filename: user.service.ts
// ---cut---
import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { User } from './user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient);
  private users = signal<User[]>([])
  readonly url = 'https://jsonplaceholder.typicode.com/users';

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url).pipe(
      tap(users => this.users.set(users))
    );
  }
}
```

:::

 

# [Modèles](readme.md)

## Pagination

::: code-group

```html [page.html]
<app-pagination 
    [page]="page" 
    [lastPage]="lastPage" 
    (changePage)="changePage($event)"
    >

</app-pagination>
```

```javascript [page.ts]
// Pagination
  page = 1;
  lastPage = 1;
  changePage(page: number) {
    if (page >= 1 && page <= this.lastPage) {
      this.page = page;
      this.getArticles();
    }
  }
```

```html [pagination.html]
<div class="pagination">
    <div>
      <ion-button size="small"
        (click)="previousPage()"
        [disabled]="page() === 1">
      Précédent
    </ion-button>

    @if(page() > 1) {
      <ion-button size="small" color="primary"> 1 </ion-button>
    }
    <ion-button size="small" color="medium"> {{ page() }} </ion-button>
    @if (lastPage() > page()) {
      <ion-button color="primary" size="small"> {{ lastPage() }} </ion-button>
    }
    <ion-button size="small"
      (click)="nextPage()"
      [disabled]="page === lastPage()">
      Suivant
    </ion-button>
  </div>

</div>
```

```javascript [pagination.ts]
  page:any = input()
  lastPage:any = input()
  changePage:any = output()

  constructor() { }

  ngOnInit() {}

  nextPage(){
    this.changePage.emit(this.page()+1)
  }
  previousPage(){
    this.changePage.emit(this.page()-1)
  }
```

:::

## Header


::: code-group

```html [header.html]
<ion-header>
  <ion-toolbar color="secondary">
    <ion-buttons slot="start">
      <ion-button routerLink="/">
        <ion-menu-button auto-hide="false"></ion-menu-button>
      </ion-button>
    </ion-buttons>

    <ion-title>{{ title.toLocaleUpperCase() }}</ion-title>

    <ion-buttons slot="end">
      @if (back) {
        <ion-button [routerLink]="back">
          <ion-icon name="arrow-back"></ion-icon>
        </ion-button>
      }
    </ion-buttons>

  </ion-toolbar>
</ion-header>

```

```ts [header.ts]
@Input() title: string = '';
@Input() back: string = '/';

  _main = inject(MainService)
  network = this._main

  constructor() {
    addIcons({ arrowBack });
  }
```

:::

 

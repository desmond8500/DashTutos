# [Spinner](readme.md)

## Description

Afficher la page une fois que les données sont chargées.

## Code

```ts
import { LoadingController } from '@ionic/angular/standalone';

export class Page implements OnInit {
  loadingCtrl = inject(LoadingController);

  async getArticles() {
    const loading = await this.loadingCtrl.create({
      message: 'Recherche en cours...',
      spinner: 'crescent',
    });

    await loading.present();

    this._article.getArticles('', this.page).subscribe({
      next: (res: any) => {
        this.articles = res.data;
      },
      error: (error: any) => console.log(error),
    });
  }

}

```

# [Composants](readme.md)

## Description

## Pagination

::: code-group

```html [pagination.html]
<div class="d-flex justify-content-between">

  <div>
    {{ pagination().items }} {{ items() }}
  </div>

  <ul class="pagination pagination-outline ">

    <!-- First page -->
    <li class="page-item">
      <a class="page-link" (click)="navigate(1)">
        <i class="ti ti-chevrons-left"></i>
      </a>
    </li>

    <!-- Previous page -->
    @if(pagination()?.prev){
      <li class="page-item">
        <a class="page-link"  tabindex="-1" (click)="navigate(pagination()?.prev)">
          <i class="ti ti-chevron-left"></i>
        </a>
      </li>
    }

    <!-- Previous page -->
    @if(pagination()?.prev){
      <li class="page-item">
        <a class="page-link"  (click)="navigate(pagination()?.prev)">
          {{ pagination()?.prev }}
        </a>
      </li>
    }

    <!-- Current page -->
    <li class="page-item active">
      <a class="page-link"  (click)="navigate(page)">
        {{ page }}
      </a>
    </li>

    <!-- Next page -->
    @if(pagination()?.next){
      <li class="page-item">
        <a class="page-link"  (click)="navigate(pagination()?.next)">
          {{ pagination()?.next }}
        </a>
      </li>
    }


    <!-- Next page -->
    @if(pagination()?.next){
      <li class="page-item">
        <a class="page-link"  (click)="navigate(pagination()?.next)">
          <i class="ti ti-chevron-right"></i>
        </a>
      </li>
    }

    <!-- Last page -->
    <li class="page-item">
      <a class="page-link" (click)="navigate(pagination()?.last)">
        <i class="ti ti-chevrons-right"></i>
      </a>
    </li>

  </ul>

</div>

```

```ts [Pagination.ts]
 pagination = input<any>();
  items = input<any>('Images');
  @Input() page: any;
  event = output();

  navigate(page: any) {
    this.event.emit(page);
    this.page = page;
  }
```

:::

Utilisation

```html
<div>
    <app-pagination [pagination]="pagination" [page]="page"     A1model='Images' (event)="navigate($event)"></app-pagination>
  </div>
```

## Navbar


import { Component } from '@angular/core';
import { Product } from '../domain/product';
import { ProductService } from '../service/productservice';

@Component({
  selector: 'data-view-basic-demo',
  templateUrl: './data-view-basic-demo.component.html'
})
export class DataViewBasicDemoComponent {
  products!: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().then((data) => (this.products = data.slice(0, 5)));
  }

  getSeverity (product: any) {
    switch (product.inventoryStatus) {
      case 'INSTOCK':
        return 'success';

      case 'LOWSTOCK':
        return 'warning';

      case 'OUTOFSTOCK':
        return 'danger';

      default:
        return undefined;
    }
  };
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, SubscriptionLike } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  /*
  title: string = 'my shop';
  age: number = 20;

  isvVerify: boolean = true;

  names: string[] = ['gildas', 'jules'];
  ages: number[] = [10, 20];

  date: Date = new Date();
  */

  /*
  product: object[] = [
    {
      name: 'robe',
      description: 'joli roble',
      price: 12.99,
      regular_price: 18.99,
      isSolded: false,
    },
    {
      name: 'robe',
      description: 'joli roble',
      price: 12.99,
      regular_price: 18.99,
      isSolded: false,
    },
  ];

  test: any[] = [23, 'yann'];

   getNumber(): number {
    return 3;
  }
*/

  /*
  products: Product[] = [
    {
      name: 'robe pour femme',
      description: 'super elegante et tres confortable',
      category: ['robe rouge'],
      solde_price: 18.99,
      regular_price: 25.99,
      imageurl: '',
      created_at: new Date(),
    },
  ]; */

  products: Product[] = [];

  isDisplayModal: boolean = false;
  modalProduct: Product | undefined;
  ProductsSub: Subscription | undefined;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.ProductsSub = this.productService.getProducts().subscribe();
    next: (products: Product[]) => {
      this.products = products;
    };
    error: (error: any) => {
      console.log('error', error);
    };
    complete: () => {
      console.log('complete');
    };
    // this.products = this.productService.getProducts();
    //  this.products = [];

    console.log(this.products);
  }

  ngOnDestroy() {
    this.ProductsSub?.unsubscribe();
  }

  handleDeleteProduct(product: Product) {
    this.products = this.products.filter((p) => p._id !== product._id);

    //console.log('handleDeleteProduct', product);
  }
  handleDisplayProductViewModal(product: Product) {
    console.log('---------handleDisplayProductViewModal-------');

    if (product) {
      this.isDisplayModal = true;
      this.modalProduct = product;
    }
  }

  handleCloseModal() {
    this.isDisplayModal = false;
    this.modalProduct = undefined;
  }
}

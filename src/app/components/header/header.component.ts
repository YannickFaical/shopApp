import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  //les observables avec rxjs
  data: Number | undefined;
  second: Number | undefined;
  secondSub: Subscription | undefined;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    /* this.productService.getNumber().subscribe({
      next: (value: Number) => {
        this.data = value;
      },

      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        console.log('complete');
      },
    });
*/
    this.secondSub = this.productService.getSecond().subscribe({
      next: (value: Number) => {
        this.second = value;
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }
  ngOnDestroy(): void {
    this.secondSub?.unsubscribe();
  }
}

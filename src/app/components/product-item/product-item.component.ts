import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  // le composant pere product-list envoi au composant fils product-item donc on utilise Input.

  @Input() product: Product | undefined;

  //on veut transfeer product-item vers son parent immediat product-list
  //EventEmiiter est un class qui permet d'emmettre des evenements  et ses evenements pourront etre ecoutés partout ou on utilise product-item component

  @Output() deleteProductItem: EventEmitter<Product> =
    new EventEmitter<Product>();

  /// un autre output pour afficher les informations sur le modal
  @Output() displayProductViewModal: EventEmitter<Product> =
    new EventEmitter<Product>();

  constructor() {}
  ngOnInit(): void {
    // console.log('------PRODUCT ITEM -----------');
    //console.log(this.product);
  }
  handleClickProduct(product: Product | undefined) {
    //  console.log(product);
    this.displayProductViewModal.emit(product);
  }

  deleteProduct(product: Product | undefined) {
    // console.log(product);
    // this.deleteProductItem.emit(product);
  }
}

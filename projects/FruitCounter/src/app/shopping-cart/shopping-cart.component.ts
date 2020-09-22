import {Component, Input, OnInit} from '@angular/core';
import {Product}                  from '../fruit.service';

@Component({
    selector   : 'app-shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls  : ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
    
    @Input() products: Product[] = [];
    
    constructor() {
    }
    
    ngOnInit(): void {
    }
    
}

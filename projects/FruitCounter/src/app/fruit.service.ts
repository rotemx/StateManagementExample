import {Injectable} from '@angular/core';

export interface Product {
    name: string;
    price: number;
}

@Injectable({
    providedIn: 'root'
})
export class FruitService {
    
    shoppingCart: Product[] = [];
    
    
    constructor() {
    }
}

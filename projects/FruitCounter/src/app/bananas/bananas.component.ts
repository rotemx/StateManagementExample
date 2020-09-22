import { Component, OnInit } from '@angular/core';
import {FruitService}        from '../fruit.service';

@Component({
  selector: 'app-bananas',
  templateUrl: './bananas.component.html',
  styleUrls: ['./bananas.component.css']
})
export class BananasComponent implements OnInit {

  constructor(public fruitService:FruitService) { }

  ngOnInit(): void {
  }

}

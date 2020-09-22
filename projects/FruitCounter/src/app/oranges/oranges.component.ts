import { Component, OnInit } from '@angular/core';
import {FruitService}        from '../fruit.service';

@Component({
  selector: 'app-oranges',
  templateUrl: './oranges.component.html',
  styleUrls: ['./oranges.component.css']
})
export class OrangesComponent implements OnInit {

  constructor(public fruitService:FruitService) { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import {FruitService}        from '../fruit.service';

@Component({
  selector: 'app-apples',
  templateUrl: './apples.component.html',
  styleUrls: ['./apples.component.css']
})
export class ApplesComponent implements OnInit {

  constructor(public fruitService:FruitService) { }

  ngOnInit(): void {
  }

}

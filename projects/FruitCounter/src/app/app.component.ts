import { Component }  from '@angular/core';
import {FruitService} from './fruit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public fruitService:FruitService) {
  }
  title = 'FruitCounter';
}

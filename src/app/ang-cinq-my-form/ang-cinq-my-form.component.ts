import { Component } from '@angular/core';
import { Order } from '../../data/order';
@Component({
  selector: 'app-ang-cinq-my-form',
  templateUrl: './ang-cinq-my-form.component.html',
  styleUrls: ['./ang-cinq-my-form.component.css'],
})
export class AngCinqMyFormComponent {
  model: Order = new Order('', 0, new Date(), '');

  constructor() {}

  onSubmit(): void {
    console.log(this.model);
  }
}

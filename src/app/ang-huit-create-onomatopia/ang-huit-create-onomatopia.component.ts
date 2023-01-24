import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ang-huit-create-onomatopia',
  templateUrl: './ang-huit-create-onomatopia.component.html',
  styleUrls: ['./ang-huit-create-onomatopia.component.css'],
})
export class AngHuitCreateOnomatopiaComponent {
  newOnomatopia: string = '';

  @Output() sendOnomatopiaToParent: EventEmitter<string> = new EventEmitter();

  createOnomatopia(): void {
    this.sendOnomatopiaToParent.emit(this.newOnomatopia);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-ang-huit-affichage',
  templateUrl: './ang-huit-affichage.component.html',
  styleUrls: ['./ang-huit-affichage.component.css'],
})
export class AngHuitAffichageComponent {
  title = 'challenge8-output';

  onomatopoeiaList: string[] = [];

  onReceiveNewOnomatopia(event: string): void {
    this.onomatopoeiaList.push(event);
    console.log(this.onomatopoeiaList);
  }
}

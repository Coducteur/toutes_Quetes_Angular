import { Component } from '@angular/core';

@Component({
  selector: 'app-ang-deux-binding',
  templateUrl: './ang-deux-binding.component.html',
  styleUrls: ['./ang-deux-binding.component.css'],
})
export class AngDeuxBindingComponent {
  user = {
    name: 'Doe',
    firstName: 'John',
    age: 25,
    quote: 'In tartiflette we trust !',
    photo: 'https://randomuser.me/api/portraits/lego/2.jpg',
    bool: false,
  };

  hide() {
    if (this.user.bool === false) {
      this.user.bool = true;
    } else {
      this.user.bool = false;
    }
  }
}

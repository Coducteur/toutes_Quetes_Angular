import { Component } from '@angular/core';

@Component({
  selector: 'app-ang-trois-directives',
  templateUrl: './ang-trois-directives.component.html',
  styleUrls: ['./ang-trois-directives.component.css'],
})
export class AngTroisDirectivesComponent {
  title: string = 'Bonjour à toi correcteur !';
  text: string = 'en vérité je te le dis, le Grid sauvera le monde du web!...';
  text2: string =
    'En attendant, cliquer sur le bouton qui ne sert à rien à gauche ne fera rien. ';
  text3: string =
    'Alors que si tu cliques sur le bouton qui affiche un bouton, ben miracle ça affichera un bouton ! ';
  text4: string =
    "et accessoirement ça change la couleur du titre... Et devine quoi? si tu cliques sur le bouton ''cache le bouton !'', ben ça le cachera !";
  isAdmin: boolean = false;
  textBool: string = 'affiche un bouton !';
  textAdmin: string =
    'Edit (si tu cliques sur ce nouveau bouton, ça le fera disparaitre sous tes yeux ébahis, oooohooo!  :-) ';

  changeBtn() {
    if (this.isAdmin === false) {
      this.isAdmin = true;
      this.textBool = 'cache le bouton !';
    } else {
      this.isAdmin = false;
      this.textBool = 'affiche un bouton !';
    }
  }
  perdu() {}
}

import { Component } from '@angular/core';
import { Developer } from 'src/models/developer.model';
import { Skill } from 'src/models/skill.model';

@Component({
  selector: 'app-ang-sept-developer',
  templateUrl: './ang-sept-developer.component.html',
  styleUrls: ['./ang-sept-developer.component.css'],
})
export class AngSeptDeveloperComponent {
  dev1: Developer = new Developer(
    'Doe',
    'John',
    43,
    'male',
    'in tartiflette he trust',
    [
      new Skill(
        'HTML 5',
        'https://play-lh.googleusercontent.com/85WnuKkqDY4gf6tndeL4_Ng5vgRk7PTfmpI4vHMIosyq6XQ7ZGDXNtYG2s0b09kJMw',
        'https://developer.mozilla.org/fr/docs/Web/HTML'
      ),
      new Skill(
        'CSS 3',
        'https://play-lh.googleusercontent.com/RTAZb9E639F4JBcuBRTPEk9_92I-kaKgBMw4LFxTGhdCQeqWukXh74rTngbQpBVGxqo',
        'https://developer.mozilla.org/fr/docs/Web/CSS'
      ),
      new Skill(
        'JS',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
        'https://developer.mozilla.org/fr/docs/Web/JavaScript'
      ),
      new Skill(
        'TS',
        'https://humancoders-formations.s3.amazonaws.com/uploads/course/logo/230/formation-typescript.png',
        'https://www.typescriptlang.org/'
      ),
      new Skill(
        'Angular',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/800px-Angular_full_color_logo.svg.png',
        'https://angular.io/'
      ),
    ]
  );
}

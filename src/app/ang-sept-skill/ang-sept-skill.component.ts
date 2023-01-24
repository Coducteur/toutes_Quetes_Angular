import { Component, Input } from '@angular/core';
import { Skill } from 'src/data/skill.model';

@Component({
  selector: 'app-ang-sept-skill',
  templateUrl: './ang-sept-skill.component.html',
  styleUrls: ['./ang-sept-skill.component.css'],
})
export class AngSeptSkillComponent {
  @Input() skillDev!: Skill;
}

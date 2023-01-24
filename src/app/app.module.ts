import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngCinqMyFormComponent } from './ang-cinq-my-form/ang-cinq-my-form.component';
import { AngUnComposantComponent } from './ang-un-composant/ang-un-composant.component';
import { AngDeuxBindingComponent } from './ang-deux-binding/ang-deux-binding.component';
import { AngTroisDirectivesComponent } from './ang-trois-directives/ang-trois-directives.component';
import { AngUnBisAffichageComponent } from './ang-un-bis-affichage/ang-un-bis-affichage.component';
import { AngSeptInputComponent } from './ang-sept-input/ang-sept-input.component';
import { AngSeptDeveloperComponent } from './ang-sept-developer/ang-sept-developer.component';
import { AngSeptSkillComponent } from './ang-sept-skill/ang-sept-skill.component';

@NgModule({
  declarations: [
    AppComponent,
    AngCinqMyFormComponent,
    AngUnComposantComponent,
    AngDeuxBindingComponent,
    AngTroisDirectivesComponent,
    AngUnBisAffichageComponent,
    AngSeptInputComponent,
    AngSeptDeveloperComponent,
    AngSeptSkillComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

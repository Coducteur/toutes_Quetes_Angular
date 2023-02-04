import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngUnComposantComponent } from './ang-un-composant/ang-un-composant.component';
import { AngUnBisAffichageComponent } from './ang-un-bis-affichage/ang-un-bis-affichage.component';
import { AngDeuxBindingComponent } from './ang-deux-binding/ang-deux-binding.component';
import { AngTroisDirectivesComponent } from './ang-trois-directives/ang-trois-directives.component';

import { AngCinqMyFormComponent } from './ang-cinq-my-form/ang-cinq-my-form.component';

import { AngSeptInputComponent } from './ang-sept-input/ang-sept-input.component';
import { AngSeptDeveloperComponent } from './ang-sept-developer/ang-sept-developer.component';
import { AngSeptSkillComponent } from './ang-sept-skill/ang-sept-skill.component';
import { AngHuitCreateOnomatopiaComponent } from './ang-huit-create-onomatopia/ang-huit-create-onomatopia.component';
import { AngHuitAffichageComponent } from './ang-huit-affichage/ang-huit-affichage.component';

import { AngDixServicesComponent } from './ang-dix-services/ang-dix-services.component';
import { AngDixCocktailListComponent } from './ang-dix-cocktail-list/ang-dix-cocktail-list.component';
import { AngOnzeServiceBisComponent } from './ang-onze-service-bis/ang-onze-service-bis.component';
import { AngOnzeCocktailListComponent } from './ang-onze-cocktail-list/ang-onze-cocktail-list.component';
import { AngDouzeNasaComponent } from './ang-douze-nasa/ang-douze-nasa.component';

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
    AngHuitCreateOnomatopiaComponent,
    AngHuitAffichageComponent,
    AngDixServicesComponent,
    AngDixCocktailListComponent,
    AngOnzeServiceBisComponent,
    AngOnzeCocktailListComponent,
    AngDouzeNasaComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

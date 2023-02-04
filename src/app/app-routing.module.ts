import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngCinqMyFormComponent } from './ang-cinq-my-form/ang-cinq-my-form.component';
import { AngDeuxBindingComponent } from './ang-deux-binding/ang-deux-binding.component';
import { AngDixServicesComponent } from './ang-dix-services/ang-dix-services.component';
import { AngDouzeNasaComponent } from './ang-douze-nasa/ang-douze-nasa.component';
import { AngHuitAffichageComponent } from './ang-huit-affichage/ang-huit-affichage.component';
import { AngOnzeServiceBisComponent } from './ang-onze-service-bis/ang-onze-service-bis.component';
import { AngSeptInputComponent } from './ang-sept-input/ang-sept-input.component';
import { AngTroisDirectivesComponent } from './ang-trois-directives/ang-trois-directives.component';
import { AngUnBisAffichageComponent } from './ang-un-bis-affichage/ang-un-bis-affichage.component';

const routes: Routes = [
  {
    path: 'composant',
    component: AngUnBisAffichageComponent,
  },
  {
    path: 'Binding',
    component: AngDeuxBindingComponent,
  },
  {
    path: 'directives',
    component: AngTroisDirectivesComponent,
  },
  {
    path: 'formulaire',
    component: AngCinqMyFormComponent,
  },
  {
    path: 'input',
    component: AngSeptInputComponent,
  },
  {
    path: 'output',
    component: AngHuitAffichageComponent,
  },
  {
    path: 'services',
    component: AngDixServicesComponent,
  },
  {
    path: 'services2',
    component: AngOnzeServiceBisComponent,
  },
  {
    path: 'services3_Nasa',
    component: AngDouzeNasaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
// input

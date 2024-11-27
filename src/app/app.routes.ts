import { Routes ,RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AnnouncePageComponent } from './announce-page/announce-page.component';
import { ModelPageComponent } from './model-page/model-page.component';
import { DetailsmodelsPageComponent } from './detailsmodels-page/detailsmodels-page.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },  // redirection vers '/home' lorsque la route est vide
    { path: 'home', component: HomePageComponent },  // route pour la page d'accueil
    { path: 'about', component: AboutPageComponent },  // route pour la page "À propos"
    {path:'contact', component : ContactPageComponent},
    {path:'partnership', component : AnnouncePageComponent},
    {path:'modele', component : ModelPageComponent},
    {path:'details', component : DetailsmodelsPageComponent},
    { path: '**', redirectTo: 'home' },  // redirection vers '/home' lorsque la route est vide
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

  
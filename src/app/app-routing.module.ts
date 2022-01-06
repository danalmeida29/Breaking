import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './Pages/cards/cards.component';
import { HomeComponent } from './Pages/home/home.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'CardsDetalhes', component: CardsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopoComponent } from './Pages/topo/topo.component';
import { CardsComponent } from './Pages/cards/cards.component';
import { DemoMaterialModule } from './material-module';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemoMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

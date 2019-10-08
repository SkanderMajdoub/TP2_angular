import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { TableauComponent } from './tableau/tableau.component';
import { PersonneComponent } from './personne/personne.component';
import { CalculComponent } from './calcul/calcul.component';
import { ProduitComponent } from './produit/produit.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    TableauComponent,
    PersonneComponent,
    CalculComponent,
    ProduitComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NumerosBAComponent } from './components/numeros-ba/numeros-ba.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { OperacionesBaComponent } from './components/operaciones-ba/operaciones-ba.component';

@NgModule({
  declarations: [
    AppComponent,
    NumerosBAComponent,
    NavbarComponent,
    FooterComponent,
    OperacionesBaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

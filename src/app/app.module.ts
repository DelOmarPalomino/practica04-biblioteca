import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaLibrosComponent } from './libros/lista-libros/lista-libros.component';
import { ListaAutoresComponent } from './autores/lista-autores/lista-autores.component';
import { AutoresModule } from './autores/autores.module';
import { LibrosModule } from './libros/libros.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LibrosModule,
    AutoresModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaLibrosComponent } from './libros/lista-libros/lista-libros.component';
import { ListaAutoresComponent } from './autores/lista-autores/lista-autores.component';

const routes: Routes = [

  { path: 'libros', component: ListaLibrosComponent },
  { path: 'autores', component: ListaAutoresComponent },

  { path: '', redirectTo: '/autores', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

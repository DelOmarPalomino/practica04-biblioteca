import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {

  constructor() { }

  getAutores() {
    return [
      { id: 1, nombre: 'Gabriel García Márquez' },
      { id: 2, nombre: 'Julio Cortázar' },
      { id: 3, nombre: 'Cesar Vallejo' },
      { id: 4, nombre: 'Ciro Alegria' },
      { id: 5, nombre: 'Julio Cortázar' },
      { id: 6, nombre: 'Mario Vargas Llosa' },
    ];
  }



}

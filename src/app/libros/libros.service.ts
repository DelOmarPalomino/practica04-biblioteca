import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor() { }

  getLibros() {
    return [
      { id: 1, nombre: 'Cien años de soledad' },
      { id: 2, nombre: 'La sirenita' },
      { id: 3, nombre: 'El principito' },
      { id: 4, nombre: 'El tunel' },
      { id: 5, nombre: 'La casa verde' },
      { id: 6, nombre: 'La iliada' },
    ];
  }


}

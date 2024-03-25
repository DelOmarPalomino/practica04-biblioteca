import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../libros.service';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.css']
})
export class ListaLibrosComponent implements OnInit {

  libros: any[] = [];

  constructor(private librosService: LibrosService) { }

  ngOnInit() {
    this.libros = this.librosService.getLibros();
  }

}

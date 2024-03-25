import { Component, OnInit } from '@angular/core';
import { AutoresService } from '../autores.service';

@Component({
  selector: 'app-lista-autores',
  templateUrl: './lista-autores.component.html',
  styleUrls: ['./lista-autores.component.css']
})
export class ListaAutoresComponent implements OnInit {
  autores: any[] = [];

  constructor(private autoresService: AutoresService) { }

  ngOnInit() {
    this.autores = this.autoresService.getAutores();
  }
}

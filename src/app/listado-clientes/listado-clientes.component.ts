import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit {

  @Input() arrayHija: any = [];

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Problema1';
  // les variables amb les que trevallarem les instanciarem aquí
  nombre: any;
  cif: any;
  direccion: any;
  grupo: any;

  // creem un array
  arrayClientes: any = [];

  // aquest mètode guarda en un array les variables
  guardarCliente() {
    // aquest array guarda les variables
    let arrayCliente = [this.nombre, this.cif, this.direccion, this.grupo];

    // el push afegeix un valor nou al final del array
    this.arrayClientes.push(arrayCliente);
    this.nombre = '';
    this.cif = '';
    this.direccion = '';
  }
}

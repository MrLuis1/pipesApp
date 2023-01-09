import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent {

  ordenarPor = ''
  mayuscula: boolean = true;
  heroes: Heroe[] = [
    {
      nombre: 'superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Aquaman',
      vuela: false,
      color: Color.azul
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde
    },
  ]
  constructor() { }

  cambiar() {
    this.mayuscula = !this.mayuscula;
  }

  cambiarOrden( valor: string ) {
    this.ordenarPor = valor
  }
}

import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {
  
  // ! i18nSelect

  nombre: string = 'Luis';
  genero: string = 'masculino';

  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  cambiarPersona(){
    this.nombre = 'Maria';
    this.genero = 'femenino'
  }

  // ! i18nPlural

  clientes: string[] = [
    'Maria',
    'jose',
    'milagros',
    'pedro',
    'luis'
  ]

  clientesMap = {
    '=0': '# no tenemos ningun cliente esperando',
    '=1': '# cliente esta esperando',
    'other': '# clientes estan esperando'
  }

  eliminarCliente(){
    this.clientes.shift();
  }

  // ! KeyValue Pipe

  persona: any= {
    nombre: 'luis',
    edad: 23,
    direccion: 'Caracas venezuela'
  }

  // ! Json Pipe

  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Batman',
      vuela: false
    },
  ]

  // ! Async Pipe
  miObservable = interval(1000);

  valorPromesa = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('fin de la promesa')
    }, 3500)
  })
}

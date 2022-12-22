import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Luis PerDomo';
  valor: number = 1000;
  obj: object = {
    edad: 23,
  }

  mostrarConsola(){
    console.log(this.nombre, this.valor, this.obj)
  }
}

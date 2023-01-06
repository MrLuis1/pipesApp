import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  nombreLower: string = 'luis';
  nombreUpper: string = 'LUIS';
  nombreCompleto: string = 'LuiS guStaVo';


  fecha: Date  = new Date;
  
}

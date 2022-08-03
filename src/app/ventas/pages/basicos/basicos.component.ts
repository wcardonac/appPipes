import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent  {

nombreLower: string ='WALTER';
nombreUper: string = 'walter';
nombreCompleto: string = 'WalTeR CarDONa';

fecha: Date = new Date(); // fecha actual


}

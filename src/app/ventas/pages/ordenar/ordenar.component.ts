import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent {

  ordenarPor: string = ''
cambiopalabra: boolean = true
heroes:Heroe[] =[
  {
    nombre:'Superman',
    vuela:true,
    color:Color.azul
  },
  {
    nombre:'Batman',
    vuela:false,
    color:Color.negro
  },
  {
    nombre:'Robin',
    vuela:false,
    color:Color.verde
  },
  {
    nombre:'Daredevil',
    vuela:false,
    color:Color.rojo
  },
  {
    nombre:'Linterna verde',
    vuela:true,
    color:Color.verde
  },
]
  cambio(){
this.cambiopalabra = !this.cambiopalabra
  }

  cambiarOrden(valor:string){
    this.ordenarPor = valor;
  }




}

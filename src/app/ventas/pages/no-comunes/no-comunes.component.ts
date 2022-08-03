import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent  {
//i18nSelect
nombre : string = 'walter';
genero: string = 'masculino';
invitacion ={
  'masculino': 'invitarlo',
  'femenino': 'invitarla'
}

//i18nPlural
clientes:string[] = ['maria','pedro','walter','samuel','diana'];
clientesmapa ={
  '=0': 'no tenemos ningun cliente esperando',
  '=1': 'tenemos un cliente esperando',
  '=2': 'tenemos 2 clientes esperando',
  'other': 'tenemos # clientes esperando'
}

cambiarnombre(){
this.nombre = 'susana';
this.genero = 'femenino'
}

borrarcliente(){
  this.clientes.shift()
}


//keyValue pipe
persona = {
  nombre: 'walter',
  edad: 35,
  direccion:'medellin,colombia'
}

//Json pipe

heroes = [
  {
    nombre:'Superman',
    vuela: true
  },
  {
    nombre:'robin',
    vuela: false
  },
  {
    nombre:'acuaman',
    vuela: false
  }
]

//async pipe
//lo vamos a usar mediante un observable
miObservable = interval(5000)//esto es un observable que estara emitinedo valores numericos

//tambien lo podemos hacer mediante una promesa
valorpromesa = new Promise((resolve,reject) =>{
  setTimeout(()=> {
    resolve('tenemos data de promesa')
  },3500)
})
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  alertButtons = ['Action'];
  nombreBoton:string = "Click Me!"
  cabecera:string="Hola"
  subcabecera:string="¿Como estas?"
  mensaje:string="Biiieeen"
  constructor(){
    console.log('HomePage')
  }
}

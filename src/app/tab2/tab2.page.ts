import { Component } from '@angular/core';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss', '../explore-container/explore-container.component.scss']
})
export class Tab2Page {

  lado1 : string
  lado2 : string
  lado3 : string
  saida : string
  resultado : string



  constructor() {}

  cal() {

    var a = parseInt(this.lado1)
    var b = parseInt(this.lado2)
    var c = parseInt(this.lado3)
    var p = Number(a + b + c ) / 2
    
    var r = Math.sqrt(p *(p - a) * (p - b) *(p-c))

    if (a != null &&  b!= null && c != null){
      if (a + b > c && a + c >b && b + c >a){
        this.saida = "a area do triangulo é"
        this.resultado = r.toFixed(2)
      }
      else{
          this.saida = "triangulo não existe"

      }


    }


    







  }

}
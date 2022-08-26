import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss', '../explore-container/explore-container.component.scss']
})
export class Tab1Page {

  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'traingulo',
      subHeader: this.saida,
      message: this.saida,
      buttons: ['fechar'],
    });

    await alert.present();
  }

  num1 : string
  num2 : string
  num3 : string
  triangulom : string
  saida : string

  

  
  
  
  
  triangulo() {

    
   
    
    var a = parseInt(this.num1)
    var b = parseInt(this.num2)
    var c = parseInt(this.num3)

    
    
    if (a != null &&  b!= null && c != null){
      if (a + b > c && a + c >b && b + c >a){
        if (this.num1 == this.num2 &&  this.num2 == this.num3){
        this.saida = "triangulo equilatero"
        }
      else if (this.num1 != this.num2 && this.num2 != this.num3){
        this.saida = "escaleno"
      }
      else{
        this.saida = "isósceles"
      }
    }
      else{
        this.saida= "error"
        }
      }
    }
  }  

import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss', '../explore-container/explore-container.component.scss']
})
export class Tab3Page {

  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'area',
      subHeader: 'O resultado é:',
      message: this.resultado,
      buttons: ['fechar'],
    });

    await alert.present();
  }

  num1: string
  num2: string
  saida: string
  area: string
  resultado : string


  calcular(){

     var area = Number(this.num1) * Number(this.num2) / 2

     if (this.num1 && this.num2){
      this.resultado =  area.toFixed(2)
      this.presentAlert()
    }
    else{
      this.saida="error"
    }
    


    }

  }


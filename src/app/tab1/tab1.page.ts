import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private popupalert :AlertController,
    private showwallet:AlertController
    
  ) {}

  async showPopup(){
    await this.popupalert.create({
      
      subHeader:'Entrez votre code secret ',
      inputs :[
        {
          type:'number', name:'secretcode',
        },

        
      ],
      buttons:[
        {
          text:'VALIDER',
          handler :(res)=>{
            console.log("Payement de "+res.secretcode+ " avec succès ")
          }
          
        },
        {
          text:'ANNULER',
          
        },
      
      ]
      

    }).then(res=>res.present());
  }
  

}
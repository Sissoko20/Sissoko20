import { Component } from '@angular/core';
import { AlertController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
 


  constructor(
    private popupalert :AlertController
    
  ) {}

  async showPopup(){
    await this.popupalert.create({
      header:'Service Isago',
      subHeader:'Entrez votre numéro compteur ',
      inputs :[
        {
          type:'text', name:'montantrecharge',placeholder:'Montant de la recharge',checked: true,
        },

        {
          min: 1,
          max: 6
        }
      ],
      buttons:[
        {
          text:'VALIDER',
          handler :(res)=>{
            console.log("Payement de "+res.montantrecharge+ " avec succès ")
          }
          
        },
        {
          text:'ANNULER',
        },

        
      
      ]
      

    }).then(res=>res.present());
  }

}

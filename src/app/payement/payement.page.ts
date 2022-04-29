import { Component, OnInit, ViewChild } from '@angular/core';
import { IonAccordionGroup, LoadingController } from '@ionic/angular';




@Component({
  selector: 'app-payement',
  templateUrl: './payement.page.html',
  styleUrls: ['./payement.page.scss'],
})
export class PayementPage implements OnInit {
  
  nav: any;
  

  constructor(
    public loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
  }

  async presentLoadingDefault() {
    let loading = await this.loadingCtrl.create({
      message: 'Please wait...',
      spinner:'bubbles'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 5000);
  }
  
  async presentLoadingCustom() {
    let loading = await this.loadingCtrl.create({
      spinner: 'circular',
      message: `
        <div class="custom-spinner-container">
          <div class="custom-spinner-box"></div>
        </div>`,
      duration: 5000
    });
  
    loading.present();
  }
  
  async presentLoadingText() {
    let loading = await this.loadingCtrl.create({
      spinner: 'bubbles',
      message: 'Loading Please Wait...'
    });
  
    loading.present();
  
    setTimeout(() => {
      this.nav.push('Votre solde est ');
    }, 1000);
  
    setTimeout(() => {
      loading.dismiss();
    }, 5000);

} 
  
} 

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public storage: Storage) {

  }

  openLogin()
  {
  	this.navCtrl.push('Login');
  }

  setData()
  {
  	this.storage.set('nama','arya tri setyadi');
  }

  getData()
  {
  	this.storage.get('nama').then((data) => {
  		console.log('nama saya ', data)
  	});
  }

}

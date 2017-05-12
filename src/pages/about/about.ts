import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
declare var google;

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
	
	image: any;
	map: any;
	



  constructor(public navCtrl: NavController) {
  	
  	const that = this;
  	setTimeout(function(){
  		that.googleMap();
  	},2000)
  	

  }

  //-25.363
  //131.044
  
  googleMap()
  {
  	 var myLatLng = {lat: -8.584458, lng: 116.094121 };

        this.map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: myLatLng
        });

        this.image = 'assets/img/profile.jpg';
        let marker = new google.maps.Marker({
          position: myLatLng,
          map: this.map,
          icon: this.image,
          title: 'Hello World!'
        });

  }
  

}

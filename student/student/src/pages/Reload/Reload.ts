import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from "angularfire2/database-deprecated";


@Component({
  selector: 'page-Reload',
  templateUrl: 'Reload.html'
})
export class ReloadPage {
  

  
    constructor(public db: AngularFireDatabase,public navCtrl: NavController) {
  
     localStorage.clear();
     location.reload();
    }

}

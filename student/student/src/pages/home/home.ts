import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from "angularfire2/database-deprecated";
import{LoginPage} from "../login/login";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  publicationList : object[]=[];

  constructor(public db: AngularFireDatabase,public navCtrl: NavController) {
   
  
    this.db.list('/publication').subscribe( data1 => {
      this.publicationList = data1;
    });

    localStorage.setItem('var2','true');

  }


}


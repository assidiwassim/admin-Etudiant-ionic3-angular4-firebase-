import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from "angularfire2/database-deprecated";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  publicationList : object[]=[];
  InformationList : object[]=[];

  constructor(public db: AngularFireDatabase,public navCtrl: NavController) {
    this.db.list('/publication').subscribe( data1 => {
      this.publicationList = data1;
    });
    this.db.list('/Information').subscribe( data => {
      this.InformationList = data;
    });
  }


}

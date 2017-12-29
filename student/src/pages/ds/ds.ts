import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from "angularfire2/database-deprecated";


@Component({
  selector: 'page-ds',
  templateUrl: 'ds.html'
})
export class dsPage {
  
  InformationList : object[]=[];
  Section :String;
  Filiere : String;
  
    constructor(public db: AngularFireDatabase,public navCtrl: NavController) {
  
      this.db.list('/Information', {
        query: {
          orderByChild:'Type',
          equalTo: 'ds'
        }}).subscribe( data => {
        this.InformationList = data;
      });


      this.Section=localStorage.getItem('Section');
      this.Filiere=localStorage.getItem('Filiere');
     console.log(this.Section);
     console.log(this.Filiere);
    }

}

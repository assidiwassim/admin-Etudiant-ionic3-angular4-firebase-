import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from "angularfire2/database-deprecated";


@Component({
  selector: 'page-exam',
  templateUrl: 'exam.html'
})
export class examPage {
  

  InformationList : object[]=[];
  Section :String;
  Filiere : String;
  constructor(public db: AngularFireDatabase,public navCtrl: NavController) {
      
    

    this.db.list('/Information', {
      query: {
        orderByChild:'Type',
        equalTo: 'examen'
      }}).subscribe( data => {
      this.InformationList = data;
    });

    this.Section=localStorage.getItem('Section');
    this.Filiere=localStorage.getItem('Filiere');
   console.log(this.Section);
   console.log(this.Filiere);

  }


}

import { HomePage } from '../home/home';
import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from "angularfire2/database-deprecated";



@Component({
  selector: 'page-Login',
  templateUrl: 'login.html'
})
export class LoginPage {
  @ViewChild('Section') Section : String ;
  @ViewChild('Filiere') Filiere : String ;
  
  
  
 
  
    constructor(public db: AngularFireDatabase,public navCtrl: NavController) {

      
    
     if(localStorage.getItem('var2')=='true')
      this.navCtrl.setRoot(HomePage);
    } 

    onChangeSection(selectedValue){
     
      localStorage.setItem('Section',selectedValue);

  
    
    }

    onChangeFiliere(selectedValue){
    
      localStorage.setItem('Filiere',selectedValue);
     
    }
    continue(){
     
      localStorage.setItem('var2','true');
      
      this.navCtrl.setRoot(HomePage);
      location.reload();

   
    }
}

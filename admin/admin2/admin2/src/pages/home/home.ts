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

 

  addPublication(publication){
    this.db.list('/publication').push({
      'text':publication,
      'Date':new Date()
    });

    
  }


  addFile(Type,Section,Filiere){

  
    this.db.list('/Information').push({
      'Type':Type,
      'Section':Section,
      'Filiere':Filiere,
      'File': localStorage.getItem("Data"),
      'Date':new Date()
  
    });

    localStorage.clear();
    }

    onFileChange(event) {
      
     
       
        if(event.target.files.length > 0) {

          let file = event.target.files[0];
         

          var reader = new FileReader();
  
          
          reader.onload = function(){
             localStorage.setItem("Data", reader.result);
           
          };

          reader.readAsDataURL(event.target.files[0]);
       
          

        }
        
        
                
      
    }

    


    
}

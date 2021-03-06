import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { examPage } from '../pages/exam/exam';
import { dsPage } from '../pages/ds/ds';
import { TempsPage } from '../pages/temps/temps';
import { LoginPage } from '../pages/login/login';
import { ReloadPage } from '../pages/Reload/Reload';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase } from "angularfire2/database-deprecated";

const firebaseAuth = {
  apiKey: "AIzaSyDuNtdgwTE8lcdAqHnxZCeZ5rv4iWWD9Vk",
  authDomain: "database-367a8.firebaseapp.com",
  databaseURL: "https://database-367a8.firebaseio.com",
  projectId: "database-367a8",
  storageBucket: "database-367a8.appspot.com",
  messagingSenderId: "178275596260"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    examPage,
    dsPage,
    TempsPage,
    LoginPage,
    ReloadPage


 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    examPage,
    dsPage,
    TempsPage,
    LoginPage,
    ReloadPage
   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

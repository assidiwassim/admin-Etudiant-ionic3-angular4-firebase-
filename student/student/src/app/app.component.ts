import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { examPage } from '../pages/exam/exam';
import { dsPage } from '../pages/ds/ds';
import { TempsPage } from '../pages/temps/temps';
import { LoginPage } from '../pages/login/login';
import { ReloadPage } from '../pages/Reload/Reload';






@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  bo:string;


  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
      
      this.bo=localStorage.getItem('var2');
     
     

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Emploit de examen', component: examPage },
      { title: 'Emploit de DS', component: dsPage },
      { title: 'Emploit de temps', component: TempsPage },
      { title: 'Reload (for test)', component: ReloadPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

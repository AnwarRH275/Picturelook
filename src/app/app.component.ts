import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  appPages = [
    {
      title: 'All Categorie',
      url: '/categorie',
      icon: 'grid'
    },
    {
      title: 'Favorie',
      url: '/app/tabs/speakers',
      icon: 'heart-half'
    },
    
    {
      title: 'Language',
      url: '/app/tabs/about',
      icon: 'language'
    }
  ];
  loggedIn = false;
  dark = false;


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}

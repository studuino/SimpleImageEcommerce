import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public platform: Platform
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onButGoogle(event) {
    
  }

  onButFb(event) {
    
  }

  onButSignup(event) {
    this.navCtrl.push('SignupPage');
  }

  signinForm() {
    // log in

    // go to main page
    this.navCtrl.setRoot('AboutPage');
  }
}

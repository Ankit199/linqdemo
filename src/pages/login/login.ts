import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { RegisterPage } from '../register/register';
import { ChangepasswordPage } from '../changepassword/changepassword';
import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';
import { PlanPage } from '../plan/plan';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  GoToPlan=()=>{
    this.navCtrl.push(PlanPage);
  }
  GoToDashboard=()=>{
    this.navCtrl.setRoot(DashboardPage);
  }
  GoToRegistration=()=>{
    this.navCtrl.push(RegisterPage);
  }
  GoToChangePassword=()=>{
    this.navCtrl.push(ForgotpasswordPage);
  }
}

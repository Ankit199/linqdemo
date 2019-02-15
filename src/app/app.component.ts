import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, NavParams } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

import { LoginPage } from '../pages/login/login';
import { ForgotpasswordPage } from '../pages/forgotpassword/forgotpassword';
import { ChangepasswordPage } from '../pages/changepassword/changepassword';
import { RegisterPage } from '../pages/register/register';
import { DashboardPage } from '../pages/dashboard/dashboard';

import { PlanPage } from '../pages/plan/plan';
import { BonuspointPage } from '../pages/bonuspoint/bonuspoint';
import { UphaarPage } from '../pages/uphaar/uphaar';
import { RulesPage } from '../pages/rules/rules';
import { ContactusPage } from '../pages/contactus/contactus';
import { RequiredinfoPage } from '../pages/requiredinfo/requiredinfo';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = RequiredinfoPage; 
  @ViewChild('content') navCtrl: NavController
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  
  GoToPlan=()=>{
    this.navCtrl.push(PlanPage);
  }
  GoToDashboard=()=>{
    this.navCtrl.setRoot(DashboardPage);
  }
  GoToUphaar=()=>{
    this.navCtrl.push(UphaarPage);
  }
  GoToContact=()=>{
    this.navCtrl.push(ContactusPage);
  }
  GoTologin=()=>{
    this.navCtrl.push(LoginPage);
  }
  GoToRules=()=>{
    this.navCtrl.push(RulesPage);
  }
  GoToBonus=()=>{
    this.navCtrl.push(BonuspointPage);
  }
}


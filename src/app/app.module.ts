import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MenuController } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


import { BonuspointPageModule } from '../pages/bonuspoint/bonuspoint.module';
import { ChangepasswordPageModule } from '../pages/changepassword/changepassword.module';
import { ForgotpasswordPageModule } from '../pages/forgotpassword/forgotpassword.module';
import { ContactusPageModule } from '../pages/contactus/contactus.module';
import { UphaarPageModule } from '../pages/uphaar/uphaar.module';
import { DashboardPageModule } from '../pages/dashboard/dashboard.module';
import { PlanPageModule } from '../pages/plan/plan.module';
import { RulesPageModule } from '../pages/rules/rules.module';
import { LoginPageModule } from '../pages/login/login.module';
import { RegisterPageModule } from '../pages/register/register.module';
import { ServiceProvider } from '../providers/service/service';
import { RequiredinfoPageModule } from '../pages/requiredinfo/requiredinfo.module';
import { HttpModule } from '@angular/http';

@NgModule({
	declarations: [
		MyApp,
		HomePage,

	],
	imports: [
		RegisterPageModule,
		RequiredinfoPageModule,
		LoginPageModule,
		RulesPageModule,
		PlanPageModule,
		DashboardPageModule,
		UphaarPageModule,
		ContactusPageModule,
		ChangepasswordPageModule,
		ForgotpasswordPageModule,
		BrowserModule,
		BonuspointPageModule,
		HttpModule,
		IonicModule.forRoot(MyApp)
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		HomePage,

	],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
    ServiceProvider
	]
})
export class AppModule { }

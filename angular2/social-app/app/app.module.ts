import { NgModule }      from '@angular/core';
import { RouterModule }   from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './appComponent';
import {Login} from './components/login/loginComponent';
import {Welcome} from './components/welcome/welcomeComponent';
import {UserProfile} from './components/profile/userProfileComponent';
import {HeaderComponent} from './components/header/headerComponent';
import {SidebarComponent} from './components/sidebar/sidebarComponent';
import {DashboardComponent} from './components/dashboard/dashboardComponent';
//import {AreaChartComponent} from './components/shared/charts/area-chart/AreaChartComponent';



//lib or thirdParty
//import { CHART_DIRECTIVES } from 'ng2-charts/ng2-charts';
//import { ChartsModule } from 'ng2-charts/ng2-charts';

import {IncomeService} from "./services/incomeService";
import {UserService} from "./services/user.service";

@NgModule({
  imports:      [
    BrowserModule,
    //ChartsModule,
    RouterModule.forRoot([
      {'path':'', redirectTo:'login', pathMatch:'full'},
      {'path':'login', component:Login},
      {'path':'welcome', component:Welcome},
      {'path':'dashboard',component:DashboardComponent}
    ])
 ],
  declarations: [ AppComponent, Login, Welcome, UserProfile, HeaderComponent, SidebarComponent, DashboardComponent],
  bootstrap:    [ AppComponent ],
  providers: [IncomeService,UserService]
})
export class AppModule { }

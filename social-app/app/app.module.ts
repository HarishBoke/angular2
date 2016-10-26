import { NgModule }      from '@angular/core';
import { RouterModule }   from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './appComponent';
import {Login} from './components/login/loginComponent';
import {Welcome} from './components/welcome/welcomeComponent';

@NgModule({
  imports:      [
    BrowserModule,
    RouterModule.forRoot([
      {'path':'', redirectTo:'login', pathMatch:'full'},
      {'path':'login', component:Login},
      {'path':'welcome', component:Welcome}
    ])
 ],
  declarations: [ AppComponent, Login, Welcome],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

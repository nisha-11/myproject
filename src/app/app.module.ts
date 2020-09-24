import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { DisplayProductComponent } from './display-product/display-product.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WomenComponent } from './women/women.component';
import { MenComponent } from './men/men.component';
import { KidsComponent } from './kids/kids.component';
import { SportsComponent } from './sports/sports.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    DisplayProductComponent,
    LoginComponent,
    RegisterComponent,
    WomenComponent,
    MenComponent,
    KidsComponent,
    SportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

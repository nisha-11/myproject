import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { RegisterComponent } from './register/register.component';
import { DisplayProductComponent } from './display-product/display-product.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';
import { SportsComponent } from './sports/sports.component';

const routes: Route[] = [
    {path:'',redirectTo:'/app-home',pathMatch:"full"},
    {path:'login', component:LoginComponent},
    {path:'index', component: IndexComponent},
    {path:'register',component:RegisterComponent},
    {path:'display-component',component:DisplayProductComponent},
    {path:'men', component:MenComponent},
    {path:'women', component:WomenComponent},
    {path:'kids', component:KidsComponent},
    {path:'sports', component:SportsComponent}
     /*path:"update/:id",component:UpdateuserComponent}*/


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from '../app/company/company.component';
import { AppComponent } from '../app/app.component';

const routes: Routes = [
{path:"", redirectTo: '/home', pathMatch: 'full'},
{path:"home", component:AppComponent},
{path:"company", component:CompanyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

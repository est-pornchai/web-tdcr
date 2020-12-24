import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from '../app/company/company.component';
import { AppComponent } from '../app/app.component';

import { ComponentsComponent } from './components/components.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: '',component:ComponentsComponent,pathMatch:'full'},
  {path: 'home',component:ComponentsComponent},
  {path: 'company', component: CompanyComponent},
  {path: 'about', component: AboutComponent},
  {path: '**',component:ComponentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from '../app/company/company.component';
import { AppComponent } from '../app/app.component';
import { StorageComponent } from '../app/grid/storage/storage.component';
import { ShopuiComponent } from '../app/grid/shopui/shopui.component';
import { GridTestComponent } from '../app/grid-test/grid-test.component';
import { ComponentsComponent } from './components/components.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ParentComponent } from './page-test/parent/parent.component';
import { ChildComponent } from './child/child.component';


const routes: Routes = [
  {path: '',component:ComponentsComponent,pathMatch:'full'},
  {path: 'home',component:ComponentsComponent},
  {path: 'company', component: CompanyComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'storage', component: StorageComponent},
  {path: 'shopui', component: ShopuiComponent},
  {path: 'grid-test', component: GridTestComponent},
  {path: 'child', component: ChildComponent},
  {path: 'page-test', component: ParentComponent},
  {path: '**',component:ComponentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

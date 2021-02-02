import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CompanyComponent } from './company/company.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ComponentsComponent } from './components/components.component';
import { ContactComponent } from './contact/contact.component';
import { AgGridModule } from 'ag-grid-angular';
import { FooterComponent } from './footer/footer.component';
import { GridComponent } from './grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompanyComponent,
    AboutComponent,
    NavbarComponent,
    ComponentsComponent,
    ContactComponent,
    FooterComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

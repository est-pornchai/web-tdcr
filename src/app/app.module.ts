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
import { PlaygroundComponent } from './playground/playground.component';
import { StorageComponent } from '../app/grid/storage/storage.component';
import { ShopuiComponent } from '../app/grid/shopui/shopui.component';
import { ButtonRendererComponent } from '../app/grid/storage/button.component';
import { ItemService } from '../app/grid/item.service';
import { DragDropModule} from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridTestComponent } from './grid-test/grid-test.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { PageTestComponent } from './page-test/page-test.component';


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
    GridComponent,
    PlaygroundComponent,
    ShopuiComponent,
    StorageComponent,
    ButtonRendererComponent,
    GridTestComponent,
    ParentComponent,
    ChildComponent,
    PageTestComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,BrowserAnimationsModule,
    DragDropModule,FormsModule,ReactiveFormsModule, HttpClientModule,
    AgGridModule.withComponents([ButtonRendererComponent])
  ],
  exports:[],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }

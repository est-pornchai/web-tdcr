import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import { ViewChild ,Input} from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {
  @ViewChild("agGrid",{static: false})agGrid : AgGridAngular;

  columnDefs = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price'}
];

rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
];
  constructor() { }

  ngOnInit(): void {
  }

}

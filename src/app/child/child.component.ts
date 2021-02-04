import { Component, OnInit,Input } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ViewChild } from '@angular/core';
import { count } from 'console';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input("ChildCount") count = 0;

}
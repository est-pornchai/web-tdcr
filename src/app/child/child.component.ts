import { Component, OnInit,Output,Input,EventEmitter } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ViewChild } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input("ChildCount") count = 0 ;
  @Output() onClearCount = new EventEmitter <number>();



  //languages = ['0','1',];

  constructor() { }

  ngOnInit() {
    console.log(this.count)


   /* for (let i = 1; i <= 10 ; i++) {
      console.log(i);
    }*/

    }
    clearCount(){
      this.onClearCount.emit(0);
      console.log(this.clearCount)
      console.log(this.count)
    }

  }




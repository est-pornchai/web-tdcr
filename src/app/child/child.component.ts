import { Component, OnInit,Output,Input,EventEmitter, OnChanges } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ViewChild } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {
  @Input("ChildCount") count = 0 ;
  @Output() onClearCount = new EventEmitter <number>();

  constructor() { }

  //First solution
  dummyArr = [];
  ngOnChanges()
  {
    this.dummyArr = [];
    for(let i=0 ; i< this.count; i++ )
    {
      this.dummyArr.push(i);
    }
    
  }

  //Second solution
  genDummyArr()
  { let arr = [];
    for(let i=0 ; i< this.count; i++ )
    {
      arr.push(i);
    }
    return arr;
  }

  ngOnInit() {
    console.log(this.count)

    }
    clearCount(){
      this.onClearCount.emit(0);
      console.log(this.clearCount)
      console.log(this.count)
    }
  }

/*
  public row():void{
    this.rows.push({No:'',});
  }
*/
   /* for (let i = 1; i <= 10 ; i++) {
      console.log(i);
    }*/

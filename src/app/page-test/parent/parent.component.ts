import { Component, OnInit,Output,Input } from '@angular/core';
import { title } from 'process';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent  {
     ParentCount = 0 ;


  /*addParentCount(index) {
    var current = this.rows[index];
    this.rows.splice(index, 0, current);
    this.ParentCount ++;
    
  } */


  addParentCount(){
  console.log(this.ParentCount)
  this.ParentCount ++;
    
    
  }
}

/* groups = [
   {
      "count": "No"
   },
  ];
  addItem(index) {
    var currentElement = this.groups[index];
    this.groups.splice(index, 0, currentElement);
  }*/


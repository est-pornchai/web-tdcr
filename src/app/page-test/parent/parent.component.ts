import { Component, OnInit } from '@angular/core';
import { count } from 'console';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent  {
  ParentCount = 0;
  rows = [];

  addParentCount(){
    this.ParentCount = this.ParentCount + 1 ;
    
  } 

//  groups = [
  //  {
  //    "count": "No"
  //  },
  //];
  //addItem(index) {
   // var currentElement = this.groups[index];
   // this.groups.splice(index, 0, currentElement);
 // }
  
}
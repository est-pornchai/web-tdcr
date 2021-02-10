import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-test',
  templateUrl: './page-test.component.html',
  styleUrls: ['./page-test.component.css']
})


export class PageTestComponent implements OnInit {



  
  constructor() { }

  ngOnInit(): void {
    let list : Array<number> = [ 0, 1, 2, 3, 4 ];
    for(let index in list) {
      let element = list[index];
      console.info(element);
    }

    for(let i=0; i< 5; i++) {
      console.info(i);
    }
    
    
    
  }

}

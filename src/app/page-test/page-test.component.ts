import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-test',
  templateUrl: './page-test.component.html',
  styleUrls: ['./page-test.component.css']
})


export class PageTestComponent implements OnInit {



  
  constructor() { }

  ngOnInit(): void {
    /*let list : Array<number> = [ 0, 1, 2, 3, 4 ];
    for(let index in list) {
      let element = list[index];
      console.info(element);
    }

    for(let i=0; i< 5; i++) {
      console.info(i);
    }*/
    
    /*let data : any;
    data = "My name ";
    console.log(data);
    data = 10
    console.log(data);*/

   /* let testArray: String [];
    testArray = ["Thai","DCR"];
    let testNumArray: number[];
    testNumArray = [1,2,3,4];
    console.log(testArray)
    console.log(testNumArray)*/

    /*const MyArray1: number[] = [1,10,20,90];
    const MyArray2 = [114,254,355];
    console.log(MyArray1)
    console.log(MyArray2)*/

    /*let mySumArray : any[];
    mySumArray = [ 1,{age:'27'},{name:'Est'}, true];
    console.log(mySumArray);*/

    /*var forOfStringArray = ["a","b","c"];
    for (let value of forOfStringArray){
      console.log(value);
    }*/

    /*const myNumArray = [1,2,3,4];
    for (let item of myNumArray){
      item = item * 10;
      console.log(item);
    }*/
    //console.log("ค่าสุดท้ายของ item =" + item);

    /*const myNumArray = [1,2,3,4];
    for (var item of myNumArray){
      item = item * 10;
      console.log(item);
    }
    console.log("ค่าสุดท้ายของ item =" + item);*/

    function sumInput(first:number, second:number):void {
      let result = first + second;
      console.log(`ค่ารวม${first} กับ ${second} คือ ${result}`);
    
      }
    sumInput(5,3);
  }
}

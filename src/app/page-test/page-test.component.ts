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

    /*function sumInput(first:number, second:number):void {
      let result = first + second;
      console.log(`ค่ารวม${first} กับ ${second} คือ ${result}`);
    
      }
    sumInput(5,3);*/

    /* function CalcSum(value1: number, value2:number): number {
    	let  r = value1 +　value2;
      console.log(r);
	if (r < 0)
	{
		throw Error ("Error");
	}
	return r;
  
}*/

/*function hello2<T, U>(word1: T, word2: U){
  alert(word1);
  alert(word2);
}
hello2<string, number>('test', 555); 
console.log(hello2)*/

/*function hello3<T>(word1: T){
  return (word1+' คือ');
}

var test = hello3<string>('คุณ');
alert(test);
console.log(hello3)
console.log(test)*/

//นำค่าที่ได้กลับจากฟังก์มาใช้งาน
/*function sumInput (data: number[]) :number{
  let sum: number = 0;
  for (let item of data){
    sum += item;
  }
  return sum;
}
var myInput = [1,2,3,4,5];
var result = sumInput(myInput);
console.log("ผลรวม คือ " + result);*/

//Arrow function
/*let myVariable1: ()=>string;
let myVariable2: (number, string)=>boolean;
let myVariable3: (string, boolean)=>void;
myVariable1 = ()=>{
  return "What!"
};
let result = myVariable1();
console.log(result);*/


//Callback function
/*function calculator(a:number, b:number, myOperator:(input1:number,input2:number)=>number) :number{
  let result = myOperator(a,b);
  return result;
}
function multiply(input1:number, input2:number):number{
  return input1*input2;
}
let result1 = calculator(22481,35,multiply);
console.log(result1+' THB')*/



//Callback function2
function calculator(a:number, b:number, myOperator:(input1:number,input2:number)=>number) :number{
  let result = myOperator(a,b);
  return result;
}
let result1 = calculator(22481,35,(input1,input2)=>{
  return input1*input2;
});
console.log(result1+' THB')
let result2 = calculator(22481,35,(input1,input2)=>{
  return input1+input2;
});
console.log(result2+' THB')
let result3 = calculator(22481,35,(input1,input2)=>{
  return input1-input2;
});
console.log(result3+' THB')
console.log(calculator)
  }
}

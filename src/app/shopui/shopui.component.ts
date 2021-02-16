import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem,copyArrayItem} from '@angular/cdk/drag-drop';
import { Items} from '../Items'
import { ItemService } from '../item.service';
import {Chart} from 'node_modules/chart.js'
import { identifierModuleUrl } from '@angular/compiler';
@Component({
  selector: 'app-shopui',
  templateUrl: './shopui.component.html',
  styleUrls: ['./shopui.component.css']
})
export class ShopuiComponent implements OnInit {
  items = []
  basket =[]
  //addbasket:Items
  Chart: any = []
  constructor(private ItemService : ItemService) { }
  //getitem = this.ItemService.getItems()
  namelable =[]
  price =[]

  arreach:number[]=[0]
  getall:number[] = []
 
  ngOnInit(){
    this.items = this.ItemService.getItems()
    
    this.getarreach(0,0,0)
  }
  dynamicColors () {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
  };
  getSum() {
    var res = 0;
    this.basket.forEach(element => {
      res = res + (element.price * element.sumUnit);
    })
    return res;
  }
  color =[]
  getarreach(d1,d2,d3){

    
    this.arreach.splice(d3,1,d1*d2)
    
    this.Chart = new Chart('myChart', { // สร้าง object และใช้ชื่อ id lineChart ในการอ้างอิงเพื่อนำมาเเสดงผล
      type: 'pie',
      data: {
          labels: this.namelable, // ชื่อของข้อมูลในแนวแกน x
          datasets: [{ 
             label: 'Number of items',
             data: this.arreach,
             fill: false,
             lineTension: 0.2,
             //borderColor: "red", // สีของเส้น
             borderWidth: 1,
             backgroundColor: this.color
          }]
      },
      options: {
        title: {
          text: "List of Items",
          display: true
       }
      },
      scales: { // แสดง scales ของแผนภูมิเริมที่ 0
         yAxes: [{
            ticks:{
               beginAtZero:true
            }
         }]
       }
   })
  }
  getidx = []
  isPointerOverContainer:boolean
  
  drop(event:CdkDragDrop<any[]>) {
    
    var idx = event.container.data.indexOf(event.previousContainer.data[event.previousIndex]);
    if (idx != -1) {
      this.isPointerOverContainer = event.isPointerOverContainer;
    } 
    else{
      event.previousContainer.data[event.previousIndex].sumUnit = 0;
      copyArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        this.basket.length)
      console.log(event.container.data)
      this.color.push(this.dynamicColors())
      
    }
    
    if(this.isPointerOverContainer == false){
      this.basket.splice(event.previousIndex,1)
      
      this.color.splice(event.previousIndex,1)
      this.arreach.splice(event.previousIndex,1)
      this.isPointerOverContainer = true
    }
    
  }
}
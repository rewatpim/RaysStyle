import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //ตัวแปร หรือ properties

  itemCount:number =0;                  // 1 way binding
  btnText:string='เพิ่มรายการใหม่';   // 1 way binding
  listText:string ;    //2 way binding
  listAll = [];

  constructor() { }

  ngOnInit() {
  }

  addItem()
  {
    //ตรวจค่าว่าง
    if(this.listText !="")
    {
    //รับค่าจาก Form และบันทักลง 
    this.listAll.push(this.listText);
    //เครียค่าฟอร์ม
    this.listText='';
    //นับจำนวนล่าสุด
    this.itemCount= this.listAll.length;
    }
  }
}

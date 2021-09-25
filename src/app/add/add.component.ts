import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  n1:number=0
  n2:number=0
  addition:number=0
  constructor() { }

  ngOnInit(): void {
  }

  addNum(){
    this.addition = parseInt(this.n1+"") + parseInt(this.n2+"");  
  }
}

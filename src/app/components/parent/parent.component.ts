import { Component, OnInit, ViewChild, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.sass']
})
export class ParentComponent implements OnInit  {
  
  @Input() name: string;
  message:string;
  parentMessage = "message from parent";

  constructor() { }

  ngOnInit() {
    let name = "Morty";
    this.name = name;
    console.log(name);
  }
}
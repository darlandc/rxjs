import { Component, AfterViewInit, Input, ViewChildren, QueryList } from '@angular/core';
import { HelloComponent } from '../hello/hello.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.sass']
})
export class ParentComponent implements AfterViewInit  {

  name = 'Rick Sanchez';
  
  @ViewChildren(HelloComponent) hellos: QueryList<any>;

  constructor() { }

  ngAfterViewInit() {

    this.hellos.forEach(hello => console.log(hello));

 }

}
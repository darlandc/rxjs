import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

const myObservable = of('apple', 'orange', 'grappe');
const myObserver = {
  next: (x: string) => console.log('Observer got a next value: ' + x),
  error: (err: string) => console.error('Observer got an error: ' + err),
  complete: () => console.log('Observer got a complete notification'),
};

@Component({
  selector: 'app-subscribing',
  templateUrl: './subscribing.component.html',
  styleUrls: ['./subscribing.component.sass']
})
export class SubscribingComponent implements OnInit {

  constructor() {
    myObservable.subscribe(myObserver);
  }

  ngOnInit() {
  }

}

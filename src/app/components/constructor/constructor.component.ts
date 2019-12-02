import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

function sequenceSubscriber(observer) {
  observer.next('Apple');
  observer.next('Orange');
  observer.next('Grappe');
  observer.complete();

  return {unsubscribe() {}};
}

const sequence = new Observable(sequenceSubscriber);

sequence.subscribe({
  next(msg) { console.log(msg); },
  complete() { console.log('Finished sequence'); }
});

@Component({
  selector: 'app-constructor',
  templateUrl: './constructor.component.html',
  styleUrls: ['./constructor.component.sass']
})
export class ConstructorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

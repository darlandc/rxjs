import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-constructor',
  templateUrl: './constructor.component.html',
  styleUrls: ['./constructor.component.sass']
})
export class ConstructorComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    // get navigation route
    this.activatedRoute.url.subscribe(url => console.log('The URL changed to: ' + url));
    
   
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

    }

}

import { Component, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.sass']
})
export class EventsComponent implements AfterViewInit  {

  constructor(private activatedRoute: ActivatedRoute) { }


  fromEvent(target: HTMLInputElement, eventName: string) {
    return new Observable((observer) => {
      const handler = (e: unknown) => observer.next(e);
  
      target.addEventListener(eventName, handler);
  
      return () => {
        target.removeEventListener(eventName, handler);
      };
    });
  }


  ngAfterViewInit() {

    // get navigation route
    this.activatedRoute.url.subscribe(url => console.log('The URL changed to: ' + url));
    


    const ESC_KEY = 27;
    const nameInput = document.getElementById('yourname') as HTMLInputElement;
    this.fromEvent(nameInput, 'keydown')
    .subscribe((e: KeyboardEvent) => {
      if (e.keyCode === ESC_KEY) {
        nameInput.value = '';
      }
    });
  }

}

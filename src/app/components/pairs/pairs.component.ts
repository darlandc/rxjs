import { Component, OnInit } from '@angular/core';
import { of, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators'; 

@Component({
  selector: 'app-pairs',
  templateUrl: './pairs.component.html',
  styleUrls: ['./pairs.component.sass']
})
export class PairsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
        const ob$: Observable<number> = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).pipe(filter( v => v % 2 === 0));


    ob$.subscribe(
      next => console.log('next:', next),
      err => console.log('error:', err),
      () => console.log('Completed'),
    );

  }

}



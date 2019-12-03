import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { SharedService } from '../../shared.service';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})

export class HomeComponent implements OnInit {

  data: any;
  navStart: Observable<NavigationStart>;

  constructor(private router: Router) {
    this.navStart = router.events.pipe(
      filter(evt => evt instanceof NavigationStart)
    ) as Observable<NavigationStart>;
  }

  ngOnInit() {
  //  this.navStart.subscribe(evt => console.log('Navigation Started!'));
  console.clear();
  
  }


}

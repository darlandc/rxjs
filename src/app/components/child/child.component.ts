import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.sass']
})
export class ChildComponent implements OnInit {

  @Input() bankName: 'string';
  @Input('account-id') id: string;
  @Input() childMessage: string;
  @Input() message: string;
 
  constructor() { }

  ngOnInit() {
  }

}

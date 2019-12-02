import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.sass']
})
export class FormsComponent implements OnInit {

inputChangeLog: string[] = [];
inputForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.inputForm = new FormGroup({
      name: new FormControl()
    });
    this.logInputChange();

    this.activatedRoute.url.subscribe(url => console.log('The URL changed to: ' + url));

    
  }

  logInputChange() {
    const nameControl = this.inputForm.get('name');
    nameControl.valueChanges.forEach(
      (value: string) => {
        this.inputChangeLog.push(value);
        console.log(this.inputChangeLog);
      }
    );
  }



}

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Login1Component } from './login1.component';

describe('Login1Component', () => {
  let component: Login1Component;
  let fixture: ComponentFixture<Login1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Login1Component ],
      imports: [ BrowserModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Login1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

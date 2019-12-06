import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events/events.component';
import { ConstructorComponent } from './constructor/constructor.component';
import { SubscribingComponent } from './subscribing/subscribing.component';
import { ObservableComponent } from './observable/observable.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsComponent } from './forms/forms.component';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HelloComponent } from './hello/hello.component';
import { PairsComponent } from './pairs/pairs.component';
import { AsyncComponent } from './async/async.component';
import { Login1Component } from './login1/login1.component';
import { ApiService } from '../services/api.service';
import { CustomerService } from '../services/customer.service';
import { AuthGuardService } from '../guards/auth-guard.service';

@NgModule({
  declarations: [
    HomeComponent,
    EventsComponent,
    ConstructorComponent,
    SubscribingComponent,
    ObservableComponent,
    FormsComponent,
    ParentComponent,
    ChildComponent,
    HelloComponent,
    PairsComponent,
    AsyncComponent,
    Login1Component
  ],
  exports: [
    HomeComponent,

  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    ApiService,
    CustomerService,
    AuthGuardService
  ]
})
export class ComponentsModule { }

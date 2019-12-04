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
  ],
  exports: [
    HomeComponent,

  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ComponentsModule { }

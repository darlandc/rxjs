import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConstructorComponent } from './components/constructor/constructor.component';
import { SubscribingComponent } from './components/subscribing/subscribing.component';
import { EventsComponent } from './components/events/events.component';
import { ObservableComponent } from './components/observable/observable.component';
import { AcompComponent } from './components/acomp/acomp.component';
import { BcompComponent } from './components/bcomp/bcomp.component';

const routes: Routes = [
  { path: 'constructor', component: ConstructorComponent },
  { path: 'events', component: EventsComponent },
  { path: 'observable', component: ObservableComponent },
  { path: 'subscribing', component: SubscribingComponent },
  { path: 'acomp', component: AcompComponent},
  { path: 'bcomp', component: BcompComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

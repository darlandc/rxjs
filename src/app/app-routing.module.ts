import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ConstructorComponent } from './components/constructor/constructor.component';
import { SubscribingComponent } from './components/subscribing/subscribing.component';
import { EventsComponent } from './components/events/events.component';
import { ObservableComponent } from './components/observable/observable.component';

const routes: Routes = [
  { path: '**', component: AppComponent },
  { path: 'constructor', component: ConstructorComponent },
  { path: 'events', component: EventsComponent },
  { path: 'observable', component: ObservableComponent },
  { path: 'subscribing', component: SubscribingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

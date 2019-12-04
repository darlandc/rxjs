import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConstructorComponent } from './components/constructor/constructor.component';
import { SubscribingComponent } from './components/subscribing/subscribing.component';
import { EventsComponent } from './components/events/events.component';
import { ObservableComponent } from './components/observable/observable.component';
import { FormsComponent } from './components/forms/forms.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { HomeComponent } from './components/home/home.component';
import { ComponentsModule } from './components/components.module';
import { HelloComponent } from './components/hello/hello.component';
import { PairsComponent } from './components/pairs/pairs.component';
import { AsyncComponent } from './components/async/async.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'constructor', component: ConstructorComponent },
  { path: 'events', component: EventsComponent },
  { path: 'observable', component: ObservableComponent },
  { path: 'subscribing', component: SubscribingComponent },
  { path: 'form', component: FormsComponent},
  { path: 'parent', component: ParentComponent},
  { path: 'pairs', component: PairsComponent},
  { path: 'child', component: ChildComponent},
  { path: 'hello', component: HelloComponent},
  { path: 'async', component: AsyncComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ComponentsModule
],
  exports: [RouterModule]
})
export class AppRoutingModule { }

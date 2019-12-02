import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventsComponent } from './components/events/events.component';
import { ConstructorComponent } from './components/constructor/constructor.component';
import { SubscribingComponent } from './components/subscribing/subscribing.component';
import { ObservableComponent } from './components/observable/observable.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AcompComponent } from './components/acomp/acomp.component';
import { BcompComponent } from './components/bcomp/bcomp.component';
import { FormsComponent } from './components/forms/forms.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    ConstructorComponent,
    SubscribingComponent,
    ObservableComponent,
    AcompComponent,
    BcompComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

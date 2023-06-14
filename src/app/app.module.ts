import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,FormBuilder,FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { EmaliComponent } from './emali/emali.component';
import { MockComponent } from './mock/mock.component';
import { MockinterviewComponent } from './mockinterview/mockinterview.component';


@NgModule({
  declarations: [
    AppComponent,
    EmaliComponent,
    MockComponent,
    MockinterviewComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  
    
     ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

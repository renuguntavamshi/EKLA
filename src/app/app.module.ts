import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingcomponents } from './app-routing.module';
import { AppComponent } from './app.component';







@NgModule({
  declarations: [
    AppComponent,

   routingcomponents,
  
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DataService } from './service/data.service'
 
import { DataComponent } from './data/data.component';
 
import { HomeComponent } from './home/home.component';
 
import { EventComponent } from './event/event.component';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule, // Add HttpClientModule here
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DataComponent,
    EventComponent,
    HomeComponent,
  
  ],
  providers: [DataService], // Provide the service here
  bootstrap: [ AppComponent ]
})
export class AppModule { }

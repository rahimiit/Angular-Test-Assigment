import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

 
import { DataComponent } from './data/data.component';
import { EventComponent } from './event/event.component';
import { HomeComponent } from './home/home.component';
 

const routes: Routes = [
  { path: '', redirectTo: '/data', pathMatch: 'full' },
 
  { path: 'data', component: DataComponent },
  { path: 'event', component: EventComponent },
  { path: 'home', component: HomeComponent },
 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

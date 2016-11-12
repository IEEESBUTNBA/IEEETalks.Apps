import { NgModule }       from '@angular/core';
import { RouterModule }   from '@angular/router';

import {AboutUs}  from  "../aboutUs/aboutUs.component";

@NgModule({
  imports: [
    RouterModule.forChild([
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'aboutUs', component: AboutUs }  
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AboutUsRoutingModule {}
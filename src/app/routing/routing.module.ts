import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { TourDetailsComponent, TourHomeComponent, ToursComponent, 
         TourTripsComponent, TourTravellersComponent, TourContactComponent, NotfoundComponent,  } from "../pages/pages";

const appRoutes: Routes = [
  { path: 'tours', component: ToursComponent },
  {
      path: 'tour/:id', component: TourHomeComponent,
      children: [
          { path: '', redirectTo: 'Details', pathMatch: 'full' },
          { path: 'Details', component: TourDetailsComponent },
          { path: 'Trips', component: TourTripsComponent },
          { path: 'Travellers', component: TourTravellersComponent },
          { path: 'Contact', component: TourContactComponent }
      ]
  },
  { path: '', redirectTo: 'tours', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }

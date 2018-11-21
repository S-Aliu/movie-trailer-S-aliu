import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActorsComponent } from './actors/actors.component';

const routes: Routes = [
  { path: '', component: ActorsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

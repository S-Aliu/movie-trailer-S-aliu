import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActorsComponent } from './actors/actors.component';
import { ActorDetailComponent } from './actor-detail/actor-detail.component';

import { MovieService } from './movie.service';

@NgModule({
  declarations: [
    AppComponent,
    ActorsComponent,
    ActorDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ MovieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

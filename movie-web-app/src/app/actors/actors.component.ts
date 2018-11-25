import { Component, OnInit } from '@angular/core';

import { Actor } from './actor';
import { ALL_ACTORS } from './real-actors'
import {ActorService } from '../actor.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {

  actors = ALL_ACTORS;

  constructor(private actorService: ActorService) { }

  ngOnInit() {
    this.getActors();
  }

  getActors(): void {
    this.actors = this.actorService.getActors();
  }

}

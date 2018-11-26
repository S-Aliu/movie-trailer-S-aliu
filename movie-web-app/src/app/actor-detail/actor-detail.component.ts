import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from  '@angular/router';

import { Actor } from '../actors/actor';
import { ALL_ACTORS } from '../actors/real-actors';
import { ActorService } from '../actor.service';



@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.css']
})
export class ActorDetailComponent implements OnInit {

  actor: Actor;

  constructor(
    private actorService: ActorService,
     private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getActor();
  }

  getActor(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    //USE ROUTE TOMGET ACTOR ID
    this.actor = this.actorService.getActor(id);
  }

}

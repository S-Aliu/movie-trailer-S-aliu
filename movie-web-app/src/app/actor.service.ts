import { Injectable } from '@angular/core';

import { Actor } from './actors/actor';
import { ALL_ACTORS } from './actors/real-actors';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor() { }

  getActors(): Actor[] {
    return ALL_ACTORS;
  }
  getActor(id: number): Actor {
    return ALL_ACTORS.find(actor => actor.id === id);

  }
}

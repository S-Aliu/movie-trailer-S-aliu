import { Component, OnInit } from '@angular/core';

import { Actor } from './actor';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {

  actors: Actor[];

  constructor() { }

  ngOnInit() {
  }

}

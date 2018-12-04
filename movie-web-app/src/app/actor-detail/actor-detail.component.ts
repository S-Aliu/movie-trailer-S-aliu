import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { MovieService } from '../movie.service';

// import { Actor } from '../actors/actor';
// import { ALL_ACTORS } from '../actors/real-actors';
// import { ActorService } from '../actor.service';



@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.css']
})
export class ActorDetailComponent implements OnInit {

  // actor: Actor;
   people :any;

  constructor(private router: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    this.router.params.subscribe((params) => {
     const id = params['id'];
     this.movieService.getActor(id).subscribe(data => {
       this.people = data;
       // console.log(data);
     });
   });
  }

}

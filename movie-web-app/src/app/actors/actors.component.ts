import { Component, OnInit } from '@angular/core';
import { ActorService } from '../actor.service';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {

  people: any;



  constructor(public movieService: MovieService) {
    this.people = []

    for (var i = 1; i < 39; i++) {
      if ([15, 16, 17, 21, 25, 41, 46].includes(i)) {
        console.log('no data from api on actor of id:' + i)
      } else {
        this.movieService.getActor(i).subscribe(data => {
          this.people.push(data);
        });
      }
    }

  }
  ngOnInit() {}
}

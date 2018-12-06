import { Component, OnInit } from '@angular/core';


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
        this.movieService.getActor(i).subscribe(data => {
          this.people.push(data);
        });
    console.log(this.people)
  }
}

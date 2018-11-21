import { Movie } from './movie';
// here we will use another class to structure this class so we import the class we will need
export class Actor {
  name: string;
  movies: Array<Movie>;
  bio: string;
  path: string;
}

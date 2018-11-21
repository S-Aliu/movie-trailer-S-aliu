import { Actor } from './actor';
import { THE_COLOR_PURPLE } from './real-movies';
import { DO_THE_RIGHT_THING } from './real-movies';
import { THE_WATSONS_GO_TO_BIRMINGHAM } from './real-movies';
//keep importing movies

export const SOFIA: Actor = {
  id: 1,
  name: 'Oprah Winfrey',
  movies: [THE_COLOR_PURPLE],
  bio: 'Oprah Winfrey is an American media executive, actress, talk show host, television producer and philanthropist. She is best known for her talk show The Oprah Winfrey Show, which was the highest-rated television program of its kind in history and was nationally syndicated from 1986 to 2011 in Chicago.',
  path: 'assets/img/oprah.jpg'

};

const ALBERT: Actor = {
  id: 2,
  name: 'Danny Glover',
  movies: [THE_COLOR_PURPLE],
  bio: 'Danny Lebern Glover is an American actor, film director, and political activist. He is known for his lead role as Roger Murtaugh in the Lethal Weapon film series. He also has leading roles in the films The Color Purple, To Sleep with Anger, Predator 2, Angels in the Outfield and Operation Dumbo Drop.',
  path: 'assets/img/donald.jpg'
};

const CELIE: Actor = {
  id: 3,
  name: 'Whoopi Goldberg',
  movies: [THE_COLOR_PURPLE],
  bio: 'Caryn Elaine Johnson, known professionally as Whoopi Goldberg, is an American actress, comedian, author, and television host. She has been nominated for 13 Emmy Awards and is one of the few entertainers to have won an Emmy Award, a Grammy Award, an Academy Award, and a Tony Award.',
  path: 'assets/img/whoopi.jpg'
};

const MOOKIE: Actor = {
  id: 4,
  name: 'Spike Lee',
  movies: [DO_THE_RIGHT_THING],
  bio: 'Actor, director, producer and writer Spike Lee was born Shelton Jackson Lee on March 20, 1957, in Atlanta, Georgia, and soon moved to Brooklyn, New York. Lee went on to graduate from the New York University Film School in 1982. His thesis film, Joe&apos;s Bed-Stuy Barbershop: We Cut Heads, won a Student Academy Award.',
  path: 'assets/img/spike.jpeg'
};

const JOETTE: Actor = {
  id: 5,
  name: 'Skai Johnson',
  movies: [THE_WATSONS_GO_TO_BIRMINGHAM],
  bio: 'Jackson was born on April 8, 2002 in New York City. She began her career as a child model appearing in numerous national commercials, including for Band-Aid bandages.',
  path: 'assets/img/skai.jpg'
};


export const ALL_ACTORS: Actor[] = [
  SOFIA,
  ALBERT,
  CELIE,
  MOOKIE,
  JOETTE
];

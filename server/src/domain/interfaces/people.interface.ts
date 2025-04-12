import { Movie } from "./movies.interface";

export interface Person {
  name: string;
  id: number;
}

export interface PersonDetails {
  name: string;
  birthYear: string;
  gender: string;
  hairColor: string;
  eyeColor: string;
  height: number;
  mass: number;
  movies: Movie[];
}
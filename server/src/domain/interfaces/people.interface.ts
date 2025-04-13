import { Resource } from "./resource.interface";

export interface PersonDetails {
  name: string;
  birthYear: string;
  gender: string;
  hairColor: string;
  eyeColor: string;
  height: number;
  mass: number;
  movies: Resource[];
}
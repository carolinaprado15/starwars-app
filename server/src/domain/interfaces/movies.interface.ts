import { Person } from "./people.interface";

export interface Movie {
  title: string;
  id: number;
}

export interface MovieDetails {
  title: string;
  openingCrawl: string;
  people: Person[]
}
import { Resource } from "./resource.interface";

export interface MovieDetails {
  title: string;
  openingCrawl: string;
  people: Resource[]
}
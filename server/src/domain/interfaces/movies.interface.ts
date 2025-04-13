import { IResource } from "./resource.interface";

export interface IMovieDetails {
  title: string;
  openingCrawl: string;
  people: IResource[]
}
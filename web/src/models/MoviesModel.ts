import { Resource } from "./ResourceModel";

export interface MovieDetails {
  title: string;
  openingCrawl: string;
  people: Resource[]
}
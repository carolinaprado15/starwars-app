import { MovieDetails } from "./MoviesModel";
import { PersonDetails } from "./PeopleModel";

export interface Resource {
  label: string;
  id: number;
  type: ResourceType;
}

export type ResourceType = "people" | "movies";

export type ResourceDetails = PersonDetails | MovieDetails;
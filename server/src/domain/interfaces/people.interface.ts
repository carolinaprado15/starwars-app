import { IResource } from "./resource.interface";

export interface IPersonDetails {
  name: string;
  birthYear: string;
  gender: string;
  hairColor: string;
  eyeColor: string;
  height: number;
  mass: number;
  movies: IResource[];
}
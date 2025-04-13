import { fetchResource, fetchUrl } from "../../infra/external/swapi";
import { IPersonDetails } from "../interfaces/people.interface";
import { IResource } from "../interfaces/resource.interface";

const getPeople = async (name: string): Promise<IResource[]> => {
  const data = await fetchResource("/people", name);

  return data.results.map((person: any) => ({
    label: person.name,
    id: person.url.split("/").slice(-2)[0],
    type: "people"
  }));
};

const getPersonWithMovies = async (id: number): Promise<IPersonDetails> => {
  const personData = await fetchResource(`/people/${id}`);

  const films = await Promise.all(
    personData.films.map((filmUrl: string) => fetchUrl(filmUrl))
  );

  return {
    name: personData.name,
    birthYear: personData.birth_year,
    gender: personData.gender,
    hairColor: personData.hair_color,
    eyeColor: personData.eye_color,
    height: personData.height,
    mass: personData.mass,
    movies: films.map((film) => ({
      label: film.title,
      id: film.url.split("/").slice(-2)[0],
      type: "movies"
    })),
  };
};

export { getPeople, getPersonWithMovies };

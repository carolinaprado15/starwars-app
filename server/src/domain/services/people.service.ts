import { fetchResource, fetchUrl } from "../../infra/external/swapi";
import { PersonDetails } from "../interfaces/people.interface";
import { Resource } from "../interfaces/resource.interface";

const getPeople = async (name: string): Promise<Resource[]> => {
  const data = await fetchResource("/people", name);

  return data.results.map((person: any) => ({
    label: person.name,
    id: person.url.split("/").slice(-2)[0],
    type: "people"
  }));
};

const getPersonWithMovies = async (id: number): Promise<PersonDetails> => {
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

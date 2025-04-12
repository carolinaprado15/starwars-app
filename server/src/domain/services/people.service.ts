import { fetchResource, fetchUrl } from "../../infra/external/swapi";
import { Person, PersonDetails } from "../interfaces/people.interface";

const getPeople = async (name: string): Promise<Person[]> => {
  const data = await fetchResource("/people", name);

  return data.results.map((person: any) => ({
    name: person.name,
    id: person.url.split("/").slice(-2)[0],
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
      title: film.title,
      id: film.url.split("/").slice(-2)[0],
    })),
  };
};

export { getPeople, getPersonWithMovies };

import { fetchResource } from "../../infra/external/swapi";

type Person = {
  name: string;
  gender: string;
  birthYear: string;
};

const getPeople = async (): Promise<Person[]> => {
  const data = await fetchResource("/people/");

  const people: Person[] = data.results.map((person: any) => ({
    name: person.name,
    gender: person.gender,
    birthYear: person.birth_year,
  }));

  return people;
};

export { getPeople };

import { fetchResource, fetchUrl } from "../../infra/external/swapi";
import { IMovieDetails } from "../interfaces/movies.interface";
import { IResource } from "../interfaces/resource.interface";

const getMovies = async (title?: string): Promise<IResource[]> => {
  const data = await fetchResource("/films", title);

  return data.results.map((film: any) => ({
    label: film.title,
    id: film.url.split("/").slice(-2)[0],
    type: "movies"
  }));
};

const getMovieWithPeople = async (id: number): Promise<IMovieDetails> => {
  const movieData = await fetchResource(`/films/${id}`);

  const characters = await Promise.all(
    movieData.characters.map((characterUrl: string) => fetchUrl(characterUrl))
  );

  return {
    title: movieData.title,
    openingCrawl: movieData.opening_crawl,
    people: characters.map((character) => ({
      label: character.name,
      id: character.url.split("/").slice(-2)[0],
      type: "people"
    })),
  };
};

export { getMovies, getMovieWithPeople };

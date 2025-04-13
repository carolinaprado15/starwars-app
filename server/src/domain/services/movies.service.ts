import { fetchResource, fetchUrl } from "../../infra/external/swapi";
import { MovieDetails } from "../interfaces/movies.interface";
import { Resource } from "../interfaces/resource.interface";

const getMovies = async (title?: string): Promise<Resource[]> => {
  const data = await fetchResource("/films", title);

  return data.results.map((film: any) => ({
    label: film.title,
    id: film.url.split("/").slice(-2)[0],
    type: "movies"
  }));
};

const getMovieWithPeople = async (id: number): Promise<MovieDetails> => {
  const movieData = await fetchResource(`/films/${id}`);

  const characters = await Promise.all(
    movieData.characters.map((characterUrl: string) => fetchUrl(characterUrl))
  );

  return {
    title: movieData.name,
    openingCrawl: movieData.opening_crawl,
    people: characters.map((character) => ({
      label: character.name,
      id: character.url.split("/").slice(-2)[0],
      type: "people"
    })),
  };
};

export { getMovies, getMovieWithPeople };

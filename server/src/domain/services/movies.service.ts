import { fetchResource, fetchUrl } from "../../infra/external/swapi";
import { Movie, MovieDetails } from "../interfaces/movies.interface";

const getMovies = async (title?: string): Promise<Movie[]> => {
  const data = await fetchResource("/films", title);

  return data.results.map((film: any) => ({
    title: film.title,
    id: film.url.split("/").slice(-2)[0],
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
      name: character.name,
      id: character.url.split("/").slice(-2)[0],
    })),
  };
};

export { getMovies, getMovieWithPeople };

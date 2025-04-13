import { useParams } from "react-router-dom";
import { Details } from "../../components"
import { useEffect, useState } from "react";
import { MovieDetails } from "../../models/MoviesModel";
import { useFetchResource } from "../../utils/hooks/useFetchResource";
import { getMovie } from "../../services/ApiService";
import "./Movie.css";

const Movie = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState<MovieDetails>({} as MovieDetails);
  const { loading, handleFetch } = useFetchResource(getMovie, setMovie);

  useEffect(() => {
    if (id) {
      handleFetch(id);
    }
  }, []);

  return (
    <Details
      title={movie.title}
      descriptionTitle="Opening Crawl"
      listTitle="Characters"
      resourceList={movie.people || []}
      loading={loading}
    >
      <p className="movie-info">
        {movie.openingCrawl}
      </p>
    </Details>
  )
}

export { Movie }
import { Button, Card } from "../../../../components";
import { useApp } from "../../../../context/App/useApp";
import { useFetchResource } from "../../../../utils/hooks/useFetchResource";
import { searchMovies, searchPeople } from "../../../../services/ApiService";
import "./SearchCard.css";

const SearchCard = () => {
  const {
    searchValue,
    resourceType,
    setSearchValue,
    setResourceType,
    setResourceList
  } = useApp();

  const serviceFn = resourceType == "people" ? searchPeople : searchMovies;
  const { loading, handleFetch } = useFetchResource(serviceFn, setResourceList);

  return (
    <Card>
      <div className="search-box">
        <h1 className="desc -small">
          What are you searching for?
        </h1>

        <div className="flex radio-row">
          {['people', 'movies'].map((option) => (
            <div key={option} className="radio">
              <input
                type="radio"
                id={option}
                value={option}
                checked={resourceType === option}
                onChange={(e) => setResourceType(e.target.value)}
              />
              <label htmlFor={option}>
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </label>
            </div>
          ))}
        </div>

        <div className="input-container">
          <input
            className="-small"
            type="text"
            id={searchValue}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder={
              resourceType === "people"
                ? "e.g. Chewbacca, Yoda, Boba Fett"
                : "e.g. A New Hope, The Empire Strikes Back"
            }
          />
        </div>

        <div className="button-container">
          <Button
            loading={loading}
            disabled={searchValue == "" || loading}
            onClick={() => handleFetch(searchValue)}
          >
            SEARCH
          </Button>
        </div>
      </div>
    </Card>
  )
}

export { SearchCard };
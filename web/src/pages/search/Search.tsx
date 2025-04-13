import { usePlatform } from "../../hooks/usePlatform";
import "./Search.css";
import { ResultsCard, SearchCard } from "./components";

const Search = () => {
  const platform = usePlatform();

  return (
    <div className="search-content">
      <SearchCard />
      {platform == "desktop" && <ResultsCard />}
    </div>
  )
}

export { Search };
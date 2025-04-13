import { usePlatform } from "../../utils/hooks/usePlatform";
import { ResultsCard, SearchCard } from "./components";
import { useApp } from "../../context/App/useApp";
import "./Search.css";

const Search = () => {
  const platform = usePlatform();
  const { resourceList } = useApp();

  return (
    <div className="search-content">
      { ((platform == "mobile" && !resourceList) || platform == "desktop") && <SearchCard /> }
      { ((platform == "mobile" && !!resourceList) || platform == "desktop") && <ResultsCard /> }
    </div>
  )
}

export { Search };
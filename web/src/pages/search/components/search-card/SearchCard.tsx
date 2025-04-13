import { useState } from "react";
import { Button, Card } from "../../../../components";
import "./SearchCard.css";

const SearchCard = () => {
  const [type, setType] = useState("people");
  const [searchValue, setSearchValue] = useState("");

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
                checked={type === option}
                onChange={(e) => setType(e.target.value)}
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
              type === "people"
                ? "e.g. Chewbacca, Yoda, Boba Fett"
                : "e.g. A New Hope, The Empire Strikes Back"
            }
          />
        </div>

        <div className="button-container">
          <Button disabled={searchValue == ""} onClick={() => console.log("oi")}>
            SEARCH
          </Button>
        </div>
      </div>
    </Card>
  )
}

export { SearchCard };
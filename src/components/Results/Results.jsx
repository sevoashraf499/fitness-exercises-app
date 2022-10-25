import "./styles/Results.css";

import { useNavigate } from "react-router-dom";

export default function Results({ results, searchValue }) {
  const navigate = useNavigate();

  function showDetails(result) {
    console.log(result);
    navigate("/exercise-details");
  }

  if (results.length !== 0) {
    return (
      <>
        <h1 id="results">Search Results</h1>

        <div className="resultsContainer">
          {results.map((result) => {
            return (
              <span
                className="searchItem"
                key={result.id}
                onClick={() => showDetails(result)}
              >
                <img className="icon" src={result.gifUrl} alt="GIF" />
                {result.name}
                <div className="buttonsContainer">
                  <button>{result.bodyPart}</button>
                  <button>{result.target}</button>
                </div>
              </span>
            );
          })}
        </div>
      </>
    );
  }
}

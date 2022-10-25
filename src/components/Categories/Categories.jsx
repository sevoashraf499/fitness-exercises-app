import "./styles/Categories.css";
import gymIcon from "../../assets/icons/gym.png";

import { fetchData, ApiOptions } from "../../helpers/fetchFunctions";
import { useState, useRef } from "react";

export default function Categories({
  categories,
  setFoundedFromSearch,
  setSearchValue,
  exercisesContainer,
}) {
  // -- fitst poblem why is it array and not a string ?
  const [categoryValue, setCategoryValue] = useState([]);
  const searchInput = useRef(null);

  async function searchWithCategories() {
    setCategoryValue(searchInput.current.childNodes[1]);
    setSearchValue("");
    setFoundedFromSearch([]);

    const ApiData = await fetchData(
      "https://exercisedb.p.rapidapi.com/exercises",
      ApiOptions
    );
    // console.log(ApiData);

    // filter data to get the resutls
    ApiData.filter((exercise) => {
      if (exercise.bodyPart.toLowerCase().includes(categoryValue)) {
        // -- second problem it gives me all exercises without do any filtering
        // -- third problem it works only for the first time
        setFoundedFromSearch((prev) => [...prev, exercise]);

        // -- fourth problem the footer doesn't change its position when I choose a category
        if (window.innerHeight <= 750) {
          exercisesContainer.current.style.height = "200vh";
        } else {
          exercisesContainer.current.style.height = "70vh";
        }
      }
    });
  }

  return (
    <>
      <div className="carousel">
        <div className="innerCarousel">
          {categories.map((item) => {
            return (
              <a
                href="#results"
                className="item"
                ref={searchInput}
                onClick={searchWithCategories}
                key={item}
              >
                <img className="icon" src={gymIcon} alt="gymIcon" />
                {item}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}

import "./styles/Search.css";

import { fetchData, ApiOptions } from "../../helpers/fetchFunctions";
import { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Categories from "../Categories/Categories";
import Results from "../Results/Results";
import ExerciseDetails from "../../pages/ExerciseDetails/ExerciseDetails";

export default function Search({ footerElement }) {
  const [searchValue, setSearchValue] = useState("");
  const [foundedFromSearch, setFoundedFromSearch] = useState([]);
  const [categories, setCategories] = useState([]);

  const exercisesContainer = useRef(null);

  // get exercises data from the API
  async function searchForExercises() {
    if (searchValue) {
      setFoundedFromSearch([]);

      const ApiData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        ApiOptions
      );

      // filter data to get the resutls
      ApiData.filter((exercise) => {
        if (
          exercise.name.toLowerCase().includes(searchValue) ||
          exercise.target.toLowerCase().includes(searchValue) ||
          exercise.equipment.toLowerCase().includes(searchValue) ||
          exercise.bodyPart.toLowerCase().includes(searchValue)
        ) {
          setFoundedFromSearch((prev) => [...prev, exercise]); // the poblem is here it gives me only the last element so I have to put them into an array

          if (window.innerHeight <= 750) {
            exercisesContainer.current.style.height = "200vh";
            footerElement.current.style.top = "310vh";
          } else if (window.innerHeight > 700) {
            exercisesContainer.current.style.height = "170vh";
            footerElement.current.style.top = "280vh";
          }
        }
      });
    }
  }

  // get categories
  useEffect(() => {
    async function fetchCategories() {
      setCategories(
        await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
          ApiOptions
        )
      );
    }

    fetchCategories();
  }, []);

  // for a good design
  useEffect(() => {
    if (!searchValue) {
      exercisesContainer.current.style.height = "70vh";
      footerElement.current.style.top = "180vh";
      setFoundedFromSearch([]);
    }
  }, [searchValue]);

  return (
    <>
      <div id="exercises" ref={exercisesContainer}>
        <h1>
          Awesome Exercises You <br /> Should Know
        </h1>

        <div className="searchContainer">
          <input
            type="text"
            placeholder="Search Exercises"
            onChange={(e) => {
              setSearchValue(e.target.value.toLowerCase());
            }}
            value={searchValue}
          />
          <button onClick={searchForExercises}>Search</button>
        </div>

        <Categories
          categories={categories}
          setFoundedFromSearch={setFoundedFromSearch}
          setSearchValue={setSearchValue}
          exercisesContainer={exercisesContainer}
        />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Results
                  results={foundedFromSearch}
                  searchValue={searchValue}
                />
              }
            />

            <Route path="/exercise-details" element={<ExerciseDetails />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

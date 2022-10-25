// import { useState } from "react";

export const ApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
  },
};

export const fetchData = async (url, options) => {
  // const [ApiData, setApiData] = useState([]);
  let res, data;
  res = await fetch(url, options);
  data = await res.json();

  // if (!localStorage.getItem("ApiData")) {
  //   res = await fetch(url, options);
  //   data = await res.json();
  //   localStorage.setItem("ApiData", JSON.stringify(data));
  // } else if (localStorage.getItem("ApiData")) {
  //   data = JSON.parse(localStorage.getItem("ApiData"));
  // } else {
  //   console.log("err");
  // }

  return data;
};

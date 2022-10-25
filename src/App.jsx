import "./styles/App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Search from "./components/Search/Search";
import Footer from "./components/Footer/Footer";

import { useRef } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const footer = useRef(null);

  return (
    <>
      {/* <BrowserRouter> */}
      <Header />
      <Home />
      <Search footerElement={footer} />
      <Footer footerElement={footer} />
      {/* </BrowserRouter> */}
    </>
  );
}

{
  /*

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/" element={<Search />} />
</Routes>

*/
}

export default App;

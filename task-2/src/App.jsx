import React from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import NavBar from "./components/NavBar";
import HeaderCards from "./components/HeaderCards";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
const App = () => {
  return (
    <>
      <Header />
      <SearchBar />
      <NavBar />
      <HeaderCards />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </>
  );
};

export default App;

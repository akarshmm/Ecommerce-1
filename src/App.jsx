import React from "react";
import Navbar from "./Navbar/Navbar.jsx";
import Hero from "./Hero/Hero.jsx";
import SectionFruit from "./SectionFruitBreakfast/SectionFruit.jsx";
import SectionBreakfast from "./SectionFruitBreakfast/SectionBreakfast.jsx";
import FeatureSection from "./FeatureSection/FeatureSection.jsx";
import NewsLetter from "./NewsLetter/NewsLetter.jsx";
import Categories from "./Categories/Categories.jsx";

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Categories />
      <SectionFruit />
      <SectionBreakfast />
      <NewsLetter />
      <FeatureSection />{" "}
    </main>
  );
};

export default App;

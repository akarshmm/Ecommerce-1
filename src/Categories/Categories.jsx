import React from "react";
import data from "./Categories.js";
import Categoriecard from "./Categorie_card.jsx";

const Categories = () => {
  return (
    <div className="container pt-16">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grids-cols-4 gap-4">
        {data.map((item) => (
          <Categoriecard
            key={id}
            name={item.name}
            img={item.img}
            count={item.count}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;

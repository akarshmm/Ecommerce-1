import React from "react";
import images_4 from "/assets/images4.jpg";
import ProductCard from "../Product/ProductCard.jsx";
import FruitVegData from "./FruiVegData.js";

const SectionBreakfast = () => {
  return (
    <div className="container pt-16 ">
      <div className="lg:flex justify-between items-center">
        <div>
          <h3 className="font-medium text-2xl">Breakfast & Diary</h3>
          <p className="text-gray-500 mt-2">
            Best Qaulity Breakfast Online From Big Basket Stop near You...{" "}
          </p>
        </div>
        <div className="space-x-4 mt-8 lg:mt-0">
          <button className="feature_btn">Eggs & Diary</button>
          <button className="text-gray-400 hover:text-accent">Pizza</button>
          <button className="text-gray-400 hover:text-accent">Snacks</button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
        <div>
          <img
            src={images_4}
            alt="Banner"
            className="w-full h-full object-cover"
          />
        </div>

        {FruitVegData.map((items) => (
          <ProductCard
            key={items.id}
            img={items.img}
            name={items.name}
            price={items.price}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionBreakfast;

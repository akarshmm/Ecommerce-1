import React from "react";
import ProductCard from "../Product/ProductCard.jsx";
import FruitVegData from "./FruiVegData.js";
import images_4 from "/assets/images4.jpg";

const SectionFruit = () => {
  return (
    <div className="container pt-16 ">
      <div className="lg:flex justify-between items-center">
        <div>
          <h3 className="font-medium text-2xl">Fruits & Vegetable</h3>
          <p className="text-gray-500 mt-2">
            Buy farm fresh fruits and vegetables online at best price
          </p>
        </div>
        <div className="space-x-4 mt-8 lg:mt-0">
          <button className="feature_btn">Fruits</button>
          <button className="text-gray-400 hover:text-accent">
            Vegetables
          </button>
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

export default SectionFruit;

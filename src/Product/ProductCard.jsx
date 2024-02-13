import React from "react";
import { AiFillStar, AiOutlineStar, AiOutlineShopping } from "react-icons/ai";

const ProductCard = (props) => {
  const { img, name, price } = props;
  return (
    <div className="border border-gray-400 hover:scale-105 transition-transform rounded-lg relative">
      <img src={img} alt={name} />
      <div className="space-y-2 relative p-4">
        <div className="text-yellow-500 flex gap-[2px] text-[20px]">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
        </div>
        <h3 className="font-medium">{name}</h3>
        <h3 className="text-2xl font-medium text-red-600"> {price}</h3>
        <div className="absolute -top-4 right-2 bg-accent text-white text-[20px] w-[50px] h-[50px] rounded-full grid place-items-center cursor-pointer">
          <AiOutlineShopping />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

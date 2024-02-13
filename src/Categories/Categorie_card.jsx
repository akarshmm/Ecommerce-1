import React from "react";
import PropTypes from "prop-types";

const Categorie_card = (props) => {
  const { img, name, count } = props;
  return (
    <div className="border border-gray-400 hover:border-gray-300 hover:scale-125 transition rounded-lg mt-8">
      <div className="flex justify-between items-center p-6">
        <div className="space-y-4">
          <h3 className="font-medium text-xl">{name}</h3>
          <p className="text-gray-500 ">{count}</p>
        </div>
        <img className="w-[100px]" src={img} alt={name} />
      </div>
    </div>
  );
};
// PropTypes
Categorie_card.propTypes = {
  img: PropTypes.string.isRequired, // img prop is required and should be a string
  name: PropTypes.string.isRequired, // name prop is required and should be a string
  count: PropTypes.number.isRequired, // count prop is required and should be a number
};
export default Categorie_card;

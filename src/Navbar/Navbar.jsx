import React from "react";
import Cart from "../Cart/Cart";
import { RiShoppingBagLine } from "react-icons/ri";
import { AiOutlineUserAdd } from "react-icons/ai";
import { TbWorldSearch } from "react-icons/tb";

const Navbar = () => {
  return (
    <div className="container hidden lg:block">
      <div className="flex justify-between items-center pt-8">
        {/* <h1 className="flex-4xl font-medium "> LOGO </h1> */}
        <div className="flex-4xl font-medium hover:border-cyan-500">
          <img src="assets/icon/One.png" alt="logo" srcset="" />
        </div>
        <div className="relative w-full max-w-[500px]">
          <input
            className="bg-[#f2f4f5] bottom-none outline-none px-6 py-3 rounded-[30px] w-full"
            type="text"
            placeholder="search.."
          />
          <TbWorldSearch
            onClick={() => {}}
            className="absolute top-0 mr-5 mt-4 text-gray-500 right-2 hover:active:bg-blue-700"
            size={20}
          />
        </div>
        <div className="flex gap-4">
          <div className="icon_wrapper">
            <AiOutlineUserAdd />
          </div>
          <div className="icon_wrapper">
            <RiShoppingBagLine />
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

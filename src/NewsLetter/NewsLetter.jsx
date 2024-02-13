import React from "react";
import { LuMailOpen } from "react-icons/lu";

const NewsLetter = () => {
  return (
    <div className="bg-accentDark mt-16">
      <div className="container py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white">
        <LuMailOpen className="text-[60px] " />
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold">
            Signup To our Newsletter
          </h3>
          <p>..... and recive $20 coupon for first Shopping</p>
        </div>
      </div>
      <div className="w-full max-w[500px] relative">
        <input
          className="py-4 px-6 w-full rounded-full"
          placeholder="Email"
          type="text"
        />
        <button className="bg-accentDark absolute top-[50%] right-2 translate-y-[50%] py-2 px-4 rounded-full hover:bg-accent">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;

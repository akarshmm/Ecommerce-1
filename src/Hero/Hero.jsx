import React from "react";
import { BsArrowRight } from "react-icons/bs";
const Hero = () => {
  return (
    <div className="container pt-8">
      <div className="grid xl:grid-flow-col-2 gap-8">
        <div className="relative xl:col-span-2 xl:row-start-1 xl:row-end[-1]">
          <img
            src="/assets/images4.jpg"
            alt="Banner_img"
            className="w-full h-full object-cover rounded-t-lg border-r-3"
          />
          <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -transalate-y-[50% sm:space-y-4] text-cyan-600">
            <p className="text-2xl hidden sm:block">
              100% natural Dry Fruits ,
            </p>
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-red-400">
              Dried Fruits Best Quality
            </h2>
            <p className="text-gray-500 text-xl pt-4 sm:pt-8">Starting At</p>
            <div className="font-medium text-red-600 text-2xl sm:text-4xl sm:pb-8 pb-4">
              $80
            </div>
            <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center gap-4 px-4py-2 text-[14px] sm:px-6 sm:py-4 cursor-pointer">
              Shop Now
              <BsArrowRight />
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="/assets/cashew.jpg"
            alt="hero_img"
            srcset=""
          />
          <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2">
            <h2 className="text-2xl sm:text-2xl font-bold top-8 text-cyan-300"></h2>
            {/* <p className="text-white text-xl pt-4">starting @</p> */}
            <div className="font-medium text-pink-400  text-2xl sm:text-4xl pb-8"></div>
            <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center gap-4 px-4py-2 text-[14px] sm:px-6 sm:py-4 cursor-pointer">
              Shop Now
              <BsArrowRight className=""/>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="/assets/nut2.jpg"
            alt="hero_img"
            srcset=""
          />
          <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2">
            <h2 className="text-2xl sm:text-2xl font-bold top-8 text-cyan-100">Top Nuts</h2>
            {/* <p className="text-white text-xl pt-4">starting @</p> */}
            <div className="font-medium text-pink-400  text-2xl sm:text-4xl pb-8"></div>
            <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center gap-4 px-4py-2 text-[14px] sm:px-6 sm:py-4 cursor-pointer">
              Shop Now
              <BsArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

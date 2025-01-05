import React, { useState } from "react";
import { HiOutlineTruck } from "react-icons/hi";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      tagline: "Crispy, Every Bite Tasty",
      title: "AWESOME\nDELICIOUS\nPIZZA",
      buttonText: "Order Now",
      bgImage: "./slider2.jpg",
    },
    {
      tagline: "Fresh & Hot",
      title: "PERFECT\nITALIAN\nPIZZA",
      buttonText: "Order Now",
      bgImage: "./slider3n.png",
    },
  ];

  return (
    <div className="relative h-[600px] overflow-hidden z-20">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 
            ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
          style={{
            backgroundImage: `url(${slide.bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 ">
            <div className="max-w-7xl mx-40 px-6 h-full">
              <div className="flex items-center h-full">
                <div className="text-white max-w-2xl">
                  <p className="text-lg mb-[-20px] font-main text-[#FFC222]">
                    {slide.tagline}
                  </p>
                  <h1 className="text-[90px] font-bold mb-[-1px] whitespace-pre-line leading-tight font-main">
                    {slide.title}
                  </h1>
                  {/* <button
                    className="bg-[#00A149] text-white px-6 py-3 rounded-md font-main
                    hover:bg-green-700 transition-colors w-auto"
                  >
                    <span></span>
                  </button> */}
                  <button className="bg-[#00A149] text-white px-5 py-3 rounded-md font-main hover:bg-green-700 transition-colors w-36">
                    <span className="flex items-center justify-center gap-2">
                      <img src="./Icon.png" alt="" />
                      <span>{slide.buttonText}</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all
              ${index === currentSlide ? "bg-white w-8" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;

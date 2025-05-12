import React from "react";
import { TestimaionalsData } from "../../mockData/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { SlideDown } from "../../utility/animation";

const Testimationals = () => {
  const settings = {
    dots: true,
    arrows: true, // fixed from 'arrow' to 'arrows'
    infinite: true,
    speed: 500,
    slidesToShow: 3, // added missing property
    slidesToScroll: 1,
    autoplay: true, // added to enable autoplay
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true, // fixed typo from 'Foucs' to 'Hover'
    pauseOnFocus: true, // fixed typo from 'Foucs' to 'Focus'
    responsive: [
      {
        breakpoint: 1024, // fixed from 'breakpoints' to 'breakpoint'
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640, // fixed from 'breakpoints' to 'breakpoint'
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-16 mb-10">
      <div className="container">
        {/* header section */}
        <div className="md:text-left mb-10 max-w-[500px] space-y-2 mr-auto text-center ">
          <motion.h1
            variants={SlideDown(0.6)}
            initial="hidden"
            whileInView="visible"
            className="text-4xl font-bold"
          >
            What Are The Customers Saying About Us
          </motion.h1>
        </div>

        {/* Testimonials Cards */}
        <div>
          <Slider {...settings}>
            {TestimaionalsData.map((data) => (
              <div
                variants={SlideDown(0.8)}
                initial="hidden"
                whileInView="visible"
                key={data.id}
                className="px-4"
              >
                {/* Added padding between slides */}
                <div className="p-6 rounded-lg shadow-md h-full bg-[#FFF7ED]">
                  <div className="flex items-start space-x-4">
                    <img
                      src={data.img}
                      alt={data.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold">{data.name}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-2">{data.text}</p>
                  <p>⭐⭐⭐⭐⭐</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimationals;

import React from "react";
import { FaPlay } from "react-icons/fa";
import HeroImg from "../../assets/dumbell.png";
import { motion } from "framer-motion";
import { SlideLeft } from "../../utility/animation";
import { SlideRight } from "../../utility/animation";

const Hero = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative py-14 md:py-0 items-center">
        {/* brandInfo */}
        <div className="flex justify-center flex-col py-14 md:py-0 max-md:z-10 lg:z-10">
          <motion.h1
            variants={SlideLeft(0.6)}
            initial="hidden"
            animate="visible"
            className="text-center md:text-left font-bold text-5xl lg:text-6xl font-playFair"
          >
            Gym Gives you the perfect
            <span className=" text-primary block">Health</span>
          </motion.h1>

          <motion.p
            variants={SlideLeft(0.8)}
            initial="hidden"
            animate="visible"
            className="text-center md:text-left text-gray-500"
          >
            Its a long established fact that a reader will be by readable
            content of page when are the best product
          </motion.p>
          <div className="flex justify-center md:justify-start items-center gap-5 mt-5 ">
            <motion.button
              variants={SlideLeft(1)}
              initial="hidden"
              animate="visible"
              className="p-2 font-semibold text-white bg-primary rounded-md hover:scale-110 transition-all duration-300"
            >
              Order Now
            </motion.button>
            <motion.button
              variants={SlideRight(1)}
              initial="hidden"
              animate="visible"
              className="flex justify-center items-center gap-1 font-semibold hover:text-primary transition-all duration-300"
            >
              <FaPlay />
              <span>Watch Now</span>
            </motion.button>
          </div>
        </div>

        {/* HeroImg */}
        <div>
          <motion.img
            initial={{ opacity: 0, x: -100 }}
            animate={{
              opacity: 1,
              rotate: 360,
              x: 0,
              transition: { duration: 1, delay: 0.6 },
            }}
            src={HeroImg}
            alt=""
            className="w-[320px] md:w-[550px] xl:w-[700px] drop-shadow-2xl max-md:mx-auto"
          />
        </div>
        <div className="hidden md:block -z-[8] w-[700px] h-[700px] bg-orange-50 -mt-[800px] -ml-[200px]"></div>
      </div>
    </section>
  );
};

export default Hero;

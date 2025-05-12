import React from "react";
import { motion } from "framer-motion";
import {
  SlideLeft,
  SlideRight,
  SlideUp,
  SlideDown,
} from "../../utility/animation";

const Discount = () => {
  return (
    <div className="container">
      <div className="bg-gray-50 w-full h-[600px] md:h-[550px] mt-52 rounded-md shadow-md flex justify-center ">
        <div className="w-[700px] mt-36 text-center">
          <motion.h1
            className="uppercase font-bold  text-3xl"
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Get 20% discount on your first order, Are you ready to buy
          </motion.h1>
          <motion.p
            variants={SlideUp(0.3)}
            initial="hidden"
            whileInView="visible"
            className="text-sm text-gray-400 mt-5"
          >
            We will make sure you grt the right and the best quality products{" "}
            for your workout
          </motion.p>
          <div className="m-5">
            <motion.button
              variants={SlideUp(0.3)}
              initial="hidden"
              whileInView="visible"
              className="bg-primary px-4 py-2 font-semibold rounded-md text-white m-5 hover:bg-white hover:text-primary transition-all duration-300 hover:shadow-md hover:shadow-primary"
            >
              Learn More
            </motion.button>
            <motion.button
              variants={SlideUp(0.6)}
              initial="hidden"
              whileInView="visible"
              className="bg-primary px-4 py-2 font-semibold rounded-md text-white hover:bg-white hover:text-primary transition-all duration-300 hover:shadow-md hover:shadow-primary"
            >
              Stay in touch
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;

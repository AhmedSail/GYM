import React from "react";
import BannerImg from "../../assets/2 (2).png";
import { SlideLeft, SlideRight } from "../../utility/animation";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section>
      <div className="container">
        <div className="bg-gray-50 w-full h-[900px] md:h-[650px] mt-52 rounded-md shadow-md grid grid-cols-1 md:grid-cols-2 p-10">
          <div>
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1 }}
              src={BannerImg}
              alt=""
            />
          </div>
          <div>
            <motion.h1
              variants={SlideRight(0.6)}
              initial="hidden"
              whileInView="visible"
              className="text-3xl md:text-6xl font-bold font-playFair md:mt-16 text-center md:text-start"
            >
              The Importants To Take Care Of Yourself
            </motion.h1>
            <motion.p
              variants={SlideRight(0.8)}
              initial="hidden"
              whileInView="visible"
              className="mt-10 text-gray-600 text-center md:text-start text-sm"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              doloribus eligendi itaque hic harum quae ipsum, quas repellat
              corporis nemo? Et ullam nisi qui impedit quaerat blanditiis vero
              quod nostrum aliquid? Laborum modi eveniet, libero culpa eum
              dolore, error aliquid itaque eaque illo at. Fugiat autem suscipit
              rerum libero minus?
            </motion.p>
            <motion.p
              variants={SlideRight(1)}
              initial="hidden"
              whileInView="visible"
              className="mt-10 text-gray-600 text-center md:text-start text-sm"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae nihil nemo, vel ipsum debitis libero vero accusamus
              veritatis dolorem amet?
            </motion.p>
            <motion.button
              variants={SlideRight(1.2)}
              initial="hidden"
              whileInView="visible"
              className="bg-primary text-white p-3 rounded-md font-semibold mt-10 hover:shadow-primary hover:shadow-lg hover:bg-gray-50 hover:text-primary transition-all duration-300 block mx-auto md:inline"
            >
              Explore Now
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

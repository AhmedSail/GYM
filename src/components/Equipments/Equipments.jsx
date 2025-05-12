import React from "react";
import { FaDumbbell } from "react-icons/fa";
import { GrYoga } from "react-icons/gr";
import { GiGymBag } from "react-icons/gi";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight } from "../../utility/animation";

const EquipmentsData = [
  {
    id: 1,
    title: "Yoga Equipments",
    p: "It a long established fact that a reader readable.It a long established fact that a reader readable",
    icon: <GrYoga />,
  },
  {
    id: 2,
    title: "Museles Equipments",
    p: "It a long established fact that a reader readable.It a long established fact that a reader readable",
    icon: <FaDumbbell />,
  },
  {
    id: 3,
    title: "Fitness Equipments",
    p: "It a long established fact that a reader readable.It a long established fact that a reader readable",
    icon: <GiGymBag />,
  },
];
const Equipments = () => {
  return (
    <div className="container mt-80">
      <div className="grid grid-cols-1 md:grid-cols-4 ml-24">
        <motion.div
          variants={SlideRight(0.2)}
          initial="hidden"
          whileInView="visible"
          className="shadow-md h-[350px] w-56 p-5 rounded-md bg-gray-50 hover:shadow-xl hover:bg-white transition-all duration-300 mb-10"
        >
          <h1 className="font-semibold text-5xl">Whats We Offer For You</h1>
          <p className="text-gray-400 mt-5">
            It a long established fact that a reader readable.It a long
            established fact that a reader readable
          </p>
        </motion.div>
        {EquipmentsData.map((item) => (
          <motion.div
            variants={SlideRight(0.4 * item.id)}
            initial="hidden"
            whileInView="visible"
            className="shadow-md h-[350px] w-56 p-5 rounded-md bg-gray-50 hover:shadow-xl  hover:bg-white  transition-all duration-300 mb-10"
          >
            <i className="text-3xl">{item.icon}</i>
            <div className="mt-10">
              <h1 className="font-semibold text-3xl">{item.title}</h1>
              <p className="text-gray-400 mt-5">
                It a long established fact that a reader readable.It a long
                established fact that a reader readable
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Equipments;

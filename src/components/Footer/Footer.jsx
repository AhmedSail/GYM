import React from "react";
import {
  FaDumbbell,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaSearchLocation,
  FaTwitter,
} from "react-icons/fa";
import { NavbarMenu } from "../../mockData/data";
import { motion } from "framer-motion";
import { SlideLeft, SlideUp } from "../../utility/animation";
const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-gray-950 to-gray-900 rounded-t-3xl">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-4 pt-10">
          <div>
            <motion.div
              initial={{ y: -20, scale: 0.5 }}
              animate={{ y: 20, scale: 1.5 }}
              whileInView={{ y: 0, scale: 1 }}
              transition={{ delay: 0.1, duration: 1 }}
              className="w-52 md:ml-0  flex justify-start items-center text-2xl mb-2"
            >
              <FaDumbbell className="font-bold text-white" />
              <p className="font-bold text-white">CODERS</p>
              <p className="text-secondary font-bold ">GYM</p>
            </motion.div>
            <div>
              <motion.p
                variants={SlideLeft(0.1)}
                initial="hidden"
                whileInView="visible"
                className="text-gray-300"
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. labore
                consectetur! Distinctio, aliquam non. Ipsum ducimus aliquid
                ipsam quibusdam repellat exercitationem, consequuntur rem est
                eum. Similique aliquam minus ducimus!
              </motion.p>
            </div>
            <div className="pb-11">
              <ul className="flex justify-start items-center gap-4 text-2xl mt-7">
                <motion.li
                  variants={SlideUp(0.1)}
                  initial="hidden"
                  whileInView="visible"
                >
                  <a
                    href="https://www.facebook.com/login"
                    className="text-white hover:text-[#1877F2] transition-colors duration-300"
                  >
                    <FaFacebook />
                  </a>
                </motion.li>
                <motion.li
                  variants={SlideUp(0.3)}
                  initial="hidden"
                  whileInView="visible"
                >
                  <a
                    href="https://www.instagram.com/accounts/login/"
                    className="text-white hover:text-[#E4405F] transition-colors duration-300"
                  >
                    <FaInstagram />
                  </a>
                </motion.li>
                <motion.li
                  variants={SlideUp(0.5)}
                  initial="hidden"
                  whileInView="visible"
                >
                  <a
                    href="https://twitter.com/i/flow/login"
                    className="text-white hover:text-[#1DA1F2] transition-colors duration-300"
                  >
                    <FaTwitter />
                  </a>
                </motion.li>
                <motion.li
                  variants={SlideUp(0.7)}
                  initial="hidden"
                  whileInView="visible"
                >
                  <a
                    href="https://www.linkedin.com/login"
                    className="text-white hover:text-[#0A66C2] transition-colors duration-300"
                  >
                    <FaLinkedin />
                  </a>
                </motion.li>
              </ul>
            </div>
          </div>
          <div className=" md:text-center  mb-10 md:mb-0">
            <motion.h1
              initial={{ y: -20, scale: 0.5 }}
              animate={{ y: 20, scale: 1.5 }}
              whileInView={{ y: 0, scale: 1 }}
              transition={{ delay: 0.1, duration: 1 }}
              className="font-semibold text-white text-xl"
            >
              Important Links
            </motion.h1>
            <ul className="space-y-2 mt-4">
              {NavbarMenu.map((item) => (
                <motion.li
                  variants={SlideUp(0.1 * item.id)}
                  initial="hidden"
                  whileInView="visible"
                  key={item.id}
                  className="text-white font-semibold"
                >
                  <a href={item.link}>{item.title}</a>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className=" md:text-center  mb-10 md:mb-0">
            <motion.h1
              initial={{ y: -20, scale: 0.5 }}
              animate={{ y: 20, scale: 1.5 }}
              whileInView={{ y: 0, scale: 1 }}
              transition={{ delay: 0.1, duration: 1 }}
              className="font-semibold text-white text-xl"
            >
              Company
            </motion.h1>
            <ul className="space-y-2 mt-4">
              <motion.li
                variants={SlideUp(0.1)}
                initial="hidden"
                whileInView="visible"
                className="text-white font-semibold"
              >
                Our Service
              </motion.li>
              <motion.li
                variants={SlideUp(0.3)}
                initial="hidden"
                whileInView="visible"
                className="text-white font-semibold"
              >
                Contact Us
              </motion.li>
              <motion.li
                variants={SlideUp(0.5)}
                initial="hidden"
                whileInView="visible"
                className="text-white font-semibold"
              >
                Privacy Policy
              </motion.li>
            </ul>
          </div>
          <div className=" md:text-center  mb-10 md:mb-0">
            <motion.h1
              initial={{ y: -20, scale: 0.5 }}
              animate={{ y: 20, scale: 1.5 }}
              whileInView={{ y: 0, scale: 1 }}
              transition={{ delay: 0.1, duration: 1 }}
              className="font-semibold text-white text-xl"
            >
              Resource
            </motion.h1>
            <ul className="space-y-2 mt-4">
              <motion.li
                variants={SlideUp(0.1)}
                initial="hidden"
                whileInView="visible"
                className="text-white font-semibold"
              >
                Products
              </motion.li>
              <motion.li
                variants={SlideUp(0.3)}
                initial="hidden"
                whileInView="visible"
                className="text-white font-semibold"
              >
                Yoga
              </motion.li>
              <motion.li
                variants={SlideUp(0.5)}
                initial="hidden"
                whileInView="visible"
                className="text-white font-semibold"
              >
                Muscless
              </motion.li>
            </ul>
          </div>
        </div>
        {/* copy right */}
        <div className="text-center py-6 border-t-2 border-gray-300/100">
          <motion.div
            initial={{ y: -20, scale: 1.5 }}
            animate={{ y: 20, scale: 0.5 }}
            whileInView={{ y: 0, scale: 1 }}
            transition={{ delay: 0.1, duration: 1 }}
          >
            <span className="text-gray-400">©copyright 2025</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

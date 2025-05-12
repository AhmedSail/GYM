import React, { useState } from "react";
import { ProductsData } from "../../mockData/data";
import { motion } from "framer-motion";
import { SlideLeft } from "../../utility/animation";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", "Yoga", "Fitness", "Muscles"];
  const filteredCards =
    activeTab == "All"
      ? ProductsData
      : ProductsData.filter((cards) => cards.category == activeTab);
  return (
    <div>
      <div className="container my-12 md:my-28">
        {/* button Section */}
        <div>
          {tabs.map((tab, index) => (
            <motion.button
              variants={SlideLeft(0.2 * index)}
              initial="hidden"
              whileInView="visible"
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-md mx-2 ml-0 ${
                activeTab == tab
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {tab}
            </motion.button>
          ))}
        </div>
        {/* card section  */}
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
          {filteredCards.map((card) => (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="p-4 border rounded shadow-sm space-y-2"
            >
              <img
                src={card.Img}
                alt=""
                className="h-[240px] w-full object-cover"
              />
              <p className="text-xl font-semibold">{card.titel}</p>
              <p className="text-gray-600">{card.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;

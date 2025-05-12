import React from "react";
import { NavbarMenu } from "../../mockData/data";
import { motion, AnimatePresence } from "framer-motion";

const ResponsiveMenu = ({ isOpen, setIsOpen }) => {
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* القائمة نفسها */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 w-full bg-white shadow-lg z-[999]"
          >
            <div className="container mx-auto p-4 bg-primary">
              <ul className="flex flex-col gap-4">
                {NavbarMenu.map((item) => (
                  <motion.li
                    key={item.id}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="py-2 border-b border-gray-100 last:border-b-0"
                  >
                    <a
                      href={item.link}
                      className="text-white font-semibold hover:text-black transition-colors duration-300 flex items-center"
                      onClick={closeMenu} // إغلاق القائمة عند النقر على رابط
                    >
                      {item.title}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;

import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        onClick={scrollToTop}
        className={`bg-primary text-white p-4 rounded-full shadow-lg transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] transform ${
          isVisible
            ? "opacity-100 translate-y-0 hover:scale-110 hover:shadow-md hover:shadow-primary hover:bg-white hover:text-primary"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <FaArrowUp className="text-lg" />
      </button>
    </div>
  );
};

export default BackToTopButton;

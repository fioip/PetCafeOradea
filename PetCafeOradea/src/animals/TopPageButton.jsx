import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const TopPageButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300); // Afișează butonul după 300px
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isVisible) return null; // Nu afișa butonul dacă nu este vizibil

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-black text-white p-32 rounded-full shadow-lg z-50 hover:bg-gray-700 transition-transform transform hover:scale-110"
      aria-label="Scroll to top"
    >
      <FaArrowUp className="w-6 h-6" />
    </button>
  );
};

export default TopPageButton;
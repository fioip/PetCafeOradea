import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const mainContent = document.querySelector('.overflow-auto'); // Selectează div-ul cu conținut scrollabil
    if (mainContent) {
      mainContent.scrollTo(0, 0); // Derulează la începutul paginii
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;

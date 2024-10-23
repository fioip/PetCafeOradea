import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Galerie from "./components/Galerie";
import Home from "./components/Home";
import Meniu from "./components/Meniu";
import Navbar from "./components/Navbar";
import Mira from "./animals/mira";
import AnimalPage from "./animals/AnimalPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="flex h-screen">
      <Navbar />
      <div className="flex-1 flex flex-col overflow-auto">
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meniu" element={<Meniu />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/galerie/Mira' element={<Mira />} />
          <Route path="/animal/:animal" element={<AnimalPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

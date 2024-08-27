import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Galerie from "./components/Galerie";
import Home from "./components/Home";
import Meniu from "./components/Meniu";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex h-screen">
      <Navbar />
      <div className="flex-1 flex flex-col overflow-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meniu" element={<Meniu />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

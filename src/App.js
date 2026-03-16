import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Innovative from "./pages/Innovative";
import Partners from "./pages/Partners";
import Projects from "./pages/Projects";
import Newpage from "./pages/Newpage";
import Services from "./pages/Services";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <Routes>
        <Route path="/*" element={<NotFound />}></Route>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/innovative" element={<Innovative />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/odf" element={<Newpage />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

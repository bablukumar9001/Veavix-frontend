import Navbar from "./components/Navbar";

import Services from "./components/Services";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import Technologies from "./components/Technologies";
import ContactForm from "./components/contact/ContactForm";
import MainIndex from "./components/MainIndex";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />

        <Routes>
          <Route path="/" element={<MainIndex />}></Route>
          <Route path="technologies" element={<Technologies />}></Route>
          <Route path="/Services" element={<Services />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/ContactForm" element={<ContactForm />}></Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};
export default App;

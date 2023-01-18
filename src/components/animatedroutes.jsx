import React from "react";
import About from "../pages/about";
import Home from "../pages/home";
import Services from "../pages/service";
import Contact from "../pages/contact";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion"; //dist/framer-motion'

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;

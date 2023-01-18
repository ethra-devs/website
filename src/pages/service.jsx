import Hero from "../components/hero";
import { BackButton } from "../components/backButton";
import { ProductDetails } from "../components/productDetails";

import { motion } from "framer-motion";
import { Container } from "../components/container";

import { Chrono } from "react-chrono";
import { Box } from "@chakra-ui/react";

import { ServicesTimeline } from "../components/servicesTimeline";

const data = [{ first: "service" }];

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <BackButton />
      <Container>
        <Hero data={data} />
        <ServicesTimeline />
      </Container>
    </motion.div>
  );
};

export default Services;

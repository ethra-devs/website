import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./components/animatedroutes";
import Footer from "./components/footer";

import { CTA } from "./components/CTA";
import Action from "./components/actions";
import { Scene } from "./components/scene";

import { CTAButton } from "./components/ctaButton";
import { Box } from "@chakra-ui/react";

const App = () => (
  <BrowserRouter>
    <Action />
    <AnimatedRoutes />
    <Scene />
    <CTAButton />
    <Footer />
    <Box bg={"blackAlpha.900"} zIndex={-1} width={"100vw"} height={"100vh"}>
      <div class="bgContainer">
        <div class="lines">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>
    </Box>
  </BrowserRouter>
);
export default App;

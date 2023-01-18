import { Box } from "@chakra-ui/react";
import Action from "../components/actions";
import { CTA } from "../components/CTA";

const Home = () => (
  <Box
    margin={"auto"}
    width={"50vw"}
    height={"50vh"}
    position={"absolute"}
    zIndex={3}>
    <CTA />
  </Box>
);
export default Home;

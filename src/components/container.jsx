import { Box, Center } from "@chakra-ui/react";

export const Container = ({ children }) => (
  <Box
    width={["100vw", "60vw"]}
    height={"100vh"}
    rounded="md"
    borderColor={"blue.200"}
    borderWidth={"1px"}
    bg={"blackAlpha.300"}
    zIndex={5}
    overflow={"scroll"}
    // display={"fixed"}
    position={"absolute"}>
    <Box width={"100%"} margin={"auto"}>
      {children}
    </Box>
  </Box>
);

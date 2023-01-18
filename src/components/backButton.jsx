import { FcHome } from "react-icons/fc";

import { Box, Button, IconButton, Link } from "@chakra-ui/react";
import { Link as RLink } from "react-router-dom";

export const BackButton = () => (
  <Box position={"fixed"} bottom={0} right={0} p={5} zIndex={5}>
    <Link as={RLink} to={"/"}>
      <IconButton
        icon={
          <FcHome
            fontSize={"45px"}
            fill={"green.200"}
            variant={"outline"}
            _hover={{ bg: "blue.200" }}
          />
        }
      />
    </Link>
  </Box>
);

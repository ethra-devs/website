import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Flex,
  Link,
  IconButton,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaTelegram, FaTwitter, FaMedium } from "react-icons/fa";

export default function Footer() {
  return (
    <Box width={"100vw"} height={"100vh"} position={"absolute"}>
      <Box position={"absolute"} top={0} left={0} ml={3} mt={3} zIndex={5}>
        <Box
          bg={"whiteAlpha.200"}
          border={"1px solid"}
          borderColor={"rgba(22,10,2,0.5)"}
          rounded={"md"}
          zIndex={5}
          pointerEvents={"all"}>
          <Stack direction={"row"} spacing={6} justify={"top"} align={"top"}>
            <Link isExternal href={"https://twitter.com/TERATECH_ETH"}>
              <IconButton
                label={"Twitter"}
                variant={"social"}
                icon={<FaTwitter fontSize={"25px"} />}
                color="green.300"
                _hover={{ color: "blue.200" }}
              />
            </Link>
            <Link
              isExternal
              href={"https://medium.com/@TERATECH/teratech-85ad0a639817"}>
              <IconButton
                label={"Medium"}
                variant={"social"}
                icon={<FaMedium fontSize={"25px"} />}
                color="green.300"
                _hover={{ color: "blue.200" }}
              />
            </Link>
            {/* <IconButton
              label={"Telegram"}
              variant={"social"}
              href={"#"}
              icon={<FaTelegram fontSize={"25px"} />}
              color="green.300"
              _hover={{ color: "blue.200" }}
            /> */}
          </Stack>
        </Box>
      </Box>
      <Flex width={"100%"} justifyContent={"center"}>
        <Box
          bg={"whiteAlpha.700"}
          border={"0.5px solid"}
          borderColor={"rgba(22,10,2,0.5)"}
          position="absolute"
          bottom={0}
          rounded={"full"}
          zIndex={2}
          mb={3}>
          <Container
            as={Stack}
            py={0}
            direction={{ base: "column", md: "row" }}
            spacing={2}
            justify={{ base: "top", md: "space-between" }}
            align={{ base: "top", md: "top" }}>
            <Text color="black" fontWeight={"heavy"} fontSize={"12px"}>
              © 2023 &nbsp;
              <Link to="/">ETHRA &nbsp;</Link>
              all rights reserved.
            </Text>
          </Container>
        </Box>
      </Flex>
    </Box>
  );
}

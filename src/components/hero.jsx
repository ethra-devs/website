import {
  Box,
  Container,
  Heading,
  Center,
  Text,
  Button,
  Stack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Hero(props) {
  return (
    <Stack
      direction={"row"}
      display={"block"}
      textAlign={"center"}
      justifyContent={"center"}
      align={"center"}
      spacing={{ base: 8, md: "200px" }}
      pt={5}
      pb={2}
      px={10}>
      {props.data.map((d) => (
        <Button
          rounded={"lg"}
          _hover={{ bg: "blue.200" }}
          bg={"null"}
          borderColor={"green.300"}
          borderWidth={"1px"}
          zIndex={5}>
          <HeroBanner {...d} />
        </Button>
      ))}
    </Stack>
  );
}

const HeroBanner = (props) => (
  <Heading
    minWidth={"200px"}
    fontFamily="Helvetica"
    fontWeight={100}
    fontSize={{ base: "3xl", sm: "4xl", md: "4xl" }}
    color={"blue.200"}
    lineHeight={"110%"}
    style={{
      color: "#fff",
      textShadow:
        "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #F0FF4, 0 0 40px #319795, 0 0 50px #319795, 0 0 60px #319795, 0 0 70px #319795",
    }}>
    <Text
      fontFamily="Helvetica"
      as={"span"}
      color={"blue.200"}
      _hover={{ color: "gray.700" }}>
      {props.first} <br />
    </Text>
    {props.second}
  </Heading>
);

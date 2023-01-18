import {
  Box,
  Heading,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsPerson } from "react-icons/bs";
import { FcCommandLine, FcBusinessman, FcNeutralTrading } from "react-icons/fc";
import { FiServer } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

export const AboutUs = () => (
  <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
    <Heading
      color={"blue.500"}
      textAlign={"center"}
      fontSize={"4xl"}
      py={10}
      fontWeight={"bold"}>
      Best-in-class blockchain security solutions and smart contract audits.
    </Heading>
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
      <StatsCard
        title={"Audits"}
        stat={"500+"}
        icon={<FcNeutralTrading size={"3em"} />}
      />
      <StatsCard
        title={"Solidity Engineers"}
        stat={"10"}
        icon={<FcBusinessman size={"3em"} />}
      />
      <StatsCard
        title={"Years Experience"}
        stat={"5"}
        icon={<FcCommandLine size={"3em"} />}
      />
    </SimpleGrid>
    <Box
      h={"45vh"}
      w={"100%"}
      my={20}
      bg={useColorModeValue("whiteAlpha.500", "blackAlpha.500")}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      shadow={"xl"}
      rounded={"lg"}>
      <Heading
        color={useColorModeValue("gray.100", "blue.500")}
        fontWeight={200}
        p={10}>
        The ETHRA automated verification protocol comprehensively audits your
        contracts, ensuring integrity and security.
        <br />
        Leveraging a unique suite of cutting-edge tools, our team of experienced
        developers identifies and mitigates vulnerabilities before they can be
        exploited. <br />
        Trust ETHRA to protect your assets and ensure the smooth functioning of
        your smart contract.
      </Heading>
    </Box>
  </Box>
);

const StatsCard = (props) => {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}>
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={"medium"} isTruncated color={"blue.600"}>
            {title}
          </StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"} color={"blue.300"}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={"auto"}
          color={useColorModeValue("gray.800", "gray.200")}
          alignContent={"center"}>
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
};

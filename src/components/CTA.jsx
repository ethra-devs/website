import {
  Container,
  Stack,
  Heading,
  Button,
  Center,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Table,
  Thead,
  Tbody,
  Tfoot,
  IconButton,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  useToast,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
export const CTA = () => {
  const words = ["SCALES", "PROTECTS", "VERIFIES"];
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [opacity, setOpacity] = useState(1);
  let wordIndex = 0;
  useEffect(() => {
    const intervalId = setInterval(() => {
      setOpacity(0);
      setTimeout(() => {
        wordIndex = (wordIndex + 1) % words.length;
        setCurrentWord(words[wordIndex]);
        setOpacity(1);
      }, 300);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [words, wordIndex]);
  return (
    <Container zIndex={1} position="fixed" margin={10} ml={0} mt={60}>
      <Stack
        textAlign={"left"}
        align={"left"}
        spacing={{ base: 8, md: 10 }}
        pl={10}
        py={{ base: 20, md: 8 }}
        width={"80vw"}
        border={"1px solid black"}
        bg={"blackAlpha.200"}
        rounded={"lg"}>
        <Heading
          color={"green.500"}
          fontWeight={300}
          fontSize={{ base: "3xl", sm: "4xl", md: "70px" }}
          lineHeight={"110%"}
          display={"flex"}
          width={"80%"}>
          ETHRA SCALES <br />
          {/* <span
            style={{
              opacity: opacity,
              display: "inline-flex",
              marginLeft: 10,
              marginRight: 10,
            }}>
            {currentWord}
          </span> */}
          YOUR BUSINESS
        </Heading>
        <Text
          width={"50%"}
          position={"relative"}
          as={"span"}
          color={"blue.300"}
          fontSize={"20px"}>
          The most critical aspect of blockchain-integrated business is
          security, and reliable smart contracts are the foundation upon which
          forward-thinking businesses scale.
        </Text>
        <Tabs
          variant="enclosed"
          zIndex={10}
          width={"30vw"}
          bg={useColorModeValue("gray.300", "transparent")}
          fontSize={"20"}
          isFitted>
          <TabList>
            <Tab>Max Txn</Tab>
            <Tab>Max Wallet</Tab>
            <Tab>Buy/Sell Tax</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>
                <Center>44,444,444</Center>
              </p>
            </TabPanel>
            <TabPanel>
              <p>
                <Center>88,888,888</Center>
              </p>
            </TabPanel>
            <TabPanel>
              <TableContainer>
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>Marketing</Th>
                      <Th>Development</Th>
                      <Th>Liquditiy</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td isNumeric>1%</Td>
                      <Td isNumeric>1%</Td>
                      <Td isNumeric>1%</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Text
          width={"50%"}
          position={"relative"}
          as={"span"}
          color={"blue.300"}
          fontSize={"20px"}>
          <Toast />
        </Text>
      </Stack>
    </Container>
  );
};

const Copy = () => (
  <svg
    width="25"
    height="25"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1 9.50006C1 10.3285 1.67157 11.0001 2.5 11.0001H4L4 10.0001H2.5C2.22386 10.0001 2 9.7762 2 9.50006L2 2.50006C2 2.22392 2.22386 2.00006 2.5 2.00006L9.5 2.00006C9.77614 2.00006 10 2.22392 10 2.50006V4.00002H5.5C4.67158 4.00002 4 4.67159 4 5.50002V12.5C4 13.3284 4.67158 14 5.5 14H12.5C13.3284 14 14 13.3284 14 12.5V5.50002C14 4.67159 13.3284 4.00002 12.5 4.00002H11V2.50006C11 1.67163 10.3284 1.00006 9.5 1.00006H2.5C1.67157 1.00006 1 1.67163 1 2.50006V9.50006ZM5 5.50002C5 5.22388 5.22386 5.00002 5.5 5.00002H12.5C12.7761 5.00002 13 5.22388 13 5.50002V12.5C13 12.7762 12.7761 13 12.5 13H5.5C5.22386 13 5 12.7762 5 12.5V5.50002Z"
      fill="currentColor"
      fill-rule="evenodd"
      clip-rule="evenodd"></path>
  </svg>
);

const Toast = () => {
  const toast = useToast({
    title: "Copied!",
    variant: "subtle",
    position: "bottom-right",
    description: "",
    duration: 555,
    isClosable: false,
    containerStyle: { width: ["10px", "415px"] },
  });
  return (
    <Button
      leftIcon={<Copy />}
      onClick={() => {
        navigator.clipboard.writeText("");
        toast();
      }}
      size={"md"}>
      Address
    </Button>
  );
};

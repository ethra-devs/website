import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Flex,
  Box,
  ButtonGroup,
  IconButton,
  Stack,
  Input,
} from "@chakra-ui/react";
import { FcInspection } from "react-icons/fc";
import { Form } from "./contactForm";
import { ProductDetails } from "./productDetails";

export const CTAButton = () => {
  return (
    /**
     * You may move the Popover outside Flex.
     */
    <Box position={"fixed"} bottom={5} left={5} zIndex={10}>
      <Flex justifyContent="center" mt={4}>
        <Popover placement="top" pl={5}>
          <PopoverTrigger>
            <ButtonGroup isAttached>
              <Button
                fontSize={"30px"}
                color="black"
                bg={"green.200"}
                borderWidth={"1px"}
                borderColor={"blue.300"}
                w="fit-content"
                fontWeight={"medium"}>
                request a security audit
              </Button>
              <IconButton icon={<FcInspection size={"35px"} />} />
            </ButtonGroup>
          </PopoverTrigger>
          <PopoverContent _focus={{ boxShadow: "none" }} w={"45vw"} ml={5}>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader fontWeight="bold">Work with us</PopoverHeader>
            <PopoverBody w="full">
              <Tabs isLazy colorScheme="green">
                <TabList>
                  <Tab
                    _focus={{ boxShadow: "none" }}
                    fontSize="xs"
                    fontWeight="bold"
                    w="50%">
                    Form
                  </Tab>
                  <Tab
                    _focus={{ boxShadow: "none" }}
                    fontSize="xs"
                    fontWeight="bold"
                    w="50%">
                    Why ETHRA?
                  </Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    {/* <Stack spacing={3}>
                            <Input placeholder='name' size='sm' />
                            <Input placeholder='email' size='sm' />
                            <Input placeholder='project type' size='md' />
                            <Input placeholder='briefly describe your contract' size='md' />
                        </Stack> */}
                    <Form />
                  </TabPanel>
                  <TabPanel>
                    <ProductDetails />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Flex>
    </Box>
  );
};

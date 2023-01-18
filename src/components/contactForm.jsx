import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Select,
  HStack,
  Textarea,
  Input,
} from "@chakra-ui/react";
import { Button } from "antd";
import { useState } from "react";

export const Form = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const handleInputChange = (e) => setInput(e.target.value);

  const isError = input === "";
  return (
    <FormControl>
      <HStack m={1}>
        <Input
          mr={1}
          type="email"
          placeholder={"email..."}
          onChange={handleInputChange}
        />
        <Input ml={1} type="name" placeholder={"name..."} />
      </HStack>
      <Select placeholder="Project type" m={1}>
        <option>ERC-721</option>
        <option>ERC-20</option>
        <option>Other</option>
      </Select>
      <Textarea m={1} placeholder="Briefly describe your smart contract" />
      {isError && <FormErrorMessage>Email is required.</FormErrorMessage>}
      <Button onClick={() => setIsSubmit(true)}>
        {isSubmit ? "Thank You!" : "Submit"}
      </Button>
    </FormControl>
  );
};

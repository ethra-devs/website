import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Box,
  HStack,
  Icon,
  VStack,
  StatArrow,
  StatGroup,
} from "@chakra-ui/react";

export const TimelineCard = (props) => (
  <Stat
    border={"1px solid gray"}
    width={"100%"}
    textAlign={"right"}
    p={2}
    rounded={25}
    position={"relative"}>
    <HStack width={"100%"} justifyContent={"flex-end"}>
      <StatLabel>
        <Icon as={props.icon} boxSize={12} />
      </StatLabel>
      <VStack justifyContent={"center"}>
        <StatNumber
          alignItems={"flex-start"}
          fontSize={"22px"}
          color={"blue.300"}>
          {props.title}
        </StatNumber>
        <StatHelpText textAlign={"center"} width={"100%"} color={"blue.300"}>
          {props.description}
        </StatHelpText>
      </VStack>
    </HStack>
  </Stat>
);

//   export default function TimelineCard(props) {
//     return (
//       <Center py={12}>
//         <Box
//           role={'group'}
//           p={6}
//           maxW={'330px'}
//           w={'full'}
//           bg={useColorModeValue('white', 'gray.800')}
//           boxShadow={'2xl'}
//           rounded={'lg'}
//           pos={'relative'}
//           zIndex={1}>
//           <Stack pt={10} align={'center'}>
//             <Icon as={props.icon}/>
//             <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
//               {props.title}
//             </Text>
//             <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
//               {props.description}
//             </Heading>
//             {/* <Stack direction={'row'} align={'center'}>
//               <Text fontWeight={800} fontSize={'xl'}>
//                 $57
//               </Text>
//               <Text textDecoration={'line-through'} color={'gray.600'}>
//                 $199
//               </Text>
//             </Stack> */}
//           </Stack>
//         </Box>
//       </Center>
//     );
//   }

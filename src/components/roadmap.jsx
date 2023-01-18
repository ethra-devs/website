import {
    Box,
    chakra,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
    Spinner,
    Flex
  } from '@chakra-ui/react';
  
import { FaCircleNotch } from 'react-icons/fa'

function StatsCard(props) {
    const { title, stat, icon } = props;
    return (
      <Stat
      px={{ base: 2, md: 4 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}
      bg={'whiteAlpha.700'}>
      <Flex justifyContent={'space-between'}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={'medium'} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={'auto'}
          color={useColorModeValue('gray.800', 'gray.200')}
          alignContent={'center'}>
          {icon}
        </Box>
      </Flex>
    </Stat>
    );
}
  
 export default function Roadmap() {
  return (
    <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }} bg="transparent"                 
    py={{ base: 10, md: 40 }}>
      <chakra.h1
        textAlign={'center'}
        fontSize={'3xl'}
        py={10}
        fontWeight={'bold'}>
        Roadmap
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard title={'Pre-alpha target'} stat={'$250,000 market cap'} icon={<Spinner color='green.500' size={'xl'}/>}/>
        <StatsCard title={'Launch Stage'} stat={'5 tokens funded'} icon={<FaCircleNotch/>} />
        <StatsCard title={'Continuous Growth'} stat={'Institutional partnerships'} icon={<FaCircleNotch/>} />
      </SimpleGrid>
    </Box>
  );
}
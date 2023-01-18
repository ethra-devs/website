import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Center} from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';

export function ProductDetails() {
  return (
        <Box display={'flex'} width={'100%'} height={'max-content'} m={'auto'} p={'1%'} rounded={'md'} borderColor={'gray.200'} borderWidth={'2px'} zIndex={5} bg={'whiteAlpha.400'}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Feature
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            title={'Lifetime Support'}
            text={
                'Your satisfaction is our priority! We are available 24/7 to meet your needs'
            }
            />
            <Feature
            icon={<Icon as={FcDonate} w={10} h={10} />}
            title={'Cost Effective'}
            text={
                'We aim to deliver the most competitive service on the market'
            }
            />
            <Feature
            icon={<Icon as={FcInTransit} w={10} h={10} />}
            title={'Efficient Turnaround'}
            text={
                'Our service is fast, reliable, and we make your urgency our priority'
            }
            />
        </SimpleGrid>
        </Box>
  );
}

const Feature = ({ title, text, icon }) => {
  return (
    <Stack zIndex={2} width={'80%'} ml={5}>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={0}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};
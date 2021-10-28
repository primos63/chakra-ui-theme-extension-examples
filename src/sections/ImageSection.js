import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { Section } from '../components/Section'

export const ImageSection = () => (
  <Section heading='Image Overlay'>
    <Flex flexDirection='column' alignItems='center' justifyContent='center'>
      <Box
        position='relative'
        my={3}
        _hover={{
          '> .profile-img': { opacity: 0.3 },
          '> .overlay-text': { opacity: 1 },
        }}
      >
        <Image
          className='profile-img'
          src='https://bit.ly/dan-abramov'
          opacity={1}
          transition='0.5s ease'
        />
        <Box
          className='overlay-text'
          opacity={0}
          position='absolute'
          transition='0.5s ease'
          top='50%'
          left='50%'
          transform='translate(-50%, -50%)'
        >
          <Text
            backgroundColor='blue.300'
            color='white'
            fontSize={16}
            px={4}
            py={3}
          >
            Dan Abramov
          </Text>
        </Box>
      </Box>
    </Flex>
  </Section>
)

import { AspectRatio, Box, Image, Text, useTheme } from '@chakra-ui/react'
import { Section } from '../components/Section'

export const AspectRatioSection = () => (
  <Section
    heading='Aspect Ratio'
    description='Change objectFit for child image/video'
    theme={useTheme()}
  >
    <AspectRatio
      m={4}
      bg='tomato'
      ratio={3 / 1}
      borderWidth='5px'
      borderColor='gray.300'
      sx={{
        '& > img, & > video': {
          objectFit: 'contain',
        },
      }}
    >
      <Image src='https://bit.ly/naruto-sage' alt='naruto' />
    </AspectRatio>

    <Text mx={4} mt={4} align='center'>
      A better way?
    </Text>
    <Box mx={4} mb={4} border='5px solid' borderColor='gray.300'>
      <Image
        src='https://bit.ly/naruto-sage'
        alt='naruto'
        bgColor='tomato'
        objectFit='contain'
        sx={{
          aspectRatio: '3/1',
        }}
      />
    </Box>
    <Box mx={4} mb={4}>
      <Box
        as='video'
        controls
        src='https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4'
        poster='https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217'
        alt='Big Buck Bunny'
        objectFit='contain'
        sx={{
          aspectRatio: '16/9',
        }}
      />
    </Box>
    <Box mx={4} mb={4}>
      <Box
        as='iframe'
        src='https://www.youtube.com/embed/wI2vqXsjsIo'
        width='100%'
        sx={{
          aspectRatio: '16/9',
        }}
      />
    </Box>
  </Section>
)

import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import {
  Container,
  Flex,
  Heading,
  IconButton,
  useColorMode,
} from '@chakra-ui/react'

import {
  AlertSection,
  AspectRatioSection,
  AvatarSection,
  BodyStyleSection,
  ButtonSection,
  CheckboxSection,
  FormSection,
  ImageSection,
  InputSelectSection,
  PopoverSection,
  ProgressSection,
  SwitchSection,
  TableSection,
  TagSection,
} from './sections'

export default function App() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Container maxW={{ base: 320, sm: 480, md: 720 }} my={6}>
      <Flex
        className='navbar'
        alignItems='center'
        position='sticky'
        top={0}
        zIndex='sticky'
        bg={colorMode === 'light' ? 'white' : 'gray.800'}
      >
        <Heading fontSize={24} flexGrow={1}>
          Chakra UI Theming Examples
        </Heading>
        <IconButton
          rounded='full'
          aria-label='Toggle dark mode'
          bgColor='transparent'
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          _hover={{
            bgColor: 'transparent',
          }}
        />
      </Flex>
      <BodyStyleSection />
      <AlertSection />
      <AspectRatioSection />
      <AvatarSection />
      <ButtonSection />
      <CheckboxSection />
      <FormSection />
      <InputSelectSection />
      <ImageSection />
      <PopoverSection />
      <ProgressSection />
      <SwitchSection />
      <TagSection />
      <TableSection />
    </Container>
  )
}

import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
  Link,
  useColorMode,
} from '@chakra-ui/react'

import { Link as ReactLink, Route, Switch } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import { Guide } from './pages/Guide'
import { Home } from './pages/Home'

export default function App() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Container maxW={{ base: 320, sm: 480, md: 720 }} my={6}>
      <Box
        className='navbar'
        alignItems='center'
        position='sticky'
        top={0}
        zIndex='sticky'
        bg={colorMode === 'light' ? 'white' : 'gray.800'}
      >
        <Flex>
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
        <HStack spacing={4}>
          <Link as={ReactLink} to='/'>
            Examples
          </Link>
          <Link as={ReactLink} to='/guide'>
            HowTo
          </Link>
        </HStack>
      </Box>
      <Box>
        <ScrollToTop />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/guide' component={Guide} />
        </Switch>
      </Box>
    </Container>
  )
}

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

import {
  NavLink as ReactLink,
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import { Guide } from './pages/Guide'
import { Home } from './pages/Home'

export default function App() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Container maxW={{ base: 320, sm: 480, md: 720 }} my={6}>
      <Router>
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
          <Box>
            <HStack
              spacing={4}
              sx={{
                '> .active': {
                  color: colorMode === 'light' ? 'blue.500' : 'blue.300',
                  fontWeight: 'semibold',
                },
              }}
            >
              <Link
                _focus={{ boxShadow: 'none' }}
                as={ReactLink}
                to='/'
                exact
                activeClassName='active'
              >
                Examples
              </Link>
              <Link
                _focus={{ boxShadow: 'none' }}
                as={ReactLink}
                to='/guide'
                activeClassName='active'
              >
                How To Extend A Theme
              </Link>
            </HStack>
            <ScrollToTop />
          </Box>
        </Box>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/guide' component={Guide} />
        </Switch>
      </Router>
    </Container>
  )
}

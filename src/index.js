import { ChakraProvider } from '@chakra-ui/react'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { BaseTheme } from './theme/BaseTheme'
import App from './App'

const rootElement = document.getElementById('root')

ReactDOM.render(
  <BrowserRouter>
    <StrictMode>
      <ChakraProvider theme={BaseTheme}>
        <App />
      </ChakraProvider>
    </StrictMode>
  </BrowserRouter>,
  rootElement
)

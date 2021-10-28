import {
  Box,
  Flex,
  Heading,
  Text,
  useColorModeValue,
  useTheme,
} from '@chakra-ui/react'
import { ChakraNestedProvider } from '../ChakraNestedProvider'

export const Section = ({ children, heading, description, theme, ...rest }) => {
  const defaultTheme = useTheme()
  const sectionTheme = theme ? theme : defaultTheme

  const id = 'section-id-' + Date.now()

  return (
    <Box
      id={id}
      borderColor={useColorModeValue('blue.700', 'blue.200')}
      borderWidth={1}
      mt={5}
      borderRadius={10}
      {...rest}
      as='section'
      w='100%'
    >
      <ChakraNestedProvider theme={sectionTheme} cssVarsRoot={'#' + id}>
        <Flex
          direction='column'
          alignItems='center'
          justifyContent='center'
          mt={3}
        >
          <Heading as='h3' fontSize={18}>
            {heading}
          </Heading>
          <Text>{description}</Text>
        </Flex>
        {children}
      </ChakraNestedProvider>
    </Box>
  )
}

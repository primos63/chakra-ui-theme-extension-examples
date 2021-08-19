import { Button, extendTheme, Stack, useTheme } from '@chakra-ui/react'
import { Section } from '../components/Section'
import { ButtonTheme } from '../theme/Button'

export const ButtonSection = () => (
  <Section
    heading='Button'
    description='Change a button variant'
    theme={extendTheme(ButtonTheme, useTheme())}
  >
    <Stack p={4} direction='row' spacing={4} align='center'>
      <Button colorScheme='rebeccapurple' variant='solid'>
        Solid
      </Button>
      <Button colorScheme='teal' variant='outline'>
        Outline
      </Button>
      <Button colorScheme='teal' variant='ghost'>
        Ghost
      </Button>
      <Button colorScheme='teal' variant='link'>
        Link
      </Button>
    </Stack>{' '}
  </Section>
)

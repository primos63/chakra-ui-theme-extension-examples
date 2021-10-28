import { Alert, AlertIcon, extendTheme, Stack } from '@chakra-ui/react'
import { Section } from '../components/Section'
import { AlertTheme } from '../theme/Alert'

export const AlertSection = () => (
  <Section
    heading='Alert'
    description='Custom colors for variants'
    theme={extendTheme(AlertTheme)}
  >
    <Stack m={4} spacing={3}>
      <Alert status='error' colorScheme='pink'>
        <AlertIcon />
        User provided error color scheme pink
      </Alert>

      <Alert status='success'>
        <AlertIcon />
        Default success color green
      </Alert>

      <Alert status='warning'>
        <AlertIcon />
        Custom warning color scheme purple
      </Alert>

      <Alert status='info'>
        <AlertIcon />
        Custom info color scheme cyan
      </Alert>
    </Stack>
  </Section>
)

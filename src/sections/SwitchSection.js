import { extendTheme, Stack, Switch } from '@chakra-ui/react'
import { Section } from '../components/Section'
import { SwitchTheme } from '../theme/Switch'

export const SwitchSection = () => (
  <Section
    heading='Switch'
    description='No focus ring'
    theme={extendTheme(SwitchTheme)}
  >
    <Stack align='center' direction='row' p={5}>
      <Switch size='sm' />
      <Switch size='md' />
      <Switch size='lg' />
    </Stack>
  </Section>
)

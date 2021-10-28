import { extendTheme } from '@chakra-ui/react'
import { AvatarTheming } from './AvatarTheming'
import { AvatarTheme } from '../../theme/Avatar'
import { Section } from '../../components/Section'

export const AvatarSection = () => (
  <Section
    heading='Avatar'
    description='Container and Excess Label colors'
    theme={extendTheme(AvatarTheme)}
  >
    <AvatarTheming p={4} max={3} />
  </Section>
)

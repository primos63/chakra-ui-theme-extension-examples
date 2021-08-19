import { extendTheme, useTheme } from '@chakra-ui/react'
import { AvatarTheming } from '../components/AvatarTheming'
import { Section } from '../components/Section'
import { AvatarTheme } from '../theme/Avatar'

export const AvatarSection = () => (
  <Section
    heading='Avatar'
    description='Container and Excess Label colors'
    theme={extendTheme(AvatarTheme, useTheme())}
  >
    <AvatarTheming p={4} max={3} />
  </Section>
)

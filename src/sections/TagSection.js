import { extendTheme, Stack, Tag } from '@chakra-ui/react'
import { Section } from '../components/Section'
import { TagTheme } from '../theme/Tag'

export const TagSection = () => (
  <Section
    heading='Tag'
    description='Override background for light mode'
    theme={extendTheme(TagTheme)}
  >
    <Stack align='center' direction='row' p={5}>
      {['sm', 'md', 'lg'].map((size) => (
        <Tag size={size} key={size} colorScheme='teal'>
          Teal
        </Tag>
      ))}
    </Stack>
  </Section>
)

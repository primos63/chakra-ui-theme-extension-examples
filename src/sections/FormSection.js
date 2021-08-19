import {
  extendTheme,
  FormControl,
  FormLabel,
  Input,
  RequiredIndicator,
  useTheme,
} from '@chakra-ui/react'
import { Section } from '../components/Section'
import { FormTheme } from '../theme/Form'

export const FormSection = () => (
  <Section
    heading='Form'
    description='Custom required indicator and color'
    theme={extendTheme(FormTheme, useTheme())}
  >
    <FormControl p={4} id='first-name' isRequired>
      <FormLabel requiredIndicator={<RequiredIndicator>!</RequiredIndicator>}>
        First name
      </FormLabel>
      <Input placeholder='First name' />
    </FormControl>
  </Section>
)

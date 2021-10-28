import {
  extendTheme,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  RequiredIndicator,
} from '@chakra-ui/react'
import { useState } from 'react'
import { Section } from '../components/Section'
import { FormTheme } from '../theme/Form'

export const FormSection = () => {
  const [fname, setFName] = useState('')

  return (
    <Section
      heading='Form'
      description='Custom required indicator and color'
      theme={extendTheme(FormTheme)}
    >
      <FormControl p={4} id='first-name' isRequired isInvalid={!fname.length}>
        <FormLabel requiredIndicator={<RequiredIndicator>!</RequiredIndicator>}>
          First name
        </FormLabel>
        <Input
          placeholder='First name'
          value={fname}
          onChange={(e) => setFName(e.target.value)}
        />
        <FormErrorMessage>Error: Name cannot be empty.</FormErrorMessage>
      </FormControl>
    </Section>
  )
}

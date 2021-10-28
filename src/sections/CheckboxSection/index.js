import { extendTheme } from '@chakra-ui/react'
import { Section } from '../../components/Section'
import { CheckboxTheme } from '../../theme/Checkbox'
import { ChkboxCustCtrl } from './ChkboxCustCtrl'
import { ChkboxSepLabel } from './ChkboxSepLabel'

export const CheckboxSection = () => (
  <Section heading='Checkbox' theme={extendTheme(CheckboxTheme)}>
    <ChkboxSepLabel mt={2} />
    <ChkboxCustCtrl mb={3} />
  </Section>
)

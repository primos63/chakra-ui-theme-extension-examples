import { Box, extendTheme, Input, Select } from '@chakra-ui/react'
import { Section } from '../components/Section'
import { InputTheme } from '../theme/Input'
import { SelectTheme } from '../theme/Select'

export const InputSelectSection = () => (
  <Section
    heading='Input & Select'
    theme={extendTheme(InputTheme, SelectTheme)}
  >
    <Box margin={3}>
      <Input placeholder='Disabled Input' bgColor='gray.600' disabled />
      <Input placeholder='First name' mt={4} />
      <Input placeholder='Favorite fruit?' mt={4} list='mySuggestion' />
      <datalist id='mySuggestion'>
        <option>Apple</option>
        <option>Banana</option>
        <option>Blackberry</option>
        <option>Blueberry</option>
        <option>Lemon</option>
        <option>Lychee</option>
        <option>Peach</option>
        <option>Pear</option>
      </datalist>
      <Select placeholder='Select an option' mt={4}>
        <option value='coffee'>&#9749; Coffee</option>
        <option value='tropical'>🍹 Tropical Drink</option>
        <option value='burger'>🍔 Burger</option>
      </Select>
    </Box>
  </Section>
)

import { Box, Button, extendTheme, Input, Stack } from '@chakra-ui/react'
import { lighten, darken } from '@chakra-ui/theme-tools'
import { useState } from 'react'
import { Section } from '../components/Section'
import { ButtonTheme } from '../theme/Button'

export const ButtonSection = (props) => {
  const [colorValue, setColorValue] = useState('#fa8072')
  const { theme } = props

  ButtonTheme.colors.userSelected['500'] = colorValue
  for (let level = 400; level > 50; level -= 100) {
    const prevColor = ButtonTheme.colors.userSelected[level + 100]
    ButtonTheme.colors.userSelected[level] = lighten(prevColor, 5)(theme)
  }
  for (let level = 600; level < 1000; level += 100) {
    const prevColor = ButtonTheme.colors.userSelected[level - 100]
    ButtonTheme.colors.userSelected[level] = darken(prevColor, 5)(theme)
  }
  ButtonTheme.colors.userSelected['50'] = lighten(
    ButtonTheme.colors.userSelected['100'],
    5
  )(theme)

  const handleColorChange = (e) => {
    setColorValue(e.target.value)
  }

  return (
    <Section
      heading='Button'
      description='Change a button variant'
      theme={extendTheme(ButtonTheme)}
    >
      <Stack p={4} direction='row' spacing={4} align='center'>
        <Button colorScheme='purple' variant='solid'>
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
      <Stack p={4} direction='column' spacing={4} align='center'>
        <Box>Variant using gradient</Box>
        <Button variant='gradient' fromColor='blue.400' toColor='red.500'>
          <Box as='span'>Learn More</Box>
        </Button>
      </Stack>
      <Stack p={4} direction='column' spacing={4} align='center'>
        <Box>Custom color with computed levels</Box>
        <Input type='color' value={colorValue} onChange={handleColorChange} />
        <Stack py={4} direction='row' spacing={4} width='full'>
          <Button colorScheme='userSelected' variant='solid'>
            Solid
          </Button>
          <Button colorScheme='userSelected' variant='outline'>
            Outline
          </Button>
          <Button colorScheme='userSelected' variant='ghost'>
            Ghost
          </Button>
          <Button colorScheme='userSelected' variant='link'>
            Link
          </Button>
        </Stack>
      </Stack>
    </Section>
  )
}

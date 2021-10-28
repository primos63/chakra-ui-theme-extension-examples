import { Button, extendTheme, Progress } from '@chakra-ui/react'
import { useState } from 'react'
import { Section } from '../components/Section'
import { ProgressTheme } from '../theme/Progress'

export const ProgressSection = () => {
  const [currentValue, setCurrentValue] = useState(0)

  return (
    <Section
      heading='Progess'
      description='Multi-color/segment variants'
      theme={extendTheme(ProgressTheme)}
    >
      <Progress
        variant='multiSegment'
        m={4}
        height={8}
        min={0}
        max={1000}
        values={{
          red: 135,
          blue: 245,
          green: 120,
        }}
      />
      <Progress
        variant='multiColor'
        m={4}
        height={8}
        min={0}
        max={100}
        value={currentValue}
        colors={{
          '0%': 'red',
          '50%': 'blue',
          '75%': 'green',
        }}
      />
      <Button
        ml={4}
        my={4}
        colorScheme='green'
        isDisabled={currentValue === 100}
        onClick={() => setCurrentValue(currentValue + 5)}
      >
        +
      </Button>
      <Button
        ml={4}
        my={4}
        colorScheme='blue'
        onClick={() => setCurrentValue(0)}
      >
        Reset
      </Button>
    </Section>
  )
}

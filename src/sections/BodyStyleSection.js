import { Button, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import { BodyStyle } from '../components/BodyStyle'
import { Section } from '../components/Section'

export const BodyStyleSection = () => {
  const [triggered, toggleTriggered] = useState(false)

  return (
    <Section
      heading='Override body color'
      description='Change the global background and color'
    >
      {triggered ? (
        <BodyStyle
          // sx={{ body: { background: "red" } }}
          sx={{
            body: {
              dark: {
                background: 'hsla(169, 66%, 19%, 1)',
                color: 'whiteAlpha.900',
              },
              light: { background: 'gray.100', color: 'gray.900' },
            },
            '.chakra-heading': {
              fontSize: '26px !important',
            },
          }}
          // sx={{
          //     body: {
          //       background: 'blue.900',
          //       color: "whiteAlpha.900"
          //     },
          //     "*": {
          //       padding: "5px"
          //     }
          //   }
          // }
        />
      ) : (
        <BodyStyle />
      )}
      <VStack m={4} spacing={3}>
        <Button
          colorScheme='twitter'
          onClick={() => toggleTriggered(!triggered)}
        >
          {triggered ? 'Default' : 'Custom'} global style
        </Button>
      </VStack>
    </Section>
  )
}

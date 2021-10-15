import { Button, Stack, useToast } from '@chakra-ui/react'
import { Section } from '../components/Section'

export const ToastSection = () => {
  const toast = useToast()

  return (
    <Section heading='Toast' description='Customized Toast'>
      <Stack m={4} spacing={3}>
        <Button
          onClick={() =>
            toast({
              status: 'info',
              title: `Custom variant toast`,
              variant: 'custom',
              position: 'bottom-right',
              isClosable: true,
            })
          }
        >
          Show toast
        </Button>
      </Stack>
    </Section>
  )
}

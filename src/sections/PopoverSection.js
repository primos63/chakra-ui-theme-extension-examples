import {
  Button,
  extendTheme,
  Flex,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  useTheme,
} from '@chakra-ui/react'
import { Section } from '../components/Section'
import { PopoverTheme } from '../theme/Popover'

export const PopoverSection = () => (
  <Section
    heading='Popover'
    description='Unstyled content and no popover arrow'
    theme={extendTheme(PopoverTheme, useTheme())}
  >
    <Flex flexDirection='column' alignItems='center' p={3} mb={40}>
      <Popover variant='unstyled-content'>
        <PopoverTrigger>
          <Button bg='blue.600' color='white'>
            Trigger Unstyled
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          {/* <PopoverArrow /> */}
          <PopoverCloseButton />
          <PopoverHeader>Information</PopoverHeader>
          <PopoverBody>
            Unstyled popover content. Why? I don't know.
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  </Section>
)

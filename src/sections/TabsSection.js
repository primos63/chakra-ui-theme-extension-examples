import {
  extendTheme,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Stack,
} from '@chakra-ui/react'
import { Section } from '../components/Section'
import { TabsTheme } from '../theme/Tabs'

export const TabsSection = () => (
  <Section
    heading='Tabs'
    description='Hover color'
    theme={extendTheme(TabsTheme)}
  >
    <Stack align='center' direction='row' p={5}>
      <Tabs variant='soft-rounded' colorScheme='green'>
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Stack>
  </Section>
)

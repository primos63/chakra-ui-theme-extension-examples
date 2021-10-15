import { mode } from '@chakra-ui/theme-tools'

export const TabsTheme = {
  components: {
    Tabs: {
      baseStyle: {
        tab: {
          _focus: {
            boxShadow: 'none',
          },
          _hover: {
            bg: 'blue.200',
          },
          _selected: {
            _hover: {
              bg: 'blue.200',
            },
          },
        },
      },
    },
  },
}

import { mode } from '@chakra-ui/theme-tools'

export const TabsTheme = {
  components: {
    Tabs: {
      variants: {
        'soft-rounded': {
          tab: {
            _selected: {
              color: 'red.500',
            },
          },
        },
      },
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

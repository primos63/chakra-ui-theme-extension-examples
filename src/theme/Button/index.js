import { lighten, getColor, mode } from '@chakra-ui/theme-tools'

export const ButtonTheme = {
  colors: {
    userSelected: {},
  },
  components: {
    Button: {
      variants: {
        solid: (props) => {
          const { colorScheme } = props

          if (colorScheme !== 'rebeccapurple') {
            return {}
          }

          return {
            bgColor: lighten('rebeccapurple', 15),
            _hover: {
              bgColor: 'rebeccapurple',
            },
          }
        },
        gradient: (props) => {
          const { theme, fromColor, toColor } = props
          const lgFrom = getColor(theme, fromColor)
          const lgTo = getColor(theme, toColor)
          const bgColor = getColor(theme, mode('white', 'gray.800')(props))

          return {
            border: '3px solid',
            borderColor: 'transparent',
            borderRadius: 'full',
            background: `linear-gradient(${bgColor}, ${bgColor}) padding-box, 
            linear-gradient(135deg, ${lgFrom}, ${lgTo}) border-box`,
            '> *': {
              background: `linear-gradient(135deg, ${lgFrom}, ${lgTo})`,
              backgroundClip: 'text',
              textFillColor: 'transparent',
            },
            _hover: {
              background: `linear-gradient(${bgColor}, ${bgColor}) padding-box, 
              linear-gradient(315deg, ${lgFrom}, ${lgTo}) border-box`,
              '> *': {
                background: `linear-gradient(315deg, ${lgFrom}, ${lgTo})`,
                backgroundClip: 'text',
              },
            },
          }
        },
      },
    },
  },
}

import { getColor, mode } from '@chakra-ui/theme-tools'

export const FormTheme = {
  components: {
    Input: {
      variants: {
        outline: (props) => {
          const { theme } = props
          return {
            field: {
              _invalid: {
                borderColor: 'pink.400',
                boxShadow: `0 0 0 2px ${getColor(theme, 'pink.700')}`,
              },
            },
          }
        },
      },
      defaultProps: {
        errorBorderColor: 'purple.500',
      },
    },
    Form: {
      baseStyle: (props) => ({
        requiredIndicator: {
          color: mode('blue.500', 'blue.300')(props),
          fontSize: '24px',
          fontWeight: 'bold',
        },
      }),
    },
    FormError: {
      baseStyle: (props) => ({
        text: {
          fontFamily: 'monospace',
          fontSize: '24px',
          color: mode('blue.500', 'blue.300')(props),
        },
      }),
    },
  },
}

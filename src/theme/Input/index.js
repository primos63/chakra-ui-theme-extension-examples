import { getColor, mode } from '@chakra-ui/theme-tools'

const getOutlineVariant = (props) => {
  const { theme } = props

  return {
    field: {
      background: mode('blue.200', 'pink.200')(props),
      color: 'gray.900',
      // borderColor: getColor(theme, "brand.border"),
      _placeholder: {
        color: 'gray.900',
        opacity: '1',
      },
      _focus: {
        borderColor: getColor(theme, 'brand.focusColor'),
        boxShadow: `0 0 0 1px ${getColor(theme, 'brand.focusColor')}`,
      },
      _disabled: {
        opacity: 1,
        _placeholder: {
          color: 'gray.400',
        },
      },
      _invalid: {
        borderColor: 'green.500',
        boxShadow: `0 0 0 1px green.500`,
      },
    },
  }
}

export const InputTheme = {
  components: {
    Input: {
      sizes: {
        md: {
          field: {
            borderRadius: 'full',
          },
        },
      },
      variants: {
        outline: getOutlineVariant,
      },
    },
  },
}

import { getColor, mode } from '@chakra-ui/theme-tools'

const getOutlineVariantSelect = (props) => {
  const { theme } = props

  // console.log('focusColor', getColor(theme, 'brand.focusColor'))
  return {
    field: {
      background: mode('green.200', 'green.100')(props),
      color: 'gray.900',
      borderColor: getColor(theme, 'brand.border'),
      // _placeholder: {
      //   color: 'gray.900',
      //   opacity: '1',
      // },
      _focus: {
        borderColor: getColor(theme, 'brand.focusColor'),
        boxShadow: `0px 0px 0px 1px ${getColor(theme, 'brand.focusColor')}`,
      },
      '>option': {
        background: 'inherit',
      },
      ">option[value='coffee']": {
        background: 'black',
        color: 'white',
      },
    },
  }
}

export const SelectTheme = {
  components: {
    Select: {
      variants: {
        outline: getOutlineVariantSelect,
      },
    },
  },
}

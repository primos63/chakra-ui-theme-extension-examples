import { customAlertVariant } from './customAlert'

export const AlertTheme = {
  components: {
    Alert: {
      baseStyle: {
        container: {
          borderRadius: 'full',
        },
      },
      variants: {
        subtle: customAlertVariant,
        'left-accent': customAlertVariant,
        'top-accent': customAlertVariant,
        solid: customAlertVariant,
      },
    },
  },
}

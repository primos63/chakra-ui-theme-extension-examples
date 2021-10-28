import { getColor, mode, transparentize } from '@chakra-ui/theme-tools'

const getAlertColors = (props) => {
  // Default color scheme for alerts
  // Need this to see if the user passed in a colorScheme
  // as the colorScheme will be set by the base Alert config.
  const DEFAULT_COLOR_SCHEMES = {
    info: 'blue',
    warning: 'orange',
    success: 'green',
    error: 'red',
  }

  // Custom colorScheme for alerts
  const STATUSES = {
    info: { colorScheme: 'cyan' },
    warning: { colorScheme: 'purple' },
    success: { colorScheme: 'green' },
    error: { colorScheme: 'red' },
  }

  const { theme, colorScheme, status } = props

  // if colorScheme is passed via props use that; otherwise, use the status
  // to get the colorScheme for the alert
  const custScheme =
    DEFAULT_COLOR_SCHEMES[status] === colorScheme
      ? STATUSES[props.status].colorScheme
      : colorScheme

  // Change the color levels to suit your needs
  const lightBg = getColor(theme, `${custScheme}.100`, custScheme)
  const darkBg = transparentize(`${custScheme}.200`, 0.16)(theme)
  const lightIcon = getColor(theme, `${custScheme}.500`, custScheme)
  const darkIcon = getColor(theme, `${custScheme}.200`, custScheme)

  return {
    bgColor: mode(lightBg, darkBg)(props),
    iconColor: mode(lightIcon, darkIcon)(props),
  }
}

export const customAlertVariant = (props) => {
  const { bgColor, iconColor } = getAlertColors(props)

  return {
    container: { bg: bgColor },
    icon: { color: iconColor },
  }
}

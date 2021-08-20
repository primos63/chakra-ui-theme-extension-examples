import { useColorModeValue } from '@chakra-ui/react'
import { Global, useTheme } from '@emotion/react'
import { getColor } from '@chakra-ui/theme-tools'

// Simple example of how the global style can be changed
// from any component
export const BodyStyle = (props) => {
  const { sx } = props

  const colorMode = useColorModeValue('light', 'dark')
  const theme = useTheme()

  if (!sx) return <Global />

  const deepIterate = (obj) => {
    for (const [key, val] of Object.entries(obj)) {
      if (typeof val === 'object') deepIterate(val)
      const convertedVal = getColor(theme, val)
      if (convertedVal) {
        obj[key] = convertedVal
      }
    }
  }

  deepIterate(sx)

  const { body, ...rest } = sx

  let sxMod = {}
  if (body && (body.light || body.dark)) {
    sxMod.body = {}
    sxMod.body.background =
      colorMode === 'light' ? body.light.background : body.dark.background
    sxMod.body.color =
      colorMode === 'light' ? body.light.color : body.dark.color
    sxMod = { ...sxMod, ...rest }
  } else {
    sxMod = sx
  }

  return (
    <Global
      styles={{
        ...sxMod,
      }}
    />
  )
}

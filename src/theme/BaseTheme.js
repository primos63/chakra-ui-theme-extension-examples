import { extendTheme } from "@chakra-ui/react";

export const BaseTheme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false
  },
  colors: {
    brand: {
      border: "#2D8540",
      focusColor: "#4BDF6B"
    }
  },
  components: {}
});

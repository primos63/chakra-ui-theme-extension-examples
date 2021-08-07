import { mode } from "@chakra-ui/theme-tools";

export const AvatarTheme = {
  components: {
    Avatar: {
      baseStyle: (props) => ({
        container: {
          bg: "green.200",
          borderColor: "red.600"
        },
        excessLabel: {
          bg: mode("blue.500", "yellow.300")(props),
          color: mode("white", "black")(props)
        }
      })
    }
  }
};

import { mode } from "@chakra-ui/theme-tools";

export const SwitchTheme = {
  components: {
    Switch: {
      // Change the base style to not have the focus ring
      // for any switch element. Probably not a good idea.
      // baseStyle: {
      //   track: {
      //     _focus: {
      //       boxShadow: "none"
      //     }
      //   }
      // },
      // Acheive the same result using a variant
      // and setting defaultProps variant to noFocus
      variants: {
        noFocus: (props) => ({
          track: {
            bg: mode("gray.200", "gray.500")(props),
            borderColor: mode("gray.200", "gray.500")(props),
            borderWidth: "1px",
            _focus: {
              boxShadow: "none"
            },
            _checked: {
              bg: mode("white", "gray.800")(props),
              borderColor: mode("orange.400", "orange.300")(props)
            }
          },
          thumb: {
            bg: mode("gray.300", "gray.600")(props),
            _checked: {
              bg: mode("orange.400", "orange.300")(props)
            }
          },
          defaultProps: {
            colorScheme: "orange"
          }
        })
      },
      defaultProps: {
        variant: "noFocus"
      }
    }
  }
};

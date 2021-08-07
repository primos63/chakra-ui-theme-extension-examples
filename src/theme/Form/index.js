import { mode } from "@chakra-ui/theme-tools";

export const FormTheme = {
  components: {
    Form: {
      baseStyle: (props) => ({
        requiredIndicator: {
          color: mode("blue.500", "blue.300")(props),
          fontSize: "24px",
          fontWeight: "bold"
        }
      })
    }
  }
};

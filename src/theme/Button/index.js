import { lighten } from "@chakra-ui/theme-tools";

export const ButtonTheme = {
  components: {
    Button: {
      variants: {
        solid: (props) => {
          const { colorScheme } = props;

          if (colorScheme !== "rebeccapurple") {
            return {};
          }

          return {
            bgColor: lighten("rebeccapurple", 15),
            _hover: {
              bgColor: "rebeccapurple"
            }
          };
        }
      }
    }
  }
};

import { mode } from "@chakra-ui/theme-tools";

export const TagTheme = {
  components: {
    Tag: {
      variants: {
        subtle: (props) => {
          const { colorScheme: c, theme } = props;
          const { bg: bgBadge } = theme.components.Badge.variants.subtle(props);
          return {
            container: {
              bg: mode(`${c}.50`, bgBadge)(props)
            }
          };
        }
      }
    }
  }
};

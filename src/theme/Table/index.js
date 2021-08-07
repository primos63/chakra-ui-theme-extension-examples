import { mode } from "@chakra-ui/theme-tools";

const numericStyles = {
  "&[data-is-numeric=true]": {
    textAlign: "end"
  }
};

export const TableTheme = {
  components: {
    Table: {
      variants: {
        colorHeader: (props) => {
          const { colorscheme } = props;
          return {
            th: {
              color: mode(`blue.600`, `blue.400`)(props),
              borderBottom: "1px",
              borderColor: mode(
                `${colorscheme}.100`,
                `${colorscheme}.700`
              )(props),
              ...numericStyles
            },
            td: {
              borderBottom: "1px",
              borderColor: mode(
                `${colorscheme}.100`,
                `${colorscheme}.700`
              )(props),
              ...numericStyles
            },
            caption: {
              color: mode(`gray.600`, `gray.100`)(props)
            },
            tfoot: {
              tr: {
                "&:last-of-type": {
                  th: { borderBottomWidth: 0 }
                }
              }
            }
          };
        }
      }
    }
  }
};

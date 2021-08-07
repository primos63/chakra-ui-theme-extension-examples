export const PopoverTheme = {
  components: {
    Popover: {
      variants: {
        "unstyled-content": {
          content: {
            bg: "none",
            width: "auto",
            border: "none",
            borderRadius: "none",
            boxShadow: "none",
            _focus: {
              boxShadow: "none"
            }
          }
        }
      },
      defaultProps: {}
    }
  }
};

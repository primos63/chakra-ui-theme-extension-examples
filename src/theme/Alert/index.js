import { customAlertVariant } from "./customAlert";

export const AlertTheme = {
  components: {
    Alert: {
      variants: {
        subtle: customAlertVariant,
        "left-accent": customAlertVariant,
        "top-accent": customAlertVariant,
        solid: customAlertVariant
      }
    }
  }
};

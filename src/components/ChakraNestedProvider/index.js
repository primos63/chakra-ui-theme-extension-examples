import { CSSReset, PortalManager, ThemeProvider } from "@chakra-ui/react";
import { EnvironmentProvider } from "@chakra-ui/react-env";
import { IdProvider } from "@chakra-ui/hooks";
import defaultTheme from "@chakra-ui/theme";

export const ChakraNestedProvider = (props) => {
  const {
    children,
    portalZIndex,
    resetCSS = false, // I don't think resetCSS is needed in a nested provider
    theme = defaultTheme,
    environment,
    cssVarsRoot
  } = props;

  const _children = (
    <EnvironmentProvider environment={environment}>
      {children}
    </EnvironmentProvider>
  );

  return (
    <IdProvider>
      <ThemeProvider theme={theme} cssVarsRoot={cssVarsRoot}>
        {resetCSS && <CSSReset />}
        {portalZIndex ? (
          <PortalManager zIndex={portalZIndex}>{_children}</PortalManager>
        ) : (
          _children
        )}
      </ThemeProvider>
    </IdProvider>
  );
};

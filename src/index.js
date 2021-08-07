import { ChakraProvider } from "@chakra-ui/react";
import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { BaseTheme } from "./theme/BaseTheme";
import App from "./App";

const rootElement = document.getElementById("root");

// const Main = () => {
//   const [currentTheme, setCurrentTheme] = useState(theme);

//   return (
//     <ChakraProvider theme={currentTheme}>
//       <App setTheme={setCurrentTheme} />
//     </ChakraProvider>
//   );
// };

ReactDOM.render(
  <StrictMode>
    <ChakraProvider theme={BaseTheme}>
      <App />
    </ChakraProvider>
  </StrictMode>,
  rootElement
);

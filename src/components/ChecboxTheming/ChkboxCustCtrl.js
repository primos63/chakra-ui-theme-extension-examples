import { Checkbox, Flex } from "@chakra-ui/react";
import CheckboxIcon from "../CheckboxIcon";

export const ChkboxCustCtrl = (props) => (
  <Flex
    fontSize={18}
    width="20rem"
    height="2em"
    {...props}
    flexDirection="row"
    justifyContent="start"
    alignItems="center"
  >
    <Checkbox
      variant="custom-control"
      ml={5}
      icon={
        <CheckboxIcon
          borderRadius="50%"
          boxSize="1.3em"
          bgGradient="linear(to-br, hsl(192, 100%, 67%), hsl(280, 87%, 65%))"
        />
      }
    >
      Checkbox with a label
    </Checkbox>
  </Flex>
);

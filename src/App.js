import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertIcon,
  AspectRatio,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  IconButton,
  Image,
  Input,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Select,
  Stack,
  Switch,
  TableCaption,
  Table,
  Tag,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  useColorMode,
  FormControl,
  FormLabel,
  RequiredIndicator,
  extendTheme,
  useTheme,
  VStack
} from "@chakra-ui/react";

import { AvatarTheming } from "./components/AvatarTheming";
import { Section } from "./components/Section";
import { ChkboxSepLabel } from "./components/ChecboxTheming/ChkboxSepLabel";
import { ChkboxCustCtrl } from "./components/ChecboxTheming/ChkboxCustCtrl";
import { AlertTheme } from "./theme/Alert";
import { AvatarTheme } from "./theme/Avatar";
import { CheckboxTheme } from "./theme/Checkbox";
import { FormTheme } from "./theme/Form";
import { InputTheme } from "./theme/Input";
import { SelectTheme } from "./theme/Select";
import { PopoverTheme } from "./theme/Popover";
import { SwitchTheme } from "./theme/Switch";
import { TagTheme } from "./theme/Tag";
import { TableTheme } from "./theme/Table";
import { ButtonTheme } from "./theme/Button";
import { useState } from "react";
import { BodyStyle } from "./components/BodyStyle";

export default function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [triggered, toggleTriggered] = useState(false);

  return (
    <Container maxW={{ base: 320, sm: 480, md: 720 }} my={6}>
      <Flex
        className="navbar"
        alignItems="center"
        position="sticky"
        top={0}
        zIndex="sticky"
        bg={colorMode === "light" ? "white" : "gray.800"}
      >
        <Heading fontSize={24} flexGrow={1}>
          Chakra UI Theming Examples
        </Heading>
        <IconButton
          rounded="full"
          aria-label="Toggle dark mode"
          bgColor="transparent"
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          _hover={{
            bgColor: "transparent"
          }}
        />
      </Flex>
      <Section
        heading="Override body color"
        description="Change the global background and color"
      >
        {triggered ? (
          <BodyStyle
            // sx={{ body: { background: "red" } }}
            sx={{
              body: {
                dark: {
                  background: "hsla(169, 66%, 19%, 1)",
                  color: "whiteAlpha.900"
                },
                light: { background: "gray.100", color: "gray.900" }
              },
              ".chakra-heading": {
                fontSize: "26px !important"
              }
            }}
            // sx={{
            //     body: {
            //       background: 'blue.900',
            //       color: "whiteAlpha.900"
            //     },
            //     "*": {
            //       padding: "5px"
            //     }
            //   }
            // }
          />
        ) : (
          <BodyStyle />
        )}
        <VStack m={4} spacing={3}>
          <Button
            colorScheme="twitter"
            onClick={() => toggleTriggered(!triggered)}
          >
            {triggered ? "Default" : "Custom"} global style
          </Button>
        </VStack>
      </Section>
      {/* Alert */}
      <Section
        heading="Alert"
        description="Custom colors for variants"
        theme={extendTheme(AlertTheme, useTheme())}
      >
        <Stack m={4} spacing={3}>
          <Alert status="error" colorScheme="pink">
            <AlertIcon />
            User provided error color scheme pink
          </Alert>

          <Alert status="success">
            <AlertIcon />
            Default success color green
          </Alert>

          <Alert status="warning">
            <AlertIcon />
            Custom warning color scheme purple
          </Alert>

          <Alert status="info">
            <AlertIcon />
            Custom info color scheme cyan
          </Alert>
        </Stack>
      </Section>
      {/* Aspect Ratio */}
      <Section
        heading="Aspect Ratio"
        description="Change objectFit for child image/video"
        theme={useTheme()}
      >
        <AspectRatio
          m={4}
          bg="tomato"
          ratio={3 / 1}
          borderWidth="5px"
          borderColor="gray.300"
          sx={{
            "& > img, & > video": {
              objectFit: "contain"
            }
          }}
        >
          <Image src="https://bit.ly/naruto-sage" alt="naruto" />
        </AspectRatio>

        <Text mx={4} mt={4} align="center">
          A better way?
        </Text>
        <Box mx={4} mb={4} border="5px solid" borderColor="gray.300">
          <Image
            src="https://bit.ly/naruto-sage"
            alt="naruto"
            bgColor="tomato"
            objectFit="contain"
            sx={{
              aspectRatio: "3/1"
            }}
          />
        </Box>
        <Box mx={4} mb={4}>
          <Box
            as="video"
            controls
            src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
            poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
            alt="Big Buck Bunny"
            objectFit="contain"
            sx={{
              aspectRatio: "16/9"
            }}
          />
        </Box>
        <Box mx={4} mb={4}>
          <Box
            as="iframe"
            src="https://www.youtube.com/embed/wI2vqXsjsIo"
            width="100%"
            sx={{
              aspectRatio: "16/9"
            }}
          />
        </Box>
      </Section>
      {/* Avatar */}
      <Section
        heading="Avatar"
        description="Container and Excess Label colors"
        theme={extendTheme(AvatarTheme, useTheme())}
      >
        <AvatarTheming p={4} max={3} />
      </Section>
      {/* Button */}
      <Section
        heading="Button"
        description="Change a button variant"
        theme={extendTheme(ButtonTheme, useTheme())}
      >
        <Stack p={4} direction="row" spacing={4} align="center">
          <Button colorScheme="rebeccapurple" variant="solid">
            Solid
          </Button>
          <Button colorScheme="teal" variant="outline">
            Outline
          </Button>
          <Button colorScheme="teal" variant="ghost">
            Ghost
          </Button>
          <Button colorScheme="teal" variant="link">
            Link
          </Button>
        </Stack>{" "}
      </Section>
      {/* Checkbox */}
      <Section
        heading="Checkbox"
        theme={extendTheme(CheckboxTheme, useTheme())}
      >
        <ChkboxSepLabel mt={2} />
        <ChkboxCustCtrl mb={3} />
      </Section>
      {/* Form */}
      <Section
        heading="Form"
        description="Custom required indicator and color"
        theme={extendTheme(FormTheme, useTheme())}
      >
        <FormControl p={4} id="first-name" isRequired>
          <FormLabel
            requiredIndicator={<RequiredIndicator>!</RequiredIndicator>}
          >
            First name
          </FormLabel>
          <Input placeholder="First name" />
        </FormControl>
      </Section>
      {/* Input & Select */}
      <Section
        heading="Input & Select"
        theme={extendTheme(InputTheme, SelectTheme, useTheme())}
      >
        <Box margin={3}>
          <Input placeholder="Disabled Input" bgColor="gray.600" disabled />
          <Input placeholder="First name" mt={4} />
          <Input placeholder="Favorite fruit?" mt={4} list="mySuggestion" />
          <datalist id="mySuggestion">
            <option>Apple</option>
            <option>Banana</option>
            <option>Blackberry</option>
            <option>Blueberry</option>
            <option>Lemon</option>
            <option>Lychee</option>
            <option>Peach</option>
            <option>Pear</option>
          </datalist>
          <Select placeholder="Select an option" mt={4}>
            <option value="coffee">&#9749; Coffee</option>
            <option value="tropical">🍹 Tropical Drink</option>
            <option value="burger">🍔 Burger</option>
          </Select>
        </Box>
      </Section>
      {/* Image Overlay */}
      <Section heading="Image Overlay" theme={useTheme()}>
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            position="relative"
            my={3}
            _hover={{
              "> .profile-img": { opacity: 0.3 },
              "> .overlay-text": { opacity: 1 }
            }}
          >
            <Image
              className="profile-img"
              src="https://bit.ly/dan-abramov"
              opacity={1}
              transition="0.5s ease"
            />
            <Box
              className="overlay-text"
              opacity={0}
              position="absolute"
              transition="0.5s ease"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
            >
              <Text
                backgroundColor="blue.300"
                color="white"
                fontSize={16}
                px={4}
                py={3}
              >
                Dan Abramov
              </Text>
            </Box>
          </Box>
        </Flex>
      </Section>
      {/* Popover */}
      <Section
        heading="Popover"
        description="Unstyled content and no popover arrow"
        theme={extendTheme(PopoverTheme, useTheme())}
      >
        <Flex flexDirection="column" alignItems="center" p={3} mb={40}>
          <Popover variant="unstyled-content">
            <PopoverTrigger>
              <Button bg="blue.600" color="white">
                Trigger Unstyled
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              {/* <PopoverArrow /> */}
              <PopoverCloseButton />
              <PopoverHeader>Information</PopoverHeader>
              <PopoverBody>
                Unstyled popover content. Why? I don't know.
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Flex>
      </Section>
      {/* Switch */}
      <Section
        heading="Switch"
        description="No focus ring"
        theme={extendTheme(SwitchTheme, useTheme())}
      >
        <Stack align="center" direction="row" p={5}>
          <Switch size="sm" />
          <Switch size="md" />
          <Switch size="lg" />
        </Stack>
      </Section>
      {/* Tag */}
      <Section
        heading="Tag"
        description="Override background for light mode"
        theme={extendTheme(TagTheme, useTheme())}
      >
        <Stack align="center" direction="row" p={5}>
          {["sm", "md", "lg"].map((size) => (
            <Tag size={size} key={size} colorScheme="teal">
              Teal
            </Tag>
          ))}
        </Stack>
      </Section>
      {/* Table */}
      <Section
        heading="Table"
        description="Variant for custom header color"
        theme={extendTheme(TableTheme, useTheme())}
      >
        <Table variant="colorHeader" my={3}>
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </Section>
    </Container>
  );
}

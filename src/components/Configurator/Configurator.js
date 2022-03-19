// Chakra Imports
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  Flex, Link,
  Switch,
  Text,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react";
import { HSeparator } from "components/Separator/Separator";
import React, { useState } from "react";
import GitHubButton from "react-github-btn";
import { FaFacebook, FaTwitter } from "react-icons/fa";

export default function Configurator(props) {
  const {
    sidebarVariant,
    setSidebarVariant,
    secondary,
    isOpen,
    onClose,
    fixed,
    ...rest
  } = props;
  const [switched, setSwitched] = useState(props.isChecked);

  const { colorMode, toggleColorMode } = useColorMode();

  let bgButton = useColorModeValue(
    "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)",
    "white"
  );
  let colorButton = useColorModeValue("white", "gray.700");
  const secondaryButtonBg = useColorModeValue("white", "transparent");
  const secondaryButtonBorder = useColorModeValue("gray.700", "white");
  const secondaryButtonColor = useColorModeValue("gray.700", "white");
  const bgDrawer = useColorModeValue("white", "navy.800");
  const settingsRef = React.useRef();
  return (
    <>
      <Drawer
        isOpen={props.isOpen}
        onClose={props.onClose}
        placement={document.documentElement.dir === "rtl" ? "left" : "right"}
        finalFocusRef={settingsRef}
        blockScrollOnMount={false}
      >
        <DrawerContent bg={bgDrawer}>
          <DrawerHeader pt="24px" px="24px">
            <DrawerCloseButton />
            <Text fontSize="xl" fontWeight="bold" mt="16px">
              Argon Chakra Configurator
            </Text>
            <Text fontSize="md" mb="16px">
              See your dashboard options.
            </Text>
            <HSeparator />
          </DrawerHeader>
          <DrawerBody w="340px" ps="24px" pe="40px">
            <Flex flexDirection="column">
              <Flex justifyContent="space-between " mb="16px">
                <Text fontSize="md" fontWeight="600" mb="4px">
                  Navbar Fixed
                </Text>
                <Switch
                  colorScheme="blue"
                  isChecked={switched}
                  onChange={() => {
                    if (switched === true) {
                      props.onSwitch(false);
                      setSwitched(false);
                    } else {
                      props.onSwitch(true);
                      setSwitched(true);
                    }
                  }}
                />
              </Flex>
              <Flex
                justifyContent="space-between"
                alignItems="center"
                mb="24px"
              >
                <Text fontSize="md" fontWeight="600" mb="4px">
                  Dark/Light
                </Text>
                <Button
                  onClick={toggleColorMode}
                  color={colorMode === "light" ? "Dark" : "Light"}
                >
                  Toggle {colorMode === "light" ? "Dark" : "Light"}
                </Button>
              </Flex>

              <HSeparator />
              <Box mt="24px">
                <Box>
                  <Link
                    href="https://www.creative-tim.com/product/argon-dashboard-chakra?ref=creativetim-pud"
                    w="100%"
                    mb="16px"
                  >
                    <Button
                      w="100%"
                      mb="16px"
                      bg={bgButton}
                      color={colorButton}
                      fontSize="xs"
                      variant="no-effects"
                      px="30px"
                    >
                      Free Download
                    </Button>
                  </Link>
                  <Link
                    href="https://demos.creative-tim.com/docs-argon-dashboard-chakra/?ref=creativetim-pud"
                    w="100%"
                  >
                    <Button
                      w="100%"
                      bg={secondaryButtonBg}
                      border="1px solid"
                      borderColor={secondaryButtonBorder}
                      color={secondaryButtonColor}
                      fontSize="xs"
                      variant="no-effects"
                      px="20px"
                      mb="16px"
                    >
                      <Text textDecorationColor="none">Documentation</Text>
                    </Button>
                  </Link>
                </Box>
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  w="100%"
                  mb="16px"
                >
                  <GitHubButton
                    href="https://github.com/creativetimofficial/argon-dashboard-chakra"
                    data-icon="octicon-star"
                    data-show-count="true"
                    aria-label="Star creativetimofficial/argon-dashboard-chakra on GitHub"
                  >
                    Star
                  </GitHubButton>
                </Flex>
                <Box w="100%">
                  <Text mb="6px" textAlign="center">
                    Thank you for sharing!
                  </Text>
                  <Flex justifyContent="center" alignContent="center">
                    <Link
                      isExternal="true"
                      href="https://twitter.com/intent/tweet?url=https://www.creative-tim.com/product/argon-dashboard-chakra/&text=Check%20Argon%20Dashboard%20Chakra%20made%20by%20@simmmple_web%20and%20@CreativeTim"
                    >
                      <Button
                        colorScheme="twitter"
                        leftIcon={<FaTwitter />}
                        me="10px"
                      >
                        <Text>Tweet</Text>
                      </Button>
                    </Link>
                    <Link
                      isExternal="true"
                      href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/argon-dashboard-chakra/"
                    >
                      <Button colorScheme="facebook" leftIcon={<FaFacebook />}>
                        <Text>Share</Text>
                      </Button>
                    </Link>
                  </Flex>
                </Box>
              </Box>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

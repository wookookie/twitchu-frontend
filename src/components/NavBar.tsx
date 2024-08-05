import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import AuthButtons from "./AuthButtons";
import ColorModeSwitch from "./ColorModeSwitch";

function NavBar() {
  return (
    <HStack padding="12px" justify="space-between">
      <Image boxSize="40px" src={logo} alt="Logo" />
      <ColorModeSwitch />
      <AuthButtons />
    </HStack>
  );
}

export default NavBar;

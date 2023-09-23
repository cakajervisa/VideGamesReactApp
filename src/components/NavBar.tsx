import { HStack, Text, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import logo from "../assets/ps.png";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image
        src={logo}
        boxSize="70px"
        cursor="pointer"
        onClick={reloadPage}
        alt="Logo"
      />
      <SearchInput onSearch={onSearch}></SearchInput>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;

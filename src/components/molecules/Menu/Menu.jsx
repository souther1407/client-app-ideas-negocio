import {
  Menu as ChakraMenu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";

import React from "react";

const Menu = ({ title, elements }) => {
  return (
    <ChakraMenu>
      <MenuButton sx={{ border: "1px solid rgba(128, 128, 128, 0.226)" }}>
        {title}
      </MenuButton>
      <MenuList
        sx={{
          border: "1px solid rgba(128, 128, 128, 0.226)",
          background: "none",
        }}
      >
        {elements.map((renderProp) => (
          <MenuItem>{renderProp()}</MenuItem>
        ))}
      </MenuList>
    </ChakraMenu>
  );
};

export default Menu;

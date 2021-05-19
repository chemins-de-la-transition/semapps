import React from "react";
import { Drawer } from "@material-ui/core";
import { MenuItemLink } from "react-admin";

const SideMenu = ({ menuItems, sidebarOpen, setSidebarOpen }) => (
  <Drawer
    variant="temporary"
    open={sidebarOpen}
    onClose={() => setSidebarOpen(false)}
  >
    {Object.keys(menuItems).map(link => (
      <MenuItemLink
        key={link}
        to={link}
        primaryText={menuItems[link]}
      />
    ))}
  </Drawer>
);

export default SideMenu;

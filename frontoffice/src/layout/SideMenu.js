import React from "react";
import { Drawer } from "@material-ui/core";
import { MenuItemLink } from "react-admin";

const SideMenu = ({ menuItems, sidebarOpen, setSidebarOpen }) => (
  <Drawer
    variant="temporary"
    open={sidebarOpen}
    onClose={() => setSidebarOpen(false)}
  >
    {menuItems.map(menuItem => (
      <MenuItemLink
        key={menuItem.link}
        to={menuItem.link}
        primaryText={menuItem.name}
      />
    ))}
  </Drawer>
);

export default SideMenu;

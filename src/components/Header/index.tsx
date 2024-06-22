import React, { useState } from "react"

// Components
import Welcome from "./Welcome"

// Styles
import { MenuWrapper, Wrapper } from "./Header.styles"

// Links
import { Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import styled from "styled-components"

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1rem;
  color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Nav = styled.nav<{ menuopen: string }>`
  @media (max-width: 768px) {
    display: ${props => (props.menuopen === "false" ? 'none' : 'block' )};
  }
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin: 0 1rem;
  font-size: 25px;

  @media (max-width: 768px) {
    display: block;
    margin: 0.5rem 0;
  }
`;

  const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }

  div {
    width: 25px;
    height: 3px;
    background-color: #000;
    margin: 5px;
  }
`;

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
          <ListItemButton component="a" href="#portfolio">
            <ListItemButton>
              <ListItemIcon>
                <BusinessCenterIcon />
              </ListItemIcon>
              <ListItemText primary={'Portfolio'} />
            </ListItemButton>
          </ListItemButton>
          <ListItemButton component="a" href="#contact">
            <ListItemButton>
              <ListItemIcon>
                <MailOutlineIcon />
              </ListItemIcon>
              <ListItemText primary={'Contact'} />
            </ListItemButton>
          </ListItemButton>
      </List>
    </Box>
  );

  return (
    <Wrapper>
      <MenuWrapper>
        <HeaderWrapper>
          <Hamburger onClick={toggleDrawer(true)}>
            <div></div>
            <div></div>
            <div></div>
          </Hamburger>
          <Nav menuopen="false">
            <NavLink href="#portfolio">Portfolio</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </Nav>
        </HeaderWrapper>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </MenuWrapper>
     <Welcome />
    </Wrapper>
    
    
  )
}

export default Header





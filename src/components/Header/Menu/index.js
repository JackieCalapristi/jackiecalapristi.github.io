import React from 'react';

// Styles
import { Nav } from "./Menu.styles" 

const Menu = ({ items }) => (
  <Nav>
    {items.map(item => (
      <li key={item.id}> 
        <a href={item.link} target={item.name === 'Resume' ? "_blank" : ""} rel="noopener noreferrer">
          {item.name} 
        </a>
      </li>
    ))}
  </Nav>
);

export default Menu;
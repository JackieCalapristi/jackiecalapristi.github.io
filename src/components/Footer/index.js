import React from "react"
// Styles
import { FooterWrapper } from "./Footer.styles"

const Footer = () => (
  <FooterWrapper>
    Made by Jackie Calapristi © {(new Date().getFullYear())}
  </FooterWrapper>
)

export default Footer
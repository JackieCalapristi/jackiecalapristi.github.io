import React from "react"
// Image
import Headshot from "../../images/Headshot.jpg"
// Styles
import { Wrapper, TextWrapper, SubTextWrapper, ImgWrapper, Header } from "./Intro.styles"

const Intro = () => (
  <Wrapper>
    <ImgWrapper> 
      <img src={Headshot} alt="headshot of Jackie Calapristi smiling in Italy" />
    </ImgWrapper>
    <TextWrapper>
      <Header>I'm a software engineer.</Header>
      <SubTextWrapper>
        I work across the stack at Luum, a company that enables employers to understand, manage, and influence employee commute behavior. Luum is nestled in the heart of Seattle, WA.
      </SubTextWrapper>
    </TextWrapper>
  </Wrapper>
);

export default Intro
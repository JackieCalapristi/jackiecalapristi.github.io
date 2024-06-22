import React from "react"
// Image
import Headshot from "../../images/hat.jpeg"
// Styles
import { Wrapper, TextWrapper, SubTextWrapper, ImgWrapper, Header } from "./Intro.styles"
import Avatar from '@mui/material/Avatar';

const Intro = () => (
  <Wrapper>
    <ImgWrapper> 
      <Avatar
        alt="headshot of Jackie Calapristi smiling in Italy"
        src={Headshot}
        sx={{ width: 250, height: 250, padding: "30px 0px 30px 0px" }}
      />
    </ImgWrapper>
    <TextWrapper>
      <Header>I'm a senior software engineer.</Header>
      <SubTextWrapper>
        I'm currently developing software that enhances healthcare diagnostics, facilitates decentralized clinical trials, and improves the patient experience @ Tasso, Inc. nestled in the heart of Seattle, WA.
      </SubTextWrapper>
    </TextWrapper>
  </Wrapper>
);

export default Intro
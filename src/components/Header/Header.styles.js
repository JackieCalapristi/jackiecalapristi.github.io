import styled from "styled-components"
//Images
import HeroBackgroundImage from "../../images/BackgroundDesk.jpg"

export const Wrapper = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 120px;
  background-image: url('${HeroBackgroundImage}');

  @media screen and (min-width: 768px) {
    height: 550px;
  }
`
export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: left; 

  @media screen and (min-width: 768px) {
    justify-content: center; 
    align-items: center;
  }
`
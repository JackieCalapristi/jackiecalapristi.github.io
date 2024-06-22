import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  height: 465px;
`
export const TextWrapper = styled.div`
  text-align: center;
  font-size: 20px;
  margin-bottom: 20px;
`

export const SubTextWrapper = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    width: 650px;
  }
`
export const Header = styled.div`
  font-size: 40px;
  margin: 25px;

  @media screen and (min-width: 768px) {
    font-size: 50px;
    margin: 0px;
  }
`
export const ImgWrapper = styled.div`
  img {
    border-radius: 100%;
  }
`
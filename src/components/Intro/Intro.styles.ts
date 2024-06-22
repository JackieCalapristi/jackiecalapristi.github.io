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
  font-size: 18px;
  padding-bottom: 20px;

  @media screen and (min-width: 1010px) {
    text-align: center;
    font-size: 20px;
    padding-bottom: 20px;
  }
`

export const SubTextWrapper = styled.div`
  display: none;

  @media screen and (min-width: 954px) {
    display: block;
    width: 650px;
    margin-top: 15px;
  }
`
export const Header = styled.div`
  font-size: 30px;
  margin: 0px 20px;

  @media screen and (min-width: 768px) {
    font-size: 35px;
    margin: 0px;
  }

  @media screen and (min-width: 408px) {
    font-size: 40px;
    margin: 0px;
  }
}`

export const ImgWrapper = styled.div`
  img {
    border-radius: 100%;
  }
`
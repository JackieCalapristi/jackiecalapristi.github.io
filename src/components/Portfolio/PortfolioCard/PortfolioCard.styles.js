import styled, { css } from "styled-components"

export const PortfolioWrapper = styled.div`
  background-color: #dddddf;
`
export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  min-height: 150px;
  justify-content: center;
  padding-bottom: 35px;
`
export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  background-color: #FFFFFF;
	color: #000000;
  border-radius: 10px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  width: 300px;
	margin: 20px;
  overflow: hidden;
  
  :hover {
    box-shadow: 0 30px 30px rgba(0, 0, 0, 0.2);
    transition: all 0.5s ease;
  }
`
export const ImgWrapper = styled.div`
  height: 50px;
  background-color: #222222;
  color: #fff;
  padding: 30px;

  img {
    border-radius: 10px;
    max-height:100%; 
    max-width:100%;
    padding: 3px;
    border: 3px solid #000;
  }

  @media screen and (min-width: 768px) {
    display: block;
    height: 100px;
  }

  :hover {
    cursor: pointer;
  }
`
export const ViewWorkWrapper = styled.div`
  color: #fff;
  display: none;
  font-size: 12px;
  opacity: 0.6;
  margin-top: 30px;
  text-decoration: none;

  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`
export const TextWrapper = styled.div`
  width: 270px;
  padding: 20px;

  h2 {
    margin: 0;
  }
`
export const StatWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 15px 0;
`
const sharedStyle = css`
  display: flex;
  align-items: center;
  margin-right: 20px;
  font-family: "Muli Black", Arial, Helvetica, sans-serif;
  font-size: 0.8rem;

  img {
    margin: 0 10px 0 0;
  }
`
export const DateWrapper = styled.div`
  ${sharedStyle}
`
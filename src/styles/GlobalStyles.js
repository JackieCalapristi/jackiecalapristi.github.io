import { createGlobalStyle } from "styled-components"
import MuliRegular from "../fonts/Muli-Regular.woff"
import MuliBlack from "../fonts/Muli-Black.woff"
import MuliExtraLight from "../fonts/Muli-ExtraLight.ttf"
import RalewayBlack from "../fonts/Raleway-Black.ttf"
import RalewayMedium from "../fonts/Raleway-Medium.ttf"

export const colors = {
  white: "#fff",
  darkGrey: "#1a1c20",
  deepDarkGrey: "#404040",
  blueShade1: "#215973",
  blueShade2: "#6fadc6",
  blueShade3: "#d1e1e9",
}

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap');

  :root {
    --site-max-width: 1200px;
  }

  @font-face {
    font-family: 'Muli Regular';
    src: local('Muli Regular'), local('MuliRegular'),
      url('${MuliRegular}') format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Muli Black';
    src: local('Muli Black'), local('MuliBlack'),
      url('${MuliBlack}') format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Raleway Black';
    src: local('Raleway Black'), local('RalewayBlack'),
      url('${RalewayBlack}') format('ttf');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Raleway Medium';
    src: local('Raleway Medium'), local('RalewayMedium'),
      url('${RalewayMedium}') format('ttf');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Muli Extralight';
    src: local('Muli Extralight'), local('MuliExtraLight'),
      url('${MuliExtraLight}') format('ttf');
    font-weight: 100;
    font-style: normal;
  }

  body {
    background: #FFF;
    color: #000;
    font-family: "Muli Regular", Arial, Helvetica, sans-serif;
    margin: 0;
    transition: all 0.5s ease;
  }

  main {
  }

  p {
    font-size: 0.9rem;
    line-height: 1.2;

    @media screen and (min-width: 768px) {
      font-size: 1.1rem;
      line-height: 1.5;
    }
  }

  h1 {
    font-size: 2.5rem;
    letter-spacing: 1px;
    margin: 10px 0;
    color: #FFFFFF;
    font-weight: normal;

    @media screen and (min-width: 768px) {
      font-size: 1.5rem;
      font-family: 'Raleway', sans-serif;
      font-weight: lighter;
    }
  }

  h2 {
    font-size: 1rem;
    letter-spacing: 1px;
    margin: 10px 0;
    color: #FFFFFF;

    @media screen and (min-width: 768px) {
      font-size: 1.5rem;
    }
  }

  h3 {
    font-size: 0.8rem;
    letter-spacing: 1.5px;
    margin: 30px 0 -15px 0;

    @media screen and (min-width: 768px) {
      font-size: 1.2rem;
    }
  }

  h4 {
    text-align: center;
    font-size: 45px;
    font-weight: 100;
    padding: 30px 0 10px 0;
    margin: 0 0 10px 0;
  } 

  h6 {
    color: #FFF;
    opacity: 0.6;
    margin: 0;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  a {
    text-decoration: none;
  }
`;
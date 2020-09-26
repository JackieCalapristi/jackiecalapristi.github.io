import React from 'react';

//Components
import Header from './Header'
import Intro from './Intro'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Footer from './Footer'

// Styles
import { GlobalStyles } from '../styles/GlobalStyles'

function App() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Intro />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App



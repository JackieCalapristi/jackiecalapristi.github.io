import React from 'react';

//Components
import Header from './components/Header'
import Intro from './components/Intro'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Styles
import { GlobalStyles } from './styles/GlobalStyles.styles'

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



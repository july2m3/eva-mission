import React from 'react';

import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';

import './main.scss';

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
};

export default App;

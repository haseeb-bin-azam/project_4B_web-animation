// import logo from './logo.svg';
// import './App.css';
import React from 'react';

import Header from './components/Header';
import MainCortex from './components/MainCortex';
import Main2 from './components/Main2';
import Main3 from './components/Main3';
import Reviews from './components/reviews';
import Email from './components/Email';

function App() {
  return (
    <div>
      <Header />
      <MainCortex />
      <Main2 />
      <Main3 />
      <Reviews />
      <Email />
    </div>
  );
}

export default App;

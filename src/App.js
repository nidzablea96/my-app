import React, {Component, Fragment} from 'react';
//import logo from './img/logo.svg';
import './App.css';
import {Header} from './components/Header/Header';

class App extends Component
{
  render()
  {
    return (
      <Fragment>
        <Header/>
        <div className="main-content">App content</div>
      </Fragment>
    );
  }
}

export default App;

import React, { Component } from 'react';

import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';

class App extends Component {
  render() {
    return (
    <div className='container'>
      <Header />
      <div className='content'>
        <Sidebar />
        <Home />
      </div>
    </div>
    );
  }
}

export default App;

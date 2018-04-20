import React from 'react'

import logo from '../../assets/img/logo.png';
import Icon from './Icon';
import Navigation from './Navigation';

const Header = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
  }

  return (
    <header className="header">
      <img src={logo} alt="Fair Fare" className="logo"/>
      <form className='magnifying-glass' onSubmit={(e)=>handleOnSubmit(e)}>
        <input type="text" className="magnifying-glass__input" placeholder='search'/>
        <button className="magnifying-glass__button">
          <Icon name='magnifying-glass'/>
        </button>
      </form>
      <Navigation />
    </header>
  )
}

export default Header;

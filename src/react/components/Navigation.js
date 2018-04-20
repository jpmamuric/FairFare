import React from 'react';

import Icon from './Icon';
import user from '../../assets/img/user.jpg'

const NAV_ICON = [
  { name: 'bookmark', notifications: 6 },
  { name: 'chat', notifications: 8 },
]

const Navigation = () => {
  return (
    <nav className="navigation" >
      {
        NAV_ICON.map(icon => (
          <div key={icon.name} className="navigation__icon-box">
            <Icon name={icon.name}/>
            <span className='navigation__notificaton'>{icon.notifications}</span>
          </div>
        ))
      }
      <div className="navigation__user">
        <img src={user} alt="sidebar" className="navigation__user-img"/>
        <span className="navigation__username">Jonas</span>
      </div>
    </nav>
  )
}

export default Navigation;

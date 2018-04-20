import React from 'react'

import Icon from './Icon';

const SIDE_NAV_ICON = [
  { name: 'home', title: 'Hotel' },
  { name: 'aircraft', title: 'Flight' },
  { name: 'key', title: 'Car' },
  { name: 'map', title: 'Attractions' }
]

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul className="sidebar-nav">
        {
          SIDE_NAV_ICON.map( (icon,i) => (
            <li key={i} className="sidebar-nav__item">
              <a href="" className="sidebar-nav__link">
                <Icon name={icon.name} />
                <span>{icon.title}</span>
              </a>
            </li>
          ))
        }
      </ul>

      <div className="legal"> &copy; Jan Peter Mamuric 2018. All rights reserved.</div>
    </nav>
  )
}

export default Sidebar;

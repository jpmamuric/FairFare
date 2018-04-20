import React, { Component } from 'react'

import Icon from './Icon';

const SIDE_NAV_ICON = [
  { name: 'home', title: 'Hotel', active: true, activeClass: 'sidebar-nav__item--active'},
  { name: 'aircraft', title: 'Flight', activeClass: 'sidebar-nav__item--active'},
  { name: 'key', title: 'Car', activeClass: 'sidebar-nav__item--active' },
  { name: 'map', title: 'Attractions', activeClass: 'sidebar-nav__item--active' }
]

class Sidebar extends Component {
  state = { isActive: false };

  handleOnClick(name) {
    console.log(name);
  }

  render() {
    return (
      <nav className="sidebar">
        <ul className="sidebar-nav">
          {
            SIDE_NAV_ICON.map( (icon,i) => (
              <li
                key={i}
                className={ icon.active ? `sidebar-nav__item ${icon.activeClass}` : 'sidebar-nav__item '}
                onClick={(name)=>this.handleOnClick(icon.name)}>
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
}

export default Sidebar;

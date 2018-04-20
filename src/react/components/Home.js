import React, { Component } from 'react'

import Icon from './Icon';


const images = [
  { name : 'hotel-1'},
  { name : 'hotel-2'},
  { name : 'hotel-3'},
]

class Home extends Component {
  render() {
    return (
      <main className="hotel-view">
        <div className="gallery">
          {
            images.map( img => (
              <figure key={img.name} className="gallery__item">
                <img src={require(`../../assets/img/${img.name}.jpg`)} alt="" className="gallery__img"/>
              </figure>
            ))
          }
        </div>

        <div className="overview">
          <h1 className="overview__heading">
            Cosmopolitan
          </h1>

          <div className="overview__stars">
            {/* generate dynamic ratings*/}

            <Icon name='star' />
            <Icon name='star' />
            <Icon name='star' />
            <Icon name='star' />
          </div>

          <div className="overview__location">
            <Icon name='location-pin'/>
            <button className='btn-inline'>Las Vegas, Nevada</button>
          </div>

          <div className='overview__rating'>
            <div className='overview__rating-average'>8.6</div>
            <div className="overview__rating-count">421</div>
          </div>

        </div>
      </main>
    )
  }
}

export default Home;

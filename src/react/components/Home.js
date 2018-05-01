import React, { Component } from 'react'

import Details from './Details';
import ButtonCTA from './ButtonCTA';
import Icon from './Icon';

const images = [
  { name : 'hotel-1'},
  { name : 'hotel-2'},
  { name : 'hotel-3'},
]

class Home extends Component {
  state = {
    hotelRating: 4
  }

  renderStars(){
    let starIcons = []
    for (let i = 0; i < this.state.hotelRating ; i++ ) {
      starIcons.push(<Icon name='star' key={i} />)
    }

    return starIcons.map(star => star)
  }

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
            Blootopia
          </h1>

          <div className="overview__stars">
            { this.renderStars() }
          </div>

          <div className="overview__location">
            <Icon name='location-pin'/>
            <button className='btn-inline'>Las Vegas, Nevada</button>
          </div>

          <div className='overview__rating'>
            <div className='overview__rating-average'>8.6</div>
            <div className="overview__rating-count">421 Votes</div>
          </div>
        </div>

        <Details />
        <ButtonCTA />
      </main>
    )
  }
}

export default Home;

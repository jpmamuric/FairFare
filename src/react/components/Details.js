import React from 'react';

import detailData from './Details.json';
import reviewsData from './Reviews.json';
import Button from './Button';
import Reviews from './Reviews';

const Details = () => {
  return (
    <div className='detail'>
      <div className="detail__description">
        <p className="detail__description-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed neque feugiat lacus aliquet consectetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed neque feugiat lacus aliquet consectetur.
        </p>
        <p className="detail__description-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed neque feugiat lacus aliquet consectetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed neque feugiat lacus aliquet consectetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed neque feugiat lacus aliquet consectetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <ul className="detail__list">
          {
            detailData.amenities.map( item => (
              <li key={item.description} className="detail__item">{item.description}</li>
            ))
          }
        </ul>
        <div className="recommendations">
          <p className="recommendations__count">
            Jan and 3 other friends recommend this hotel.
          </p>
          <div className="recommendations__friends">
            {
              detailData.friends.map( (friend,i) => (
                <img key={i} src={require(`../../assets/img/${friend.src}`)} alt={friend.alt} className="recommendations__photo"/>
              ))
            }
          </div>
        </div>

      </div>

      <figure className='reviews-container'>
        <Reviews reviews={reviewsData} />
        <Button />
      </figure>
    </div>
  )
}

export default Details;

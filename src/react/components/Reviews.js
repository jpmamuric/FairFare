import React from 'react';

const Reviews = (props) => {
  return props.reviews.map( (review, i) => {
    const { name, date, comments , rating, img } = review;
    return (
      <figure className="review" key={i}>
        <blockquote className="review__text">
          { comments }
        </blockquote>
        <figcaption className="review__user">
          <img src={require(`../../assets/img/${img}`)} alt="user 1" className="review__photo"/>
          <div className="review__user-box">
            <p className="review__user-name">{ name }</p>
            <p className="review__user-date">{ date }</p>
          </div>
          <div className='review__rating'>{ rating }</div>
        </figcaption>
      </figure>
   )
  })
}

export default Reviews;

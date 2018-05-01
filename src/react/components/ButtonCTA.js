import React from 'react';

const ButtonCTA = () => (
  <div className="cta">
    <h2 className="cta__book-now">
      Good News! We have 4 four rooms for your selected dates!
    </h2>
    <button className='btn'>
      <span className='btn__show'>Book now</span>
      <span className="btn__hide">Only 4 rooms left</span>
    </button>
  </div>
)

export default ButtonCTA;

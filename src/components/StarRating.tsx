import React, { useState } from 'react'
import { AiFillStar } from 'react-icons/ai'

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div style={{ display: 'flex', alignItems: 'center' }} className="star-rating">
      {[...Array(5)].map((star, place) => {
        place += 1;
        return (
          <>
            <button
              type="button"
              key={place}
              className={place <= (hover || rating) ? "on" : "off"}
              onClick={() => setRating(place)}
              onMouseEnter={() => setHover(place)}
              onMouseLeave={() => setHover(rating)}
            >
              <span className="star"><AiFillStar /></span>
            </button>
          </>
        );
      })}
    </div>
  );
};
export default StarRating;
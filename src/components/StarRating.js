import React from 'react';


const StarRating = (props) => {

    return (
        <div className='star-rating'>
            {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                    <span
                        type='button'
                        key={index}
                        className={index <= (props.rate) ? "on" : "off"}
                        // onClick={() => setRating(index)}
                        // onMouseEnter={() => setHover(index)}
                        // onMouseLeave={() => setHover(rating)}
                    >
                        <span className='star'>&#9733;</span>
                    </span>
                )
            })}
        </div>
    );
}
 
export default StarRating;
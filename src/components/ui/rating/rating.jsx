import React from 'react';
import StarRatings from 'react-star-ratings';
import PropTypes from 'prop-types';

function Rating({rating}) {
  return (
    <StarRatings
      rating={rating}
      starRatedColor={'rgba(255, 209, 104, 1)'}
      starDimension={'10px'}
      starSpacing={'2px'}
    />
  );
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;

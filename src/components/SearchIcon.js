import React from 'react';
import classNames from 'classnames';

const SearchIcon = ({ size, isAnimating, }) => {
  // let iconColor = color || '#000';
  return(
    <svg
      className={classNames('search-icon', {'js-isAnimating': isAnimating})}
      viewBox="0 0 150 150"

      xmlns="http://www.w3.org/2000/svg">
      <title>Search</title>
      <rect x="100" y="100" width="40" height="20" transform="translate(110 -50) rotate(45)" className="search-handle" />
      <circle cx="75" cy="75" r="40" fill="none" strokeWidth="16px" className="search-circle"></circle>
    </svg>
  )
}
export default SearchIcon;

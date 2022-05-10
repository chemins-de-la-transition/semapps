import React from 'react';

const Person1 = ({ className }) => {
  return (
    <svg 
        className={className}
        width="42" 
        height="83" 
        viewBox="0 0 42 83" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle 
            cx="19.8594" 
            cy="7" 
            r="7" 
            fill="#203142"
        />
        <path 
            d="M0.359419 35.5C2.35942 23.1 13.1928 15.6667 18.3594 13.5H22.8594C43.2594 29.1 42.6927 40 39.8594 43.5C36.3594 46 34.026 41.3333 33.3594 40.5C34.1594 50.1 28.3594 66.1667 27.3594 76C20.9594 64.4 21.526 75.3333 17.8594 82.5C15.0594 72.1 8.8594 52.3333 8.85942 40.5C5.19275 44 -1.64058 47.9 0.359419 35.5Z" 
            fill="#203142"
        />
    </svg>
    
  );
};

export default Person1;

import React from 'react';

const Person2 = ({ className }) => {
  return (
    <svg 
        className={className}
        width="42" 
        height="83" 
        viewBox="0 0 42 83" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle r="7" transform="matrix(-1 0 0 1 21.4375 7)" fill="#203142"/>
        <path d="M40.9375 35.5C38.9375 23.1 28.1041 15.6667 22.9375 13.5H18.4375C-1.9625 29.1 -1.39583 40 1.4375 43.5C4.9375 46 7.27083 41.3333 7.9375 40.5C7.1375 50.1 12.9375 66.1667 13.9375 76C20.3375 64.4 19.7708 75.3333 23.4375 82.5C26.2375 72.1 32.4375 52.3333 32.4375 40.5C36.1041 44 42.9375 47.9 40.9375 35.5Z" fill="#203142"/>
    </svg>
    
  );
};

export default Person2;

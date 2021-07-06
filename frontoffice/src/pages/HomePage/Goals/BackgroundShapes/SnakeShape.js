import React from 'react';

const SnakeShape = ({ className }) => {
  return (
    <svg
      className={className}
      width="1050"
      height="1297"
      viewBox="0 0 1050 1297"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M676 37C510 21.8333 189.5 -70.9999 75.5 128.5C-31.9073 316.463 -30.4254 602.344 141.5 738C324 882 586.696 731.682 718.5 614C830.5 514 1088 398.1 1042 780.5C970.542 992.72 613 1013 648.5 1294.5"
        stroke="#EFBE74"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="8 18"
      />
      {/* <path d="M676 37C510 21.8333 189.5 -70.9999 75.5 128.5C-31.9073 316.463 -30.4254 602.344 141.5 738C324 882 586.696 731.682 718.5 614C830.5 514 1088 398.1 1042 780.5C970.542 992.72 613 1013 648.5 1294.5" stroke="#EFBE74" stroke-width="4" stroke-linecap="round" stroke-dasharray="8 18"/> */}
    </svg>
  );
};

export default SnakeShape;

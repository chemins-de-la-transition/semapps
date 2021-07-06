import React from 'react';
import { SvgIcon } from '@material-ui/core';

const PlaceIcon = props => {
  return (
    <SvgIcon viewBox="0 0 12 12" {...props}>
      <path
        d="M9.58884 1.48655C8.63024 0.527931 7.35569 0 6.00001 0C4.64434 0 3.36976 0.527931 2.41117 1.48655C1.45255 2.44519 0.924622 3.71973 0.924622 5.07538C0.924622 7.81785 3.5177 10.0989 4.9108 11.3244C5.1044 11.4947 5.27158 11.6417 5.40477 11.7661C5.57165 11.922 5.78584 12 5.99999 12C6.21419 12 6.42833 11.922 6.59523 11.7661C6.72843 11.6417 6.89561 11.4947 7.0892 11.3244C8.48231 10.0989 11.0754 7.81785 11.0754 5.07538C11.0754 3.71973 10.5475 2.44519 9.58884 1.48655ZM6.59523 10.5C6.3974 10.674 6.14086 10.8684 6 11C6.06473 11.0604 5.93529 11.0604 6 11C5.85916 10.8684 5.60261 10.674 5.40477 10.5C4.09508 9.34793 2 7.42459 2 5C2 2.58903 3.47359 1 5.88458 1C8.29555 1 10 2.58903 10 5C10 7.42459 7.90492 9.3479 6.59523 10.5Z"
      />
      <path
        d="M6.00004 2.64697C4.76673 2.64697 3.76337 3.65031 3.76337 4.88363C3.76337 6.11694 4.76673 7.12028 6.00004 7.12028C7.23334 7.12028 8.23668 6.11694 8.23668 4.88363C8.23668 3.65031 7.23334 2.64697 6.00004 2.64697ZM6.00004 6.41731C5.15434 6.41731 4.46631 5.72928 4.46631 4.8836C4.46631 4.03793 5.15434 3.34989 6.00004 3.34989C6.84573 3.34989 7.53374 4.03793 7.53374 4.8836C7.53374 5.72928 6.84573 6.41731 6.00004 6.41731Z"
      />
    </SvgIcon>
  );
};

export default PlaceIcon;

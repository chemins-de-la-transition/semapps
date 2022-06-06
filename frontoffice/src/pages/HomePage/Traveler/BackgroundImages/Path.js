import React from 'react';

const Path = ({ className, ellipse1, ellipse2, ellipse3 }) => {
  return (
    <>
        <svg className={className} width="1440" height="244" viewBox="0 0 1440 244" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 199C36 209.5 121.5 232 195 232C261.189 232 306 182.5 358 179C435.5 173.784 466.132 208.435 612.5 236C673.216 247.435 760.105 245.546 856.183 198.5C940.251 157.335 955.5 119 1082 173.5C1146.76 201.403 1205 160.5 1238 132C1287.57 89.1881 1363.5 38.0002 1439 2.00024" stroke="white" stroke-width="4" stroke-dasharray="10 10"/>
        </svg>
        <svg className={ellipse1} width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle r="23.5" transform="matrix(-1 0 0 1 23.5 23.5)" fill="white"/>
        </svg>
        <svg className={ellipse2} width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle r="23.5" transform="matrix(-1 0 0 1 23.5 23.5)" fill="white"/>
        </svg>
        <svg className={ellipse3} width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle r="23.5" transform="matrix(-1 0 0 1 23.5 23.5)" fill="white"/>
        </svg>
    </>
  );
};

export default Path;



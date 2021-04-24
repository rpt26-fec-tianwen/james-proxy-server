import React from 'react';
// CompassSVG
export default (props) => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 34 34' className={props.style.locatorLinkIcon}>
            <path d='M17,34a1,1,0,0,1-1-1V29a1,1,0,0,1,2,0v4A1,1,0,0,1,17,34Z'></path>
            <path d='M17,0A17,17,0,1,0,34,17,17,17,0,0,0,17,0Zm0,32A15,15,0,0,1,16,2.05V5a1,1,0,0,0,2,0V2.05A15,15,0,0,1,32,16H29a1,1,0,0,0,0,2H32A15,15,0,0,1,17,32Z'></path>
            <path d='M14,14h0L7.69,26.31,20,20h0L26,8,14,14Zm-1.69,7.69,3.18-6.2,3,3Z'></path>
            <path d='M5,18H1a1,1,0,0,1,0-2H5a1,1,0,0,1,0,2Z'></path>
        </svg>
    )
}
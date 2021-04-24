import React from 'react';

export default (props) => {
    const { style } = props;
    const { buttonRoot, buttonGreen } = style;

    return (
        <a className={`${buttonRoot} ${buttonGreen}`}>
            <span>View All Results</span>
        </a>
    )
}
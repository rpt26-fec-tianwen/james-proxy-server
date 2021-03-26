import React from 'react';

const FooterSecondary = (props) => {

    const { style } = props;
    const { footerSecondary, footerSecondarySpan } = style;
    const imgStyle = {
        height: '35px',
    };

    return (
        <span className={footerSecondary}>
            <img src='./images/purveyor_royal_court.webp' style={imgStyle}></img>
            <span className={footerSecondarySpan}>Purveyor to the Royal Court of Sweden</span>
        </span>
    )
};

export default FooterSecondary;
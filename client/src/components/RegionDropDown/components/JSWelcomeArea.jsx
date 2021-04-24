import React from 'react';

export default (props) => {
    const { style } = props;
    const { jsWelcomeArea, teaserRoot, dividerRoot, dividerDivider, dividerContent, dividerTitle, dividerImage, dividerBarArea, dividerSubtitle  } = style;

    return (
        <div className={props.style.jsWelcomeArea}>
            <div className={`${teaserRoot} ${dividerRoot}`}>
                <div className={dividerDivider}>
                    <img className={dividerImage} src='images/save-the-arctic-fox.webp'/>
                    <div className={dividerContent}>
                        <span className={dividerTitle}>
                            Select Region
                        </span>
                    </div>
                </div>
            </div>
            <div className={dividerBarArea}>
                <div className={dividerSubtitle}>
                    <p>
                        {" Please select your "}
                        <strong style={{fontWeight: 600}}>
                            Shipping Region:
                        </strong>
                    </p>
                </div>
            </div>
        </div>
    )
}
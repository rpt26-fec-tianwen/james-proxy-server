import React from 'react';
import HelpButtonSVG from './SVGS/HelpButtonSVG.jsx';

const HelpButton = (props) => {
    const { style } = props;
    const { helpButton, helpButtonSpan, helpButtonSecondSpan } = style;
    return (
        <div style={{ float: 'right' }}>
            <div>
                <button className={helpButton}>
                    <span className={helpButtonSpan}>
                        <HelpButtonSVG />
                    </span>
                    <span className={helpButtonSecondSpan}>
                        Help
                    </span>
                </button>
            </div>

        </div>
    );
}

export default HelpButton;
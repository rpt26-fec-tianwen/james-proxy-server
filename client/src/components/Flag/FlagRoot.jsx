import React from 'react';

export default (props) => {
    const { style } = props;
    const { flagRoot, flagOverlay, flagClose, flagLabel, flagToggle, flagFlag } = style;
    return (
        <div className={flagRoot}>
            <div className={flagOverlay}>
                <span className={flagClose}></span>
                <span className={flagToggle}>
                    <span className={flagLabel}>Our Heritage</span>
                    <span className={flagFlag}></span>
                </span>
            </div>
        </div>
    )
}
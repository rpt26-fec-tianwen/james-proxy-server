import React from 'react';
import JSWelcomeArea from './components/JSWelcomeArea.jsx';
import RegionGroups from './components/RegionGroups.jsx';

export default (props) => {
    const { style } = props;
    const { regionRoot, regionClose, regionContainer } = style;
    return (
        <div className={regionRoot} style={{ height: '513px', top: '-513px' }}>
            <div className={regionContainer}>
                <a className={regionClose} onClick={() => { document.getElementsByTagName('html')[0].style.marginTop = 0 }} />
                <JSWelcomeArea style={style} />
                <RegionGroups style={style} />
            </div>
        </div>
    )
}
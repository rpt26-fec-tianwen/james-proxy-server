import React from 'react';

export default (props) => {
    const { style } = props;
    const { headerSubNav, headerSubNavHolder, headerSubNav12, headerSubNav13, headerSubNavItem, menuItem, headerFeature, ourAdventures, ourAdventuresX } = style;
    return (
        <div className={`${headerSubNav}`} id='ourAdventuresSubNav'>
            <div className={headerSubNavHolder} id={ourAdventuresX} >
                <ul className={`${headerSubNav12} ${ourAdventures}`} >
                    <li className={`${headerSubNavItem}`}>
                        <a className={menuItem}>Foxtrail</a>
                    </li>
                    <li className={`${headerSubNavItem}`}>
                        <a className={menuItem}>Classic</a>
                    </li>
                    <li className={`${headerSubNavItem}`}>
                        <a className={menuItem}>Polar</a>
                    </li>
                    <li className={`${headerSubNavItem}`}>
                        <a className={menuItem}>Nature Is Waiting</a>
                    </li>
                </ul>
                <div className={headerFeature}>

                </div>
            </div>
        </div>
    )
}
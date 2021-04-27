import React from 'react';

export default (props) => {
    const { style } = props;
    const { headerSubNav, headerSubNavHolder, headerSubNav12, headerSubNav13, headerSubNavItem, menuItem, headerFeature, kids, kidsX } = style;
    return (
        <div className={`${headerSubNav}`} id='kidsSubNav'>
            <div className={headerSubNavHolder} id={kidsX} >
                <ul className={`${headerSubNav12} ${kids}`} >
                    <li className={`${headerSubNavItem}`}>
                        <a className={menuItem}>Backpacks</a>
                    </li>
                    <li className={`${headerSubNavItem}`}>
                        <a className={menuItem}>Tops</a>
                    </li>
                    <li className={`${headerSubNavItem}`}>
                        <a className={menuItem}>Accessories</a>
                    </li>
                </ul>
                <div className={headerFeature}>

                </div>
            </div>
        </div>
    )
}
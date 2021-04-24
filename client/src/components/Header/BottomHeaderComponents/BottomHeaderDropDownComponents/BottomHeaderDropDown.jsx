import React from 'react';

export default (props) => {
    const { style } = props;
    const { headerSubNav, headerSubNavHolder, headerSubNav12, headerSubNav13, headerSubNavItem, menuItem, headerFeature } = style;
    return (
        <div className={headerSubNav} id='menSubNav'>
            <div className={headerSubNavHolder}>
                <ul className={headerSubNav12}>
                    <li className={headerSubNavItem}>
                        <a className={menuItem}>New Arrivals</a>
                    </li>
                    <li className={headerSubNavItem}>
                        <a className={menuItem}>Jackets</a>
                        <ul className={headerSubNav13}>
                            <li className={headerSubNavItem}>
                                <a className={menuItem}>{' Outdoor Jackets '}</a>
                            </li>
                            <li className={headerSubNavItem}>
                                <a className={menuItem}>{' Trekking Jackets '}</a>
                            </li>
                            <li className={headerSubNavItem}>
                                <a className={menuItem}>{' Shell Jackets '}</a>
                            </li>
                            <li className={headerSubNavItem}>
                                <a className={menuItem}>{' Mountaineering Jackets '}</a>
                            </li>
                            <li className={headerSubNavItem}>
                                <a className={menuItem}>{' Hunting Jackets '}</a>
                            </li>
                            <li className={headerSubNavItem}>
                                <a className={menuItem}>{' Anoraks Jackets '}</a>
                            </li>
                            <li className={headerSubNavItem}>
                                <a className={menuItem}>{' Vests'}</a>
                            </li>
                            <li className={headerSubNavItem}>
                                <a className={menuItem}>{' Winter Jackets '}</a>
                            </li>
                            <li className={headerSubNavItem}>
                                <a className={menuItem}>{' Down Jackets '}</a>
                            </li>
                            <li className={headerSubNavItem}>
                                <a className={menuItem}>{' Parkas '}</a>
                            </li>
                        </ul>
                    </li>
                    <li className={headerSubNavItem}>
                        <a className={menuItem}>Trousers</a>
                        <ul className={headerSubNav13}>
                            <li className={headerSubNavItem}>
                                <a className={menuItem}>{' Outdoor Jackets '}</a>
                            </li>
                        </ul>
                    </li>
                    <li className={headerSubNavItem}>
                        <a className={menuItem}>Tops</a>
                        <ul className={headerSubNav13}>
                            <li className={headerSubNavItem}>
                                <a className={menuItem}>{' T-Shirts & Tank Tops '}</a>
                            </li>
                        </ul>
                    </li>
                    <li className={headerSubNavItem}>
                        <a className={menuItem}>Accessories</a>
                        <ul className={headerSubNav13}>
                            <li className={headerSubNavItem}>
                                <a className={menuItem}>{' Caps, Hats & Beanies '}</a>
                            </li>
                        </ul>
                    </li>
                    <li className={headerSubNavItem}>
                        <a className={menuItem}>Featured Collections</a>
                        <ul className={headerSubNav13}>
                            <li className={headerSubNavItem}>
                                <a className={menuItem}>{' Best Sellers '}</a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div className={headerFeature}>

                </div>
            </div>
        </div>
    )
}
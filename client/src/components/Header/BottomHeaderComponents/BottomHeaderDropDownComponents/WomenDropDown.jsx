import React from 'react';

export default (props) => {
    const { style } = props;
    const { headerSubNav, headerSubNavHolder, headerSubNav12, headerSubNav13, headerSubNavItem, menuItem, headerFeature } = style;
    return (
        <div className={headerSubNav} id='womenSubNav'>
            <div className={headerSubNavHolder} >
                <ul className={headerSubNav12} >
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
                                <a className={menuItem}>{' Trekking Trousers '}</a>
                            </li>
                            <li className={headerSubNavItem}>
                                <a className={menuItem}>{' Outdoor Trousers '}</a>
                            </li>
                            <li className={headerSubNavItem}>
                                <a className={menuItem}>{' Shorts & Skirts '}</a>
                            </li>
                            <li className={headerSubNavItem}>
                                <a className={menuItem}>{' Shell Trousers '}</a>
                            </li>
                            <li className={headerSubNavItem}>
                                <a className={menuItem}>{' Mountaineering Trousers '}</a>
                            </li>
                            <li className={headerSubNavItem}>
                                <a className={menuItem}>{' Trekking Tights '}</a>
                            </li>
                            <li className={headerSubNavItem}>
                                <a className={menuItem}>{' Base Layer Bottoms '}</a>
                            </li>
                        </ul>
                    </li>
                    <li className={headerSubNavItem}>
                        <a className={menuItem}>Tops</a>
                        <ul className={headerSubNav13}>
                            <li className={headerSubNavItem}>
                                <a className={menuItem}>{' T-Shirts & Tank Tops '}</a>
                            </li>
                            <li className={headerSubNavItem}>
                                <a className={menuItem}>{' Shirts '}</a>
                            </li>
                            <li className={headerSubNavItem}>
                                <a className={menuItem}>{' Sweaters & Knitwear '}</a>
                            </li>
                            <li className={headerSubNavItem}>
                                <a className={menuItem}>{' Fleece '}</a>
                            </li>
                            <li className={headerSubNavItem}>
                                <a className={menuItem}>{' Base Layer Tops '}</a>
                            </li>
                            <li className={headerSubNavItem}>
                                <a className={menuItem}>{' Dresses '}</a>
                            </li>
                        </ul>
                    </li>
                    <li className={headerSubNavItem}>
                        <a className={menuItem}>Accessories</a>
                        <ul className={headerSubNav13}>
                            <li className={headerSubNavItem}>
                                <a className={menuItem}>{' Caps, Hats & Beanies '}</a>
                            </li>
                            <li className={headerSubNavItem}>
                                <a className={menuItem}>{' Belts & Braces '}</a>
                            </li>
                            <li className={headerSubNavItem}>
                                <a className={menuItem}>{' Care Products '}</a>
                            </li>
                            <li className={headerSubNavItem}>
                                <a className={menuItem}>{' Other Accessories '}</a>
                            </li>
                        </ul>
                    </li>
                    <li className={headerSubNavItem}>
                        <a className={menuItem}>Featured Collections</a>
                        <ul className={headerSubNav13}>
                            <li className={headerSubNavItem}>
                                <a className={menuItem}>{' Best Sellers '}</a>
                            </li>
                            <li className={headerSubNavItem}>
                                <a className={menuItem}>{' Acne Studios x Fjallraven '}</a>
                            </li>
                            <li className={headerSubNavItem}>
                                <a className={menuItem}>{' Heritage Classics '}</a>
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
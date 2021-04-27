import React from 'react';

export default (props) => {
    const { style } = props;
    const { headerSubNav, headerSubNavHolder, headerSubNav12, headerSubNav13, headerSubNavItem, menuItem, headerFeature } = style;
    return (
        <div className={headerSubNav} id='bagsNGearSubNav'>
            <div className={headerSubNavHolder} >
                <ul className={headerSubNav12} >
                    <li className={headerSubNavItem}>
                        <a className={menuItem}>New Arrivals</a>
                    </li>
                    <li className={headerSubNavItem}>
                        <a className={menuItem}>Kanken</a>
                        <ul className={headerSubNav13}>
                            <li className={headerSubNavItem}>
                                <a className={menuItem}>{' Kanken Bags '}</a>
                            </li>
                            <li className={headerSubNavItem}>
                                <a className={menuItem}>{' Kanken Accessories '}</a>
                            </li>
                            <li className={headerSubNavItem}>
                                <a className={menuItem}>{' Save the Arctic Fox '}</a>
                            </li>
                        </ul>
                    </li>
                    <li className={headerSubNavItem}>
                        <a className={menuItem}>Backpacks & bags</a>
                        <ul className={headerSubNav13}>
                            <li className={headerSubNavItem}>
                                <a className={menuItem}>{' Daypacks '}</a>
                            </li>
                            <li className={headerSubNavItem}>
                                <a className={menuItem}>{' Laptop Bags '}</a>
                            </li>
                            <li className={headerSubNavItem}>
                                <a className={menuItem}>{' Shoulder Bags '}</a>
                            </li>
                            <li className={headerSubNavItem}>
                                <a className={menuItem}>{' Trekking Backpacks '}</a>
                            </li>
                            <li className={headerSubNavItem}>
                                <a className={menuItem}>{' Hunting Backpacks '}</a>
                            </li>
                            <li className={headerSubNavItem}>
                                <a className={menuItem}>{' Mountaineering Trousers '}</a>
                            </li>
                            <li className={headerSubNavItem}>
                                <a className={menuItem}>{' Mountaineering Backpacks '}</a>
                            </li>
                            <li className={headerSubNavItem}>
                                <a className={menuItem}>{' Hip Packs '}</a>
                            </li>
                            <li className={headerSubNavItem}>
                                <a className={menuItem}>{' Travel Bags '}</a>
                            </li>
                        </ul>
                    </li>
                    <li className={headerSubNavItem}>
                        <a className={menuItem}>Accessories</a>
                        <ul className={headerSubNav13}>
                            <li className={headerSubNavItem}>
                                <a className={menuItem}>{' Backpack & Bag Accessories '}</a>
                            </li>
                            <li className={headerSubNavItem}>
                                <a className={menuItem}>{' Wallets & Small Bags '}</a>
                            </li>
                            <li className={headerSubNavItem}>
                                <a className={menuItem}>{' Travel Accessories '}</a>
                            </li>
                            <li className={headerSubNavItem}>
                                <a className={menuItem}>{' Hunting Accessories '}</a>
                            </li>
                        </ul>
                    </li>
                    <li className={headerSubNavItem}>
                        <a className={menuItem}>Tents & sleeping bags</a>
                        <ul className={headerSubNav13}>
                            <li className={headerSubNavItem}>
                                <a className={menuItem}>{' Tents '}</a>
                            </li>
                            <li className={headerSubNavItem}>
                                <a className={menuItem}>{' Tent Accessories '}</a>
                            </li>
                            <li className={headerSubNavItem}>
                                <a className={menuItem}>{' Sleeping Bags'}</a>
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
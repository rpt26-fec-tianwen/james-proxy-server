import React from 'react';
const HeaderMenu = (props) => {
  const { styles } = props;
  const { headerMenu, headerNav, headerNavItem, menuItem } = styles;
  return (
    <nav className={headerMenu}>
      <ul className={headerNav}>
        <li className={headerNavItem}>
          <a className={menuItem}>Men</a>
        </li>
        <li className={headerNavItem}>
          <a className={menuItem}>Women</a>
        </li>
        <li className={headerNavItem}>
          <a className={menuItem}>Bags & Gear</a>
        </li>
        <li className={headerNavItem}>
          <a className={menuItem}>Kids</a>
        </li>
        <li className={headerNavItem}>
          <a className={menuItem}>Our Adventures</a>
        </li>
      </ul>
    </nav>
  )
}

export default HeaderMenu;
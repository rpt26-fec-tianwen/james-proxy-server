import React from 'react';
import HeaderSearch from './HeaderSearch.jsx';
import HeaderSubNav from './BottomHeaderDropDownComponents/BottomHeaderDropDown.jsx';
const HeaderMenu = (props) => {
  const { styles } = props;
  const { headerMenu, headerToggle, searchMobile, headerNav, headerNavItem, menuItem, headerDivider } = styles;
  return (
    <nav className={headerMenu}>
      <ul className={headerNav}>
        <li className={headerNavItem}>
          <a className={menuItem} 
          onMouseEnter={() => {document.getElementById('menSubNav').style.visibility = 'visible'}}
          onMouseLeave={() => {document.getElementById('menSubNav').style.visibility = 'hidden'}}
          >Men</a>
          <HeaderSubNav style={styles}/>
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
      <hr className={headerDivider} />
      <HeaderSearch style={styles}/>
    </nav>
  )
}

export default HeaderMenu;
import React from 'react';
import HeaderSearch from './HeaderSearch.jsx';
import MenSubNav from './BottomHeaderDropDownComponents/BottomHeaderDropDown.jsx';
import WomenSubNav from './BottomHeaderDropDownComponents/WomenDropDown.jsx';
import BagsNGear from './BottomHeaderDropDownComponents/BagsNGearDropDown.jsx';
import KidsSubNav from './BottomHeaderDropDownComponents/KidsSubNav.jsx';
import OurAdventures from './BottomHeaderDropDownComponents/OurAdventures.jsx';

const HeaderMenu = (props) => {
  const { styles } = props;
  const { headerMenu, headerToggle, searchMobile, headerNav, headerNavItem, menuItem, headerDivider, jsBorderBottom } = styles;
  return (
    <nav className={headerMenu}>
      <ul className={headerNav}>
        <li className={headerNavItem}
          onMouseOver={() => {
            document.getElementById('menSubNav').style.visibility = 'visible'
            document.getElementById('menTitle').classList.add(jsBorderBottom);
          }}
          onMouseOut={() => {
            document.getElementById('menSubNav').style.visibility = 'hidden';
            document.getElementById('menTitle').classList.remove(jsBorderBottom);
          }}>
          <a className={menuItem} id='menTitle'>Men</a>
          <MenSubNav style={styles} />
        </li>
        <li className={headerNavItem}
          onMouseOver={() => {
            document.getElementById('womenSubNav').style.visibility = 'visible'
            document.getElementById('womenTitle').classList.add(jsBorderBottom);
          }}
          onMouseOut={() => {
            document.getElementById('womenSubNav').style.visibility = 'hidden'
            document.getElementById('womenTitle').classList.remove(jsBorderBottom);
          }}>
          <a className={menuItem} id='womenTitle'>Women</a>
          <WomenSubNav style={styles} />
        </li>
        <li className={headerNavItem}
          onMouseOver={() => {
            document.getElementById('bagsNGearSubNav').style.visibility = 'visible'
            document.getElementById('bagsTitle').classList.add(jsBorderBottom);
          }}
          onMouseOut={() => {
            document.getElementById('bagsNGearSubNav').style.visibility = 'hidden'
            document.getElementById('bagsTitle').classList.remove(jsBorderBottom);
          }}>
          <a className={menuItem} id='bagsTitle'>Bags & Gear</a>
          <BagsNGear style={styles} />
        </li>
        <li className={headerNavItem}
          onMouseOver={() => {
            document.getElementById('kidsSubNav').style.visibility = 'visible'
            document.getElementById('kidsTitle').classList.add(jsBorderBottom);
          }}

          onMouseOut={() => {
            document.getElementById('kidsSubNav').style.visibility = 'hidden'
            document.getElementById('kidsTitle').classList.remove(jsBorderBottom);
          }}>
          <a className={menuItem} id='kidsTitle'>Kids</a>
          <KidsSubNav style={styles} />
        </li>
        <li className={headerNavItem}
          onMouseOver={() => {
            document.getElementById('ourAdventuresSubNav').style.visibility = 'visible'
            document.getElementById('ourAdventuresTitle').classList.add(jsBorderBottom);
          }}
          onMouseOut={() => {
            document.getElementById('ourAdventuresSubNav').style.visibility = 'hidden'
            document.getElementById('ourAdventuresTitle').classList.remove(jsBorderBottom);
          }}>
          <a className={menuItem} id='ourAdventuresTitle'>Our Adventures</a>
          <OurAdventures style={styles} />
        </li>
      </ul>
      <hr className={headerDivider} />
      <HeaderSearch style={styles} />
    </nav>
  )
}

export default HeaderMenu;
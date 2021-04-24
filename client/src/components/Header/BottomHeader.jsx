import React from 'react';
import FjakeravenLogo from '../FjakeravenLogo.jsx';
import HeaderMenu from './BottomHeaderComponents/HeaderMenu.jsx'
import MiniCart from './BottomHeaderComponents/MiniCart.jsx';

const BottomHeader = (props) => {
  const { styles } = props;
  const { headerContainer, headerToggle, searchMobile } = styles;
  return (
    <div className={props.styles.headerRoot}>
      <div className={headerContainer}>
        <span className={headerToggle}>
        </span>
        <FjakeravenLogo style={styles} />
        <HeaderMenu styles={styles} />
        <span className={`${headerToggle} ${searchMobile}`}></span>
        <MiniCart style={styles} />
      </div >
    </div>
  )
}

export default BottomHeader;
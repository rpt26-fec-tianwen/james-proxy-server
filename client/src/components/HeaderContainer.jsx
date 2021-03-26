import React from 'react';
import FjakeravenLogo from './FjakeravenLogo.jsx';
import HeaderMenu from './HeaderMenu.jsx'

const HeaderContainer = (props) => {
  const { styles } = props;
  const { headerContainer, headerToggle } = styles;
  return (
    <div className={headerContainer}>
      <span className={headerToggle}>
      </span>
      <FjakeravenLogo style={styles}/>
      <HeaderMenu styles={props.styles}/>
      <span className={headerToggle}></span>
    </div >
  )
}

export default HeaderContainer;
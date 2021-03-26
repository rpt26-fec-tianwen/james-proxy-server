import React from 'react';
import axios from 'axios';
import TopNavigationContainer from './TopNavigationContainer.jsx';
import HeaderContainer from './HeaderContainer.jsx';
import HeaderMenu from './HeaderMenu.jsx';

const Header = (props) => {
  return (
    <header className={props.styles.headerRoot}>
      <HeaderContainer styles={props.styles} />
      {/* <HeaderMenu styles={props.styles}/> */}
    </header>
  )
}

export default Header;
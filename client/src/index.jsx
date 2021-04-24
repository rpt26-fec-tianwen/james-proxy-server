import React from 'react';
import ReactDOM from 'react-dom';
import BottomHeader from './components/Header/BottomHeader.jsx';
import TopHeader from './components/Header/TopHeader.jsx';
import RegionRoot from './components/RegionDropDown/RegionRoot.jsx';
import Footer from './components/Footer/Footer.jsx';
import HeaderSearch from './components/Header/HeaderSearch.jsx'
import CartRoot from './components/Header/Cart/CartRoot.jsx';
import styles from './app.scss';
import indexStyles from './styles/html.scss';

const IndexHead = () => {
  return (
    <header>
      <TopHeader styles={styles} />
      <BottomHeader styles={styles} />
    </header>
  )
}

const HeaderSearchSection = () => {
  return <HeaderSearch styles={styles} />
}

const CartRootSection = () => {
  return <CartRoot style={styles}/>
}

const RegionSection = () => {
  return (
    <div>
      <RegionRoot style={styles} />
    </div>
  )
}

const IndexFoot = () => {
  return (
    <div>
      <Footer style={styles} />
    </div>
  )
}
ReactDOM.render(<RegionSection />, document.getElementById('region-root'));
ReactDOM.render(<IndexHead />, document.getElementById('head'));
ReactDOM.render(<HeaderSearchSection/>, document.getElementById('header-search'));
ReactDOM.render(<CartRootSection/>, document.getElementById('cart-root'))
ReactDOM.render(<IndexFoot />, document.getElementById('foot'));
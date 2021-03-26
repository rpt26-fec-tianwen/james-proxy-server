import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.jsx';
import TopNavigationContainer from './components/TopNavigationContainer.jsx'
import Footer from './components/Footer.jsx';
import styles from './app.scss';
import HelpButton from './components/HelpButton.jsx';

const IndexHead = () => {
  return (
    <div>
      <TopNavigationContainer styles={styles} />
      <Header styles={styles} />
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

ReactDOM.render(<IndexHead />, document.getElementById('head'));
ReactDOM.render(<IndexFoot />, document.getElementById('foot'));
import React from 'react';

const TopNavigationContainer = (props) => {
  const { styles } = props;
  const {skipLink, topNavigationRoot, topNavigationContainer, topNavigationMessage, topNavigationNav, linkRoot, linkIcon, locatorLinkIcon, regionCountry, topNavigation, flagIcon, flagIconUs, regionCountryFlag, regionCountryTitle, regionCountryCurrency, arrowLinkIcon, regionTopNavLangSelect } = styles;
  return (
    <div className={topNavigationRoot}>
      <a className={skipLink}></a>
      <a className={skipLink}></a>
      <a className={skipLink}></a>
      <div className={topNavigationContainer}>
        <p className={topNavigationMessage}></p>
        <div style={{ textAlign: 'center' }}>
          <strong>
            <a title="Free Shipping">
              Free Shipping over $75
        </a>
          </strong>
        </div>
        <p></p>
        {/* Top Navigation Nav */}
        <nav className={topNavigationNav}>
          <a className={linkRoot}>
            <img className={linkIcon} src='./images/organic.webp' />
            <span>Sustainability</span>
          </a>
          <a className={linkRoot}>
            <svg className={locatorLinkIcon} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 34 34'>
              <path d="M17,34a1,1,0,0,1-1-1V29a1,1,0,0,1,2,0v4A1,1,0,0,1,17,34Z"></path>
              <path d='M17,0A17,17,0,1,0,34,17,17,17,0,0,0,17,0Zm0,32A15,15,0,0,1,16,2.05V5a1,1,0,0,0,2,0V2.05A15,15,0,0,1,32,16H29a1,1,0,0,0,0,2H32A15,15,0,0,1,17,32Z'></path>
              <path d='M14,14h0L7.69,26.31,20,20h0L26,8,14,14Zm-1.69,7.69,3.18-6.2,3,3Z'></path>
              <path d='M5,18H1a1,1,0,0,1,0-2H5a1,1,0,0,1,0,2Z'></path>
            </svg>
            <span>Store Locator</span>
          </a>

          <a className={linkRoot} onClick={() => {document.getElementsByTagName('html')[0].style.marginTop = '513px'}}>
            <span className={`${regionCountry} ${topNavigation}`}>
              <span className={`${flagIcon} ${flagIconUs} ${regionCountryFlag}`}>
              </span>
              <span>
                <span className={regionCountryTitle}>
                  {" United States "}
                <span className={regionCountryCurrency}>
                     | $
                  </span>
                </span>
              </span>
            </span>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21.24 34' className={arrowLinkIcon}>
              <path d='M3,34a3,3,0,0,1-2.12-.88,3,3,0,0,1,0-4.24L12.76,17,.88,5.12A3,
                          3,0,0,1,5.12.88L21.24,17,5.12,33.12A3,3,0,0,1,3,34Z'></path>
            </svg>
          </a>

          <span className={linkRoot}>
            <select className={regionTopNavLangSelect}>
              <option>English (United States)</option>
            </select>
            <svg xmlns="http://www.w3.org/2000/svg" className={arrowLinkIcon} viewBox="0 0 21.24 34">
              <path d='M3,34a3,3,0,0,1-2.12-.88,3,3,0,0,1,0-4.24L12.76,17,.88,5.12A3,
                          3,0,0,1,5.12.88L21.24,17,5.12,33.12A3,3,0,0,1,3,34Z'></path>
            </svg>
          </span>

          <a className={linkRoot}>
            <span>My account</span>
            <svg xmlns="http://www.w3.org/2000/svg" className={arrowLinkIcon} viewBox="0 0 21.24 34">
              <path d='M3,34a3,3,0,0,1-2.12-.88,3,3,0,0,1,0-4.24L12.76,17,.88,5.12A3,
                          3,0,0,1,5.12.88L21.24,17,5.12,33.12A3,3,0,0,1,3,34Z'></path>
            </svg>
          </a>

        </nav>
      </div>
    </div>
  )
}

export default TopNavigationContainer;
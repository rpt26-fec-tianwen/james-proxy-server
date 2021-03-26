import React from 'react';
import FjakeravenLogo from './FjakeravenLogo.jsx';
import FooterSecondary from './FooterSecondary.jsx';
import HelpButton from './HelpButton.jsx';

const FooterJSX = (props) => {
  const { style } = props;
  const { footerRoot, footerContainer, footerLink, footerLinks, footerTitle, linkRoot, footerGroup, footerColumn, footerLogo, seperatorBlock, seperatorBlockDesktop, locatorLinkIcon, footerIcon, underline } = style;

  const customerServiceArr = [`Contact Us`, `FAQ`, `Shipping`, `Returns`, `Warranty`, `Buyers Guide`, `Care & Repair`, `Size Guide`, `Industry Pro Program`];
  const aboutFJArr = [`About Us`, `Sustainability`, `Our Materials`, `Careers`, `Press Room`];
  const legalArr = [`Terms & Conditions`, `Accessibility Statement`, `Privacy Policy`];
  const ourAdventuresArr = [`Fjallraven Polar`, `Fjallraven Classic`, `Opt-Out of Google Tracking`];
  const socialArr = ['Store Locator', 'Fjallraven', 'Fjallraven', 'Kanken', 'Kanken']


  const footerColumns = [[[`Customer Service`, customerServiceArr]], [[`About Fjallraven`, aboutFJArr], [`Legal`, legalArr]], [[`Our Adventures`, ourAdventuresArr], [null, socialArr]]];
  let socialFRavenCount = 0;
  let socialKRavenCount = 0;
  return (
    <footer className={footerRoot}>
      <div className={footerContainer}>
        <FjakeravenLogo style={style} x={true} />

        {footerColumns.map((column, index) => {
          return <nav key={index} className={footerColumn}>
            {column.map((group, index) => {
              console.log(group)
              return <div key={index} className={footerGroup}>
                <label className={footerTitle}>{group[0]}</label>
                <ul className={footerLinks}>
                  {group[1].map((item, index) => {
                    if (item === 'Fjallraven') {
                      socialFRavenCount++;
                    }

                    if (item === 'Kanken') {
                      socialKRavenCount++;
                    }
                    return item !== 'Store Locator' && item !== 'Fjallraven' && item !== 'Kanken' ? (
                      <li key={index} className={footerLink}>
                        <a className={linkRoot}>
                          {item !== `Opt-Out of Google Tracking` ?
                            <span>{item}</span>
                            : <span className={underline}>{item}</span>
                          }
                        </a>
                      </li>
                    ) : (
                        <span>
                          <li key={index} className={footerLink}>
                            <a className={linkRoot}>
                              {
                                item === 'Store Locator' ?
                                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 34 34' className={locatorLinkIcon}>
                                    <path d='M17,34a1,1,0,0,1-1-1V29a1,1,0,0,1,2,0v4A1,1,0,0,1,17,34Z'></path>
                                    <path d='M17,0A17,17,0,1,0,34,17,17,17,0,0,0,17,0Zm0,32A15,15,0,0,1,16,2.05V5a1,1,0,0,0,2,0V2.05A15,15,0,0,1,32,16H29a1,1,0,0,0,0,2H32A15,15,0,0,1,17,32Z'></path>
                                    <path d='M14,14h0L7.69,26.31,20,20h0L26,8,14,14Zm-1.69,7.69,3.18-6.2,3,3Z'></path>
                                    <path d='M5,18H1a1,1,0,0,1,0-2H5a1,1,0,0,1,0,2Z'></path>
                                  </svg>
                                  :
                                  // Facebook Fjallraven
                                  item === 'Fjallraven' && socialFRavenCount === 1 ?
                                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 500' className={footerIcon}>
                                      <path d='M249.7,0.1c-138.1,0-250,111.9-250,250c0,138.1,111.9,250,250,250c138.1,0,250-111.9,250-250 C499.7,112.1,387.8,0.1,249.7,0.1z M323.2,151.8c0,0-24.9,0-34.7,0c-12.3,0-14.8,5-14.8,17.7c0,10.6,0,30.6,0,30.6h49.5l-4.8,53.8 h-44.8v160.7h-64.2v-160h-33.4v-54.5h33.4c0,0,0-7.8,0-42.9C209.4,117,231,96,278.7,96c7.8,0,44.4,0,44.4,0V151.8z'></path>
                                    </svg>
                                    :
                                    // Instagram Fjallraven
                                    item === 'Fjallraven' && socialFRavenCount === 2 ?
                                      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 500' className={footerIcon}>
                                        <circle cx='250.3' cy='255.2' r='48.2'></circle>
                                        <path d='M362.9,170c-2.6-6.7-5.8-11.6-10.8-16.6c-5.1-5.1-9.9-8.2-16.6-10.8c-5.1-2-12.7-4.3-26.8-5 c-15.2-0.7-19.8-0.8-58.4-0.8c-38.6,0-43.2,0.1-58.4,0.8c-14.1,0.6-21.7,3-26.8,5c-6.7,2.6-11.6,5.8-16.6,10.8 c-5.1,5.1-8.2,9.9-10.8,16.6c-2,5.1-4.3,12.7-5,26.8c-0.7,15.2-0.8,19.8-0.8,58.4c0,38.6,0.1,43.2,0.8,58.4c0.6,14.1,3,21.7,5,26.8 c2.6,6.7,5.8,11.6,10.8,16.6c5.1,5.1,9.9,8.2,16.6,10.8c5.1,2,12.7,4.3,26.8,5c15.2,0.7,19.8,0.8,58.4,0.8 c38.6,0,43.2-0.1,58.4-0.8c14.1-0.6,21.7-3,26.8-5c6.7-2.6,11.6-5.8,16.6-10.8c5.1-5.1,8.2-9.9,10.8-16.6c2-5.1,4.3-12.7,5-26.8 c0.7-15.2,0.8-19.8,0.8-58.4c0-38.6-0.1-43.2-0.8-58.4C367.3,182.7,364.9,175.1,362.9,170z M250.3,329.5c-41,0-74.2-33.2-74.2-74.2 c0-41,33.2-74.2,74.2-74.2c41,0,74.2,33.2,74.2,74.2C324.5,296.2,291.2,329.5,250.3,329.5z M327.4,195.4c-9.6,0-17.3-7.8-17.3-17.3 c0-9.6,7.8-17.3,17.3-17.3c9.6,0,17.3,7.8,17.3,17.3C344.8,187.7,337,195.4,327.4,195.4z'></path>
                                        <path d='M250,0C111.9,0,0,111.9,0,250c0,138.1,111.9,250,250,250c138.1,0,250-111.9,250-250C500,111.9,388.1,0,250,0z M393.9,314.8c-0.7,15.4-3.1,25.9-6.7,35.1c-3.7,9.5-8.6,17.6-16.7,25.6c-8,8-16.1,13-25.6,16.7c-9.2,3.6-19.7,6-35.1,6.7 c-15.4,0.7-20.3,0.9-59.6,0.9c-39.3,0-44.2-0.2-59.6-0.9c-15.4-0.7-25.9-3.1-35.1-6.7c-9.5-3.7-17.6-8.6-25.6-16.7 c-8-8-13-16.1-16.7-25.6c-3.6-9.2-6-19.7-6.7-35.1c-0.7-15.4-0.9-20.3-0.9-59.6c0-39.3,0.2-44.2,0.9-59.6 c0.7-15.4,3.1-25.9,6.7-35.1c3.7-9.5,8.6-17.6,16.7-25.6c8-8,16.1-13,25.6-16.7c9.2-3.6,19.7-6,35.1-6.7 c15.4-0.7,20.3-0.9,59.6-0.9c39.3,0,44.2,0.2,59.6,0.9c15.4,0.7,25.9,3.1,35.1,6.7c9.5,3.7,17.6,8.6,25.6,16.7 c8,8,13,16.1,16.7,25.6c3.6,9.2,6,19.7,6.7,35.1c0.7,15.4,0.9,20.3,0.9,59.6C394.8,294.5,394.6,299.4,393.9,314.8z'></path>
                                      </svg>
                                      :
                                      // Facebook Kanken
                                      item === 'Kanken' && socialKRavenCount === 1 ?
                                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 500' className={footerIcon}>
                                          <path d='M249.7,0.1c-138.1,0-250,111.9-250,250c0,138.1,111.9,250,250,250c138.1,0,250-111.9,250-250 C499.7,112.1,387.8,0.1,249.7,0.1z M323.2,151.8c0,0-24.9,0-34.7,0c-12.3,0-14.8,5-14.8,17.7c0,10.6,0,30.6,0,30.6h49.5l-4.8,53.8 h-44.8v160.7h-64.2v-160h-33.4v-54.5h33.4c0,0,0-7.8,0-42.9C209.4,117,231,96,278.7,96c7.8,0,44.4,0,44.4,0V151.8z'></path>
                                        </svg>
                                        // Instagram Kanken
                                        :
                                        item === 'Kanken' && socialKRavenCount === 2 ?
                                          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 500' className={footerIcon}>
                                            <circle cx='250.3' cy='255.2' r='48.2'></circle>
                                            <path d='M362.9,170c-2.6-6.7-5.8-11.6-10.8-16.6c-5.1-5.1-9.9-8.2-16.6-10.8c-5.1-2-12.7-4.3-26.8-5 c-15.2-0.7-19.8-0.8-58.4-0.8c-38.6,0-43.2,0.1-58.4,0.8c-14.1,0.6-21.7,3-26.8,5c-6.7,2.6-11.6,5.8-16.6,10.8 c-5.1,5.1-8.2,9.9-10.8,16.6c-2,5.1-4.3,12.7-5,26.8c-0.7,15.2-0.8,19.8-0.8,58.4c0,38.6,0.1,43.2,0.8,58.4c0.6,14.1,3,21.7,5,26.8 c2.6,6.7,5.8,11.6,10.8,16.6c5.1,5.1,9.9,8.2,16.6,10.8c5.1,2,12.7,4.3,26.8,5c15.2,0.7,19.8,0.8,58.4,0.8 c38.6,0,43.2-0.1,58.4-0.8c14.1-0.6,21.7-3,26.8-5c6.7-2.6,11.6-5.8,16.6-10.8c5.1-5.1,8.2-9.9,10.8-16.6c2-5.1,4.3-12.7,5-26.8 c0.7-15.2,0.8-19.8,0.8-58.4c0-38.6-0.1-43.2-0.8-58.4C367.3,182.7,364.9,175.1,362.9,170z M250.3,329.5c-41,0-74.2-33.2-74.2-74.2 c0-41,33.2-74.2,74.2-74.2c41,0,74.2,33.2,74.2,74.2C324.5,296.2,291.2,329.5,250.3,329.5z M327.4,195.4c-9.6,0-17.3-7.8-17.3-17.3 c0-9.6,7.8-17.3,17.3-17.3c9.6,0,17.3,7.8,17.3,17.3C344.8,187.7,337,195.4,327.4,195.4z'></path>
                                            <path d='M250,0C111.9,0,0,111.9,0,250c0,138.1,111.9,250,250,250c138.1,0,250-111.9,250-250C500,111.9,388.1,0,250,0z M393.9,314.8c-0.7,15.4-3.1,25.9-6.7,35.1c-3.7,9.5-8.6,17.6-16.7,25.6c-8,8-16.1,13-25.6,16.7c-9.2,3.6-19.7,6-35.1,6.7 c-15.4,0.7-20.3,0.9-59.6,0.9c-39.3,0-44.2-0.2-59.6-0.9c-15.4-0.7-25.9-3.1-35.1-6.7c-9.5-3.7-17.6-8.6-25.6-16.7 c-8-8-13-16.1-16.7-25.6c-3.6-9.2-6-19.7-6.7-35.1c-0.7-15.4-0.9-20.3-0.9-59.6c0-39.3,0.2-44.2,0.9-59.6 c0.7-15.4,3.1-25.9,6.7-35.1c3.7-9.5,8.6-17.6,16.7-25.6c8-8,16.1-13,25.6-16.7c9.2-3.6,19.7-6,35.1-6.7 c15.4-0.7,20.3-0.9,59.6-0.9c39.3,0,44.2,0.2,59.6,0.9c15.4,0.7,25.9,3.1,35.1,6.7c9.5,3.7,17.6,8.6,25.6,16.7 c8,8,13,16.1,16.7,25.6c3.6,9.2,6,19.7,6.7,35.1c0.7,15.4,0.9,20.3,0.9,59.6C394.8,294.5,394.6,299.4,393.9,314.8z'></path>
                                          </svg>
                                          : null}
                              <span>{item}</span>
                            </a>
                          </li>
                          {item === 'Fjallraven' && socialFRavenCount === 2 || item === 'Store Locator' ?
                            <li className={seperatorBlock}><div className={seperatorBlockDesktop}></div></li>
                            : null
                          }
                        </span>
                      )

                  })}
                  {group[0] === 'About Fjallraven' ? <li className={seperatorBlock}><div className={seperatorBlockDesktop}></div></li> : null}

                </ul>
              </div>
            })}
          </nav>
        })}

        <FooterSecondary style={style} />
      </div>
      <HelpButton style={style} />
    </footer>
  )
}

export default FooterJSX;
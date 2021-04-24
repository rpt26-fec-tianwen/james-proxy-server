import React from 'react';
import FjakeravenLogo from '../FjakeravenLogo.jsx';
import FooterSecondary from './FooterComponents/FooterSecondary.jsx';
import HelpButton from './FooterComponents/HelpButton.jsx';
import IGSVG from './FooterComponents/SVGS/IGSVG.jsx';
import FBSVG from './FooterComponents/SVGS/FBSVG.jsx';
import CompassSVG from './FooterComponents/SVGS/CompassSVG.jsx';

const FooterJSX = (props) => {
  const { style } = props;
  const { footerRoot, footerContainer, footerLink, footerLinks, footerTitle, linkRoot, footerGroup, footerColumn, footerLogo, seperatorBlock, seperatorBlockDesktop, locatorLinkIcon, footerIcon, underline } = style;

  const customerServiceArr = [`Contact Us`, `FAQ`, `Shipping`, `Returns`, `Warranty`, `Buyers Guide`, `Care & Repair`, `Size Guide`, `Industry Pro Program`];
  const aboutFJArr = [`About Us`, `Sustainability`, `Our Materials`, `Careers`, `Press Room`, '_x_'];
  const legalArr = [`Terms & Conditions`, `Accessibility Statement`, `Privacy Policy`];
  const ourAdventuresArr = [`Fjallraven Polar`, `Fjallraven Classic`, `Opt-Out of Google Tracking`];
  const socialArr = ['Store Locator', '_x_', 'Fjallraven', 'Fjallraven', '_x_', 'Kanken', 'Kanken']


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
                    // First Handles the Seperator Blocks
                    return item === '_x_' ?
                      <li key={index} className={seperatorBlock}><div className={seperatorBlockDesktop}></div></li>
                      // Next Handles Items that have associated SVG's
                      : item === 'Store Locator' || item === 'Fjallraven' || item === 'Kanken' ? (
                        <span key={index} >
                          <li className={footerLink}>
                            <a className={linkRoot}>
                              {
                                item === 'Store Locator' ?
                                  // Compass SVG
                                  <CompassSVG style={style} />
                                  :
                                  // Facebook Fjallraven/Kanken
                                  (item === 'Fjallraven' && socialFRavenCount === 1) || (item === 'Kanken' && socialKRavenCount === 1) ?
                                    <FBSVG style={style} />
                                    :
                                    // Instagram Fjallraven/Kanken
                                    (item === 'Fjallraven' && socialFRavenCount === 2) || (item === 'Kanken' && socialKRavenCount === 2) ?
                                      <IGSVG style={style} />
                                      : null}
                              <span>{item}</span>
                            </a>
                          </li>
                        </span>
                      )
                        // Finally Handles all other items
                        : (
                          <li key={index} className={footerLink}>
                            <a className={linkRoot}>
                              {item !== `Opt-Out of Google Tracking` ?
                                <span>{item}</span>
                                : <span className={underline}>{item}</span>
                              }
                            </a>
                          </li>
                        )
                  })}
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
import React from 'react';
export default (props) => {
    const { style } = props;
    const { regionGroups, regionGroupsColumnOne, regionGroupsColumnTwo, regionGroupTitle, regionCountry, regionCountries, flagIcon, regionCountryFlag, regionCountryTitle, regionCountryCurrency, regionCountryDomain } = style;
    const { flagIconDE, flagIconDK, flagIconEU, flagIconFI, flagIconFR, flagIconNL, flagIconNO, flagIconUK, flagIconSE } = style;
    const { flagIconUS, flagIconCA } = style;
    const {flagIconAP, flagIconCN, flagIconKR} = style;
    const euroArr = [["Germany", flagIconDE, '| €'], ["Denmark", flagIconDK, '| kr'], ["Other European Countries", flagIconEU, '| €'], ["Finland", flagIconFI, '| €'], ["Finland", flagIconFR, "| €"], ["Netherlands", flagIconNL, '| €'], ["Norway", flagIconNO, '| kr'], ["Sweden", flagIconSE, '| kr'], ["United Kingdom", flagIconUK, '| £']];
    const naArr = [["Canada", flagIconCA, "| $"], ["United States", flagIconUS, "| $"]];
    const asiaArr = [["Asia Pacific", flagIconAP, "| $", "http://www.fjallravenasia.com"], ["China", flagIconCN, '| ¥', 'http://www.fjallraven.cn'], ["Korea", flagIconKR, '| ₩', 'http://www.fjallraven.co.kr']];

    return (
        <div className={regionGroups}>
            <div className={regionGroupsColumnOne}>
                <span className={regionGroupTitle}>Europe</span>
                <nav className={regionCountries}>
                    {euroArr.map((item, index) => {
                        return (
                            <a key={index} className={regionCountry}>
                                <span className={`${flagIcon} ${item[1]} ${regionCountryFlag}`}></span>
                                <span>
                                    <span className={regionCountryTitle}>
                                        {` ${item[0]} `}
                                        <span className={regionCountryCurrency}>{item[2]}</span>
                                    </span>
                                </span>
                            </a>
                        )
                    })}
                </nav>
            </div>
            <div className={regionGroupsColumnTwo}>
                <span className={regionGroupTitle}>North America</span>
                <nav className={regionCountries}>
                    {naArr.map((item, index) => {
                        return (
                            <a key={index} className={regionCountry}>
                                <span className={`${flagIcon} ${item[1]} ${regionCountryFlag}`}></span>
                                <span>
                                    <span className={regionCountryTitle}>
                                        {` ${item[0]} `}
                                        <span className={regionCountryCurrency}>{item[2]}</span>
                                    </span>
                                </span>
                            </a>
                        )
                    })}
                </nav>
            </div>
            <div className={regionGroupsColumnTwo}>
                <span className={regionGroupTitle}>Asia</span>
                <nav className={regionCountries}>
                    {asiaArr.map((item, index) => {
                        return (
                            <a key={index} className={regionCountry}>
                                <span className={`${flagIcon} ${item[1]} ${regionCountryFlag}`}></span>
                                <span>
                                    <span className={regionCountryTitle}>
                                        {` ${item[0]} `}
                                        <span className={regionCountryCurrency}>{item[2]}</span>
                                    </span>
                                    < span className={regionCountryDomain}>{item[3]}</span>
                                </span>
                            </a>
                        )
                    })}
                </nav>
            </div>
        </div>
    )
}
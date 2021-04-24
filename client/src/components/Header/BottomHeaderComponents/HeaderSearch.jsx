import React from 'react';

const HeaderSearch = (props) => {
    const { style } = props;
    const { headerSearch, headerSearchOpen, headerSearchClose, searchOpen } = style;
    return (
        <a className={headerSearch} id='headerSearch'>
            <span>
                <span className={headerSearchOpen} id='searchOpen' onClick={() => {
                    document.getElementById('headerSearchRoot').classList.add(searchOpen)
                    document.getElementById('headerSearch').style.backgroundImage = `url("images/x.svg")`;
                    document.getElementById('searchOpen').style.display = 'none';
                    document.getElementById('searchClose').style.display = 'inline';
                    }}>Search</span>
                <span className={headerSearchClose} id='searchClose' onClick={() => {
                    document.getElementById('headerSearchRoot').classList.remove(searchOpen)
                    document.getElementById('headerSearch').style.backgroundImage = `url("images/magnification.svg")`;
                    document.getElementById('searchOpen').style.display = 'inline';
                    document.getElementById('searchClose').style.display = 'none';
            }}>Close</span>
            </span>
        </a>
    )
}

export default HeaderSearch;
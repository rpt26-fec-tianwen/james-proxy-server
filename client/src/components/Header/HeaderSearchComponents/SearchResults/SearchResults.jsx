import React from 'react';
import ButtonGreen from './ButtonGreen.jsx';
import ProductsRoot from './ProductsRoot.jsx';

export default (props) => {
    const { style, searchImages } = props;
    const { searchResults, searchTop } = style;
    return (
        <div className={searchResults}>
            <div className={searchTop}>
                <ButtonGreen style={style} />
            </div>
            <ProductsRoot searchImages={searchImages} style={style} />
        </div>

    )
}
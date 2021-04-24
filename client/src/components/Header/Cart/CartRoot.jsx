import React from 'react';
import CartCart from './CartComponents/CartCart.jsx';

export default (props) => {
    const { style } = props;
    const { cartRoot } = style;
    return (
        <div className={cartRoot} id='cartRoot'>
            <CartCart style={style}/>
        </div>)
}
import React, { useState, useEffect } from 'react';

const MiniCart = (props) => {
    const { style } = props;
    const { miniCart, headerCart, headerCartIcon, headerSearchX, headerCartAmount, headerCartText, cartOpen, cartOpenCart } = style;
    const [miniCartHeader, toggleMiniCartHeader] = useState(false);

    return (
        <div className={miniCart} onClick={() => {
            if (document.getElementById('cartRoot').classList.contains(cartOpen) || document.getElementById('cartRoot').classList.contains('cartOpen')) {
                document.getElementById('cartRoot').classList.remove(cartOpen)
                document.getElementById('cart-cart').classList.remove(cartOpenCart)
                document.getElementById('cartRoot').classList.remove('cartOpen')
                document.getElementById('cart-cart').classList.remove('cartOpenCart')
                toggleMiniCartHeader(false);
            }             
            else {
                document.getElementById('cartRoot').classList.add(cartOpen)
                document.getElementById('cart-cart').classList.add(cartOpenCart)
                toggleMiniCartHeader(true);
            }

        }}>
            {

                miniCartHeader === false ?
                    <span className={headerCart}>
                        <span className={headerCartIcon}></span>
                        <span className={headerCartAmount}>0</span>
                        <span className={headerCartText}>
                            <span>$0.00</span>
                        </span>
                    </span>
                    :
                    <span className={headerCart}>
                        <span className={headerSearchX}></span>
                        <span className={headerCartText}>
                            <span>Hide cart</span>
                        </span>
                    </span>
            }
        </div>
    )
}

export default MiniCart;
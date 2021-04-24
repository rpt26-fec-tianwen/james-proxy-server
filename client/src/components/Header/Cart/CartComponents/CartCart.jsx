import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default (props) => {
    const { style } = props;
    const { cartOpen, cartOpenCart, cartCart, miniCart, cartCheckout, btnCheckout, buttonRoot, buttonRed, cartButton, cartWrapper, cartTitle, productListRoot, totalsRoot, cartMethods, cCards } = style;
    const { productListItem, productListWrapper, productListRemove, productListImage, productListTitle, productListContent, productListInfo, productListColor, productListColorCode, selectRoot, productListSelect, selectSelect, productListPrice } = style;
    const { ccVisa, ccMC, ccAmex, ccDiscover } = style;
    const [product, setProduct] = useState({});
    const [multiplier, setMultiplier] = useState(1);
    
    useEffect(async() => {
        const productId = window.location.href.split('').filter(char => {return (Number(char) || char === '0')}).join('');
        const results = await axios(`/cartImage/${productId}`);
        setProduct(results.data);
    }, [])

    return (
        <div className={cartCart} id='cart-cart'>
            <div id={miniCart}>
                <div className={cartWrapper}>
                    <span className={cartTitle}>Your shopping cart</span>
                    {product.title ?
                    <ul className={productListRoot}>
                        {/* {
                            mapper.map((product) => {
                                return ( */}
                                    <li className={productListItem}>
                                        <span className={productListRemove} onClick={() => {
                                            setProduct({})
                                        }}></span>
                                        <a className={productListImage} href=''>
                                            <img crossOrigin='true' src={product.urls ? JSON.parse(product.urls)[0] : null}/>
                                        </a>
                                        <div className={productListWrapper}>
                                            <a href='' className={productListTitle}>{product.title}</a>
                                            <div className={productListContent}>
                                                <div className={productListInfo}>
                                                    <div className={productListColor}>
                                                        <span>{product.colors ? Math.floor(Math.random() * 1000) + ' - ' + JSON.parse(product.colors)[0] : null}</span>
                                                        <span className={productListColorCode} style={{ backgroundColor: product.colors ? JSON.parse(product.colors)[0] : null }}></span>
                                                    </div>
                                                    <div>
                                                        <span>L</span>
                                                    </div>
                                                </div>
                                                <div className={`${selectRoot} ${productListSelect}`}>
                                                    <select className={selectSelect} onChange={(event) => {setMultiplier(event.target.value)}}>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                        <option value="6">6</option>
                                                        <option value="7">7</option>
                                                        <option value="8">8</option>
                                                        <option value="9">9</option>
                                                        <option value="10">10</option>
                                                    </select>
                                                </div>
                                                <span className={productListPrice}>{`$${(product.price * multiplier).toFixed(2)}`}</span>
                                            </div>
                                        </div>
                                    </li>
                                {/* )
                            })
                        } */}
                    </ul> : null}
                    <dl className={totalsRoot}>
                        <dt>Shipping calculated at checkout</dt>
                        <dd></dd>
                        <dt>Tax calculated at checkout</dt>
                        <dd></dd>
                        <dt>Subtotal</dt>
                        <dd>{product.title ? `$${(product.price * multiplier).toFixed(2)}` : '$0.00'}</dd>

                        <hr />
                        <dt><strong>Total</strong></dt>
                        <dd><strong>{product.title ? `$${(product.price * multiplier).toFixed(2)}` : '$0.00'}</strong></dd>
                    </dl>
                </div>

            </div>
            <div className={cartCheckout}>
                <button id={btnCheckout} className={`${buttonRoot} ${buttonRed} ${cartButton}`}>Checkout</button>
                <div className={cartMethods}>
                    <span>We accept:</span>
                    <span className={`${cCards} ${ccVisa}`}></span>
                    <span className={`${cCards} ${ccMC}`}></span>
                    <span className={`${cCards} ${ccAmex}`}></span>
                    <span className={`${cCards} ${ccDiscover}`}></span>

                </div>

            </div>
        </div>)
}
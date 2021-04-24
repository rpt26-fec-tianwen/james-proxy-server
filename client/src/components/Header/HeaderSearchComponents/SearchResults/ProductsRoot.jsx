import React from 'react';

export default (props) => {
    const { style, searchImages } = props;
    const { productsRoot, productRoot, productImages, productLink, productInfo, productTitle, productDescription, productPrice, productLabel, productButton, buttonRoot, buttonGreen, buttonSmall } = style;
    return (
        <div className={productsRoot}>
            {
                searchImages.map((productItem, index) => {
                    return (
                        <div key={index} className={productRoot} id={`productRoot${index}`}
                            onMouseEnter={(event) => {
                                document.getElementById('productInfo' + index).style.maxHeight = '120px';
                                document.getElementById('productRoot' + index).style.paddingBottom = '140px';
                                document.getElementById('productRoot' + index).style.backgroundColor = '#e8e7e6'
                                document.getElementById('productRoot' + index).style.border = '1px solid grey'
                                document.getElementById('productInfo' + index).style.opacity = 1;
                                document.getElementById('productButton' + index).style.visibility = 'visible';
                                document.getElementById('productButton' + index).style.opacity = 1;
                            }}
                            onMouseLeave={(event) => {
                                document.getElementById('productInfo' + index).style.maxHeight = 0;
                                document.getElementById('productRoot' + index).style.paddingBottom = 0;
                                document.getElementById('productRoot' + index).style.backgroundColor = 'initial'
                                document.getElementById('productRoot' + index).style.border = 'initial'
                                document.getElementById('productInfo' + index).style.opacity = 0;
                                document.getElementById('productButton' + index).style.visibility = 'hidden';
                                document.getElementById('productButton' + index).style.opacity = 0;
                            }}
                        >
                            <div className={productImages}>
                                <a className={productLink} href={`https://www.fjakeraven.com/${productItem.id}`}>
                                    <img crossOrigin='true' src={JSON.parse(productItem.urls)[2] !== undefined ? JSON.parse(productItem.urls)[2] : JSON.parse(productItem.urls)[0]} />
                                    <div className={productLabel}></div>
                                </a>Ï
                                <div className='productColors'></div>
                            </div>
                            <div className={productInfo}>
                                <h3 className={productTitle}>{productItem.title}</h3>
                                <div className={productDescription} id={'productInfo' + index}>
                                    <p>
                                        ...text
                        </p>
                                </div>
                                <div className={productPrice}>
                                    <span>{productItem.price}</span>
                                </div>
                                <div className={productButton} id={'productButton' + index}>
                                    <a className={`${buttonRoot} ${buttonGreen} ${buttonSmall}`} onClick={() => {alert('hello')}} href={`https://www.fjakeraven.com/${productItem.id}`}>
                                        <span>View</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}
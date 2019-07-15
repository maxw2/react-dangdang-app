import React from 'react'
 
const ShopTitle = (props) => {
    return (
        <div className='shop-title'>
            <div className='shop-title-img'>
                <img src={props.shop.image} alt='logo' />
            </div>
            <div className='shop-title-text'>
                <p>{props.shop.shopName}</p>
            </div>
        </div>
    )
}


export default ShopTitle
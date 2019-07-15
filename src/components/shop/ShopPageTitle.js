import React from 'react'

const ShopPageTitle = (props) => {
    return (
        <div className='shop-page-title'>
            <div className='shop-page-title-price'>
                <p className='new-price'>￥{props.title.new_price}</p>
                <div className='price'>
                    <p>定价</p>
                    <p>￥{props.title.price}</p>
                    <p>{props.title.discount}折</p>
                </div>
            </div>
            <div className='shop-page-title-title'>
                <p>
                    <img src={props.title.zyLogo} alt='zy-logo' />
                    {props.title.name}
                </p>
            </div>
        </div>
    )
}

export default ShopPageTitle
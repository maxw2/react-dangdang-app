import React from 'react'
import { connect } from 'react-redux'

import CartShopTitle from './CartShopTitle'
import CartShopList from './CartShopList'


import './CartShop.scss'

// cart 商店总页面
// 导入MyCart数据
// 登录时会合并MyCart与Cart

const CartShop = (props) => {
    return (
        <div className='cart-shop'>
            {props.myCart.length === 0 ?
                null : props.myCart.map((val, index) => {
                    return (
                        <div className={`cart-shop-${index}`}
                            key={index}>
                            <CartShopTitle cart={val} />
                            <CartShopList cart={val} />
                        </div>
                    )
                })
            }

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myCart: state.myCart
    }
}




export default connect(mapStateToProps)(CartShop)


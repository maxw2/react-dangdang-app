import React from 'react'

import CartShopCommodityName from './CartShopCommodityName'




class CartShopList extends React.Component {
    constructor(props) {
        super(props)
        this.addEL = null
        this.minusEl = null
    }
    
    render() { 
        return (
            <ul className='cart-shop-list' ref='ul'>
                {
                    this.props.cart ?
                        this.props.cart.commodity.map((val, index) => {
                            return (
                                <CartShopCommodityName commodityName={val} key={val.id} />
                            )
                        }) : null
                }
            </ul>
        )
    }

}


export default CartShopList
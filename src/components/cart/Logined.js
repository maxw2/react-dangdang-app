import React from 'react'
import login from '../../common/login'

import CartShop from './CartShop'
import CartAmount from './CartAmount'
 
const Logined = () => {
    const style = {
        height: login() ?
            '100%' : 'calc(100% - 2.5rem)' 
    }
    return (
        <div className='cart-logined' style={style}>
            <CartShop />
            <CartAmount />
        </div>
    )
}

export default Logined
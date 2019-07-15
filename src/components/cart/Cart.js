import React from 'react'
import login from '../../common/login'

import NoLogin from './NoLogin'
import Logined from './Logined'
import './Cart.scss'

let Cart = () => {
    return (
        <div className='cart'>
            <div className='cart-title' style={login() ? {background : 'none'}: {background:'white'}}>购物车</div>
        <div className='cart-content'>
            {
                login() ?
                    null : <NoLogin />
            }
            <Logined />
        </div>
        </div >
    )
}






// const mapStateToProps = (state) => {
//     return {
//         cart: state.cart,
//         myCart:state.myCart
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onGetCart: function (arr) {
//             dispatch({
//                 type: 'GET_CART',
//                 cart: arr
//             })
//         }
//     }
// }

// Cart = connect(mapStateToProps, mapDispatchToProps)(Cart)


export default Cart
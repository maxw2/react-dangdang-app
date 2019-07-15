import React from 'react'
import { Link } from 'react-router-dom'

const NoLogin = () => {
    return (
        <div className='cart-noLogin'>
            <div className='text'>
                <p>登录后同步电脑与手机购物车中的商品</p>
            </div>
            <div className='login'>
                <Link to='/login'>
                    <div className='login-button'>登录</div>
                </Link>
            </div>
        </div>
    )
}

export default NoLogin
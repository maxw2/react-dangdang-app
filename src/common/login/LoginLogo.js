import React from 'react'

import zhifubao from './images/支付宝.svg'
import weixin from './images/微信.svg'
import weibo from './images/微博.svg'
import tengxun from './images/腾讯.svg'

const LoginLogo = () => {
    return (
        <div className='login-logo'>
            <div>
                <img src={tengxun} alt='腾讯' />
            </div>
            <div>
                <img src={zhifubao} alt='支付宝' />
            </div>
            <div>
                <img src={weixin} alt='微信' />
            </div>
            <div>
                <img src={weibo} alt='微博' />
            </div>
        </div>
    )
}

export default LoginLogo
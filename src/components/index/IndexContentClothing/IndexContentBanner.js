import React from 'react'

import { Link } from 'react-router-dom'

const IndexContentBanner = () => {
    return (
        <div className='index-banner'>
            <Link to='/shop'>
                <img src='http://img55.ddimg.cn/85250072178465_y.jpg' alt='预留' />
            </Link>
        </div>
    )
}

export default IndexContentBanner
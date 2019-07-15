import React from 'react'

import { Link } from 'react-router-dom'
import cart from './image/cart_empty.svg'

const ShopContent = (props) => {
    return (
        <div className='shop-content'>
            <div className='shop-content-title'>
                <p>首页</p>
                <p className='action'>商品</p>
                <p>上新</p>
            </div>
            <ul className='shop-content-list'>
                {
                    props.shop.commodity ?
                        props.shop.commodity.map((val, index) => {
                            return (
                                <li className={val.name}
                                    key={index}>
                                    <Link to={`/shop/${val.id}`}>
                                        <div className='img'>
                                            <img src={val.image} alt={val.name} />
                                        </div>
                                        <div className='title'>
                                            <p>{val.name}</p>
                                        </div>
                                        <div className='price'>
                                            <p>{`￥${val.price}`}</p>
                                            <img src={cart} alt='cart' />
                                        </div>
                                    </Link>

                                </li>
                            )
                        }) : null
                }
            </ul>
        </div>
    )
}

export default ShopContent
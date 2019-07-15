import React from 'react'
import { NavLink } from 'react-router-dom'

import home from './image/home.svg'
import home_fill from './image/home_fill.svg'
import cr from './image/createtask.svg'
import cr_fill from './image/createtask_fill.svg'
import explore from './image/explore.svg'
import explore_fill from './image/explore_fill.svg'
import cart from './image/cart.svg'
import cart_fill from './image/cart_fill.svg'
import people from './image/people.svg'
import people_fill from './image/people_fill.svg'

import './Nav.scss'

const Nav = () => {
    const navArr = [{
        value: '首页',
        className: 'index',
        to: '/',
        image: home,
        image_fill: home_fill
    }, {
        value: '分类',
        className: 'sort',
        to: '/sort',
        image: cr,
        image_fill: cr_fill
    }, {
        value: '发现',
        className: 'explore',
        to: '/explore',
        image: explore,
        image_fill: explore_fill
    }, {
        value: '购物车',
        className: 'cart',
        to: '/cart',
        image: cart,
        image_fill: cart_fill
    }, {
        value: '我的',
        className: 'user',
        to: '/user',
        image: people,
        image_fill: people_fill
    }]
    return (
        <div className='nav'>
            {
                navArr.map((val, index) => {
                    return (
                        <div className={val.className + ' but'} key={index}>
                            <NavLink exact to={val.to}>
                                <div className='img'>
                                    <img className='icon' src={val.image} alt={val.className}/>
                                    <img className='icon fill' src={val.image_fill} alt={val.className + 'fill'} />
                                </div>
                                <p>{val.value}</p>
                            </NavLink>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Nav 
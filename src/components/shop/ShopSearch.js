import React from 'react'

import { withRouter } from 'react-router-dom'
import left from './image/shop-search-left.svg'
import list from './image/shop-search-list.svg'
import share from './image/shop-search-share.svg'
import search from './image/shop-search-search.svg'

let ShopSearch = (props) => {

    function onClickBack(){
        props.history.goBack()
    }

    return (
        <div className='shop-search'>
            <div className='back' onClick={onClickBack}>
                <img src={left} alt='left' />
            </div>
            <div className='search'>
                <img src={search} alt='search' />
                <input placeholder='搜索本店商品' />
            </div>
            <div className='icon'>
                <img src={list} alt='list' />
                <img src={share} alt='share' />
            </div>
        </div>
    )
}

ShopSearch =  withRouter(ShopSearch)

export default ShopSearch 
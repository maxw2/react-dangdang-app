import React from 'react'

import { Link } from 'react-router-dom'
import sort from './image/search/list.svg'
import search from './image/search/search.svg'
import message from './image/search/message.svg'
import money from './image/search/money.svg'
import './IndexSearch.scss'

const IndexSearch = () => {
    return (
        <div className='index-search'>
            <div className='search-left'>
                <Link to='/sort'>
                    <div className='img'>
                        <img src={sort} alt='scan' />
                    </div>
                </Link>
            </div>
            <div className='search-middle'>
                <div className='input'>
                    <div className='img'>
                        <img src={search} alt='search' />
                    </div>
                    <input placeholder='搜索商品/品牌/种类' />
                </div>
            </div>
            <div className='search-right-1'>
                <div className='img'>
                    <img src={money} alt='money' />
                </div>
            </div>
            <div className='search-right'>
                <div className='img'>
                    <img src={message} alt='message' />
                </div>
            </div>
        </div>

    )
}

export default IndexSearch
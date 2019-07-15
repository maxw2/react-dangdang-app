import React from 'react'

import scan from './images/search/scan.svg'
import search from './images/search/search.svg'
import message from './images/search/message.svg'
import './SortSearch.scss'

const SortSearch = () => {
    return (
        <div className='sort-search'>
            <div className='search-left'>
                <div className='img'>
                    <img src={scan} alt='scan' />
                </div>
            </div>
            <div className='search-middle'>
                <div className='input'>
                    <div className='img'>
                        <img src={search} alt='search' />
                    </div>
                    <input placeholder='搜索商品/品牌/种类' />
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

export default SortSearch
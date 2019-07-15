import React from 'react'
import {withRouter} from 'react-router-dom'

import left from './image/shop-search-left.svg'
import share from './image/shop-search-share.svg'


let ShopPageSearch = (props) => {

    function onClickBack(){
        props.history.goBack()
    }

    return (
        <div className='shop-page-search'>
            <div className='left' onClick={onClickBack}>
                <img src={left} alt='left' />
            </div>
            <div className='share'>
                <img src={share} alt='share' />
            </div>
        </div>
    )
}

ShopPageSearch = withRouter(ShopPageSearch)

export default ShopPageSearch
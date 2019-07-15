import React from 'react'
import { getShop } from '../../common/getAxiosData/getAxios'

import ShopSearch from './ShopSearch'
import ShopTitle from './ShopTitle'
import ShopContent from './ShopCotent'
import './Shop.scss'


class Shop extends React.Component {
    constructor() {
        super()
        this.state = {
            shop: null
        }
    }
    componentDidMount() {
        getShop((res) => {
            this.setState({
                shop: res.data.data.shop
            })
        })
    }

    render() {
        return (
            <div className='shop'>
                {
                    this.state.shop ?
                        <>
                            <ShopSearch />
                            <ShopTitle shop={this.state.shop} />
                            <ShopContent shop={this.state.shop} />
                        </> : null
                }

            </div>
        )
    }

}

export default Shop
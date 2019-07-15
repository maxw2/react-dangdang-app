import React from 'react'
import { getShopPage } from '../../common/getAxiosData/getAxios'

import ShopPageSearch from './ShopPageSearch'
import ShopPageBanner from './ShopPageBanner'
import ShopPageTitle from './ShopPageTitle'
import ShopPageScore from './ShopPageScore'
import ShopPageBottom from './ShopPageBottom'
import './ShopPage.scss'


class ShopPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pageData: null,
            shop: null
        }
        this.id = this.props.match.params.id
    }
    componentDidMount() {
        getShopPage(this.id, (res) => {
            this.setState({
                pageData: res.data.data,
                shop: res.data.shop
            })
        })
    }




    render() {
        return (
            <div className='shop-page'>
                {
                    this.state.pageData ?
                        <>
                            <ShopPageSearch />
                            <ShopPageBanner banner={this.state.pageData.images} />
                            <ShopPageTitle title={this.state.pageData.title} />
                            <ShopPageScore score={this.state.pageData.score} />
                        </> : null
                }
                {
                    this.state.shop ?
                        <ShopPageBottom shop={this.state.shop} /> : null
                }
            </div>
        )
    }
}





export default ShopPage
import React from 'react'
import { sameShop, sameCommodity } from '../../common/sameData/sameData'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import shop from './image/icon_shoppingcart.png'
import cart from './image/h-cart.png'
import fav from './image/fav.png'


class ShopPageBottom extends React.Component {
    constructor(props) {
        super(props)
        this.shop = this.props.shop
        this.cartNumEl = null
        this.num = 0
    }
    // 添加图书数量
    getShopNum() {
        // 因为this.shop只会载入服务器初始数值
        // 为了要让重新进入页面时同步num数值
        // 需要加载myCart

        if (this.props.myCart.length === 0) {
            this.shop.commodity[0].num++
            this.shop.commodity[0].action = 0
        } else {
            for (let i = 0; i < this.props.myCart.length; i++) {
                let shop = this.props.myCart[i]
                // 如果店铺相同
                if (shop.name === this.shop.name) {
                    for (let j = 0; j < shop.commodity.length; j++) {
                        let commodityName = shop.commodity[j]
                        // 如果书籍相同
                        if (commodityName.name === this.shop.commodity[0].name) {
                            this.shop.commodity[0].num = commodityName.num
                            this.shop.commodity[0].num++
                            return
                        }
                    }
                    // 如果书籍不同 
                    this.shop.commodity[0].num++
                    return
                    // 店铺名不同
                } else {
                    this.shop.commodity[0].num++
                    this.shop.commodity[0].action = 0
                    return
                }
            }

        }
    }
    // 获取cartNum数量
    // 并修改页面购物车数量
    getCartNum(shop) {
        let _shop = shop
        // 如果购物车中有货物
        if (this.props.myCart.length !== 0) {
            for (let i = 0; i < this.props.myCart.length; i++) {
                let shop = this.props.myCart[i]
                // 如果店铺相同
                if (shop.shopName === this.shop.shopName) {
                    for (let j = 0; j < shop.commodity.length; j++) {
                        let commodityName = shop.commodity[j]
                        // 如果书籍相同
                        if (commodityName.name === this.shop.commodity[0].name) {
                            // 如果书籍数量为0
                            if (commodityName.num === 0) {
                                this.cartNumEl.style.display = 'none'
                                return
                                // 如果书籍数量不为0
                            } else {
                                this.cartNumEl.style.display = 'block'
                                this.cartNumEl.innerText = commodityName.num
                                return
                            }
                        }
                    }
                    // 如果书籍不同
                    this.cartNumEl.style.display = 'none'
                    return
                }
            }
            // 如果店铺名不同
            //
            if (this.shop.commodity[0].num === 0) {
                this.cartNumEl.style.display = 'none'
            } else {
                this.cartNumEl.style.display = 'block'
                this.cartNumEl.innerText = this.shop.commodity[0].num
            }


            // 如果购物车中没有货物
        } else {
            if (_shop.commodity[0].num === 0) {
                this.cartNumEl.style.display = 'none'
                return
            } else {
                this.cartNumEl.style.display = 'block'
                this.cartNumEl.innerText = _shop.commodity[0].num
                return
            }
        }
    }
    // 添加进购物车
    onClickAdd(ev) {
        if (!this.props.shop) return
        // num++
        this.getShopNum()

        let myCart = null
        // 如果myCart为空
        if (this.props.myCart.length === 0) {
            myCart = sameShop(this.props.myCart, this.shop)
        } else {
            myCart = this.props.myCart
        }

        for (let i = 0; i < myCart.length; i++) {
            // 如果店铺名相等
            if (myCart[i].shopName === this.shop.shopName) {
                let newMyCartShop = sameCommodity(myCart[i], this.shop.commodity[0])
                let newMyCart = sameShop(myCart, newMyCartShop)

                this.props.onGetMyCart(newMyCart)
                return
            }
        }

        // 如果店铺名不同
        let newMyCart = sameShop(myCart, this.shop)
        this.props.onGetMyCart(newMyCart)
        return


    }

    componentDidMount() {
        this.cartNumEl = document.querySelector('.shop-page-bottom .cart-num')
        this.getCartNum(this.shop)
    }

    componentDidUpdate() {
        this.getCartNum(this.shop)
    }


    render() {
        return (
            <div className='shop-page-bottom'>
                <div className='shop icon'>
                    <img src={shop} alt='shop' />
                    <p>店铺</p>
                </div>
                <div className='fav icon'>
                    <img src={fav} alt='fav' />
                    <p>收藏</p>
                </div>
                <div className='cart icon'>
                    <Link to='/cart' >
                        <span className='cart-num'>{}</span>
                        <img src={cart} alt='cart' />
                        <p>购物车</p>
                    </Link>
                </div>
                <div className='add-cart' onClick={this.onClickAdd.bind(this)}>
                    <div className='button'>加入购物车</div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        myCart: state.myCart,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetMyCart: function (arr) {
            dispatch({
                type: 'GET_MYCART',
                myCart: arr
            })
        }
    }
}

ShopPageBottom = connect(mapStateToProps, mapDispatchToProps)(ShopPageBottom)

export default ShopPageBottom
import React from 'react'
import { connect } from 'react-redux'
import { sameShop, sameCommodity } from '../../common/sameData/sameData'

import action from './images/选中.svg'

class CartShopTitle extends React.Component {
    constructor(){
        super()
        this.allCircle = null
    }
    // 全选按键
    onClickAllCircle() {
        let newCart = null
        
        this.allCircle =!this.allCircle
        this.props.myCart.forEach(shop => {
            // 
            if (shop.shopName === this.props.cart.shopName) {
                shop.commodity.forEach(commodityName => {
                    // 改变action 
                    if(this.allCircle){
                        commodityName.action = 0
                    }else if(!this.allCircle){
                        commodityName.action = 1
                    }
                    // 
                    let newShop = sameCommodity(shop, commodityName)
                    let newCart = sameShop(this.props.myCart, newShop)
                    this.props.onGetMyCart(newCart)
                })
            }
        })
    }

    // 检查商店书籍是否全部选中
    // 改变全选页面
    getAllCircle() {
        let allCirclEl = this.refs.title.querySelector('.shop-title-circle img')

        for(let i = 0;i < this.props.myCart.length;i++){
            let shop = this.props.myCart[i]
            if(shop.shopName === this.props.cart.shopName){
                for(let j = 0; j < shop.commodity.length;j++){
                    let commodityName = shop.commodity[j]
                    // 如果其中一个是未选中
                    // 则全选为"none" 返回false
                    if(commodityName.action === 1){
                        allCirclEl.style.display = 'none'
                        return false
                    }
                }
            }
        }

        allCirclEl.style.display = 'block'
        return true
    }
    // 
    componentDidMount() {
        this.allCircle = this.getAllCircle()
    }

    componentDidUpdate() {
        console.log(this.props.myCart)
        this.getAllCircle()
    }

    render() {
        return (
            <div className='cart-shop-title' ref='title'>
                <div className='shop-title-circle shop-circle' onClick={this.onClickAllCircle.bind(this)}>
                    <img src={action} alt='action' />
                </div>
                <div className='shop-title-name'>
                    <img src={this.props.cart.shopImage} alt='logo' />
                    <p className='shop'>
                        {this.props.cart.shopName}
                    </p>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        myCart: state.myCart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetMyCart(arr) {
            dispatch({
                type: 'GET_MYCART',
                myCart: arr
            })
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartShopTitle)
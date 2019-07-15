import React from 'react'
import { connect } from 'react-redux'
import {sameCommodity,sameShop} from '../../common/sameData/sameData'


import circle from './images/选中.svg'
import './CartAmount.scss'

class CartAmount extends React.Component {
    constructor() {
        super()
        this.state = {
            amountNum: 0.00
        }
        this.allCircle = null
        this.amountNum = 0.00
    }

    // 全选
    onClickSelectAll(ev) {
        let el = ev.currentTarget
        let imgEl = el.querySelector('img')

        if (this.props.myCart.length === 0) return

        // 已全选
        if (imgEl.style.display) {
            imgEl.style.display = ''
            this.getCartCircle(true)
            // 未全选
        } else {
            imgEl.style.display = 'none'
            this.getCartCircle(false)
        }

        // this.onGetAmount()

    }
    // 使Cart的商品全选
    // 或全部不选
    getCartCircle(bool){
        
        this.props.myCart.forEach(shop=>{
            shop.commodity.forEach(commodityName=>{
                // 如果在购物车之中
                if(commodityName.num !== 0){
                    //
                    if(bool) {
                        commodityName.action = 0
                    }else if(!bool){
                        commodityName.action = 1
                    }
                    let newShop = sameCommodity(shop,commodityName)
                    let newMyCart = sameShop(this.props.myCart,newShop)
                    this.props.onGetMyCart(newMyCart)

                }
            })
        })



    }



    // 计算总计
    onGetAmount() {
        let num = 0
        let pEl = document.querySelector('.cart-amount .cart-amount-num .price')


        for (let i = 0; i < this.props.myCart.length; i++) {
            let shop = this.props.myCart[i]
            for (let j = 0; j < shop.commodity.length; j++) {
                let commodityName = shop.commodity[j]
                if (commodityName.action === 0) {
                    num = commodityName.price * commodityName.num + num
                }

            }
        }

        num = num.toFixed(2)
        pEl.innerText = '￥' + num
    }
    // 检查店铺是否是全选
    getAllCircle() {
        let allCircleEl = document.querySelector('.cart-amount .circle img')

        if (this.props.myCart.length === 0) {
            allCircleEl.style.display = 'none'
            return 
        }

        for (let i = 0; i < this.props.myCart.length; i++) {
            let shop = this.props.myCart[i]
            for (let j = 0; j < shop.commodity.length; j++) {
                let commodityName = shop.commodity[j]
                // 如果书籍有数量
                if (commodityName.num !== 0) {
                    if (commodityName.action === 1) {
                        allCircleEl.style.display = 'none'
                        return
                    }
                }

            }
        }

        allCircleEl.style.display = ''


    }


    // 首次进入计算
    componentDidMount() {
        this.getAllCircle()
        this.onGetAmount()
    }

    componentDidUpdate() {
        this.getAllCircle()
        this.onGetAmount()
    }

    render() {
        return (
            <div className='cart-amount'>
                <div className='cart-amount-circle'>
                    <div className='circle' onClick={this.onClickSelectAll.bind(this)}>
                        <img src={circle} alt='circle' style={{ display: 'none' }} />
                    </div>
                    <p>全选</p>
                </div>
                <div className='cart-amount-num'>
                    <p>合计:</p>
                    <p className='price'>{`￥0.00`}</p>
                </div>
                <div className='cart-amount-equal'>
                    <div>
                        <span>去结算</span>
                    </div>
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
        onGetMyCart: function (arr) {
            dispatch({
                type: 'GET_MYCART',
                myCart: arr
            })
        }
    }

}

CartAmount = connect(mapStateToProps, mapDispatchToProps)(CartAmount)


export default CartAmount
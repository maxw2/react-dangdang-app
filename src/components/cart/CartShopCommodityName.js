import React from 'react'
import { connect } from 'react-redux'
import { sameShop, sameCart, sameCommodity } from '../../common/sameData/sameData'

import { Link } from 'react-router-dom'
import action from './images/选中.svg'

const CartShopCommodityName = (props) => {

    function onClickAdd(ev) {
        ev.preventDefault()
        let pEl = document.querySelector(`.shop-list-${props.commodityName.id} .shop-list-num p`)
        let commodityName = props.commodityName
        props.myCart.forEach(shop => {
            shop.commodity.forEach(myCartCommodityName => {
                if (myCartCommodityName.name === commodityName.name) {
                    myCartCommodityName.num++
                    let newShop = sameCommodity(shop, myCartCommodityName)
                    let newMyCart = sameShop(props.myCart, newShop)

                    props.onGetMyCart(newMyCart)
                    pEl.innerText = myCartCommodityName.num
                }
            })
        })


    }
    function onClickMinus(ev) {
        ev.preventDefault()
        let pEl = document.querySelector(`.shop-list-${props.commodityName.id} .shop-list-num p`)
        let commodityName = props.commodityName
        props.myCart.forEach(shop => {
            shop.commodity.forEach(myCartCommodityName => {
                if (myCartCommodityName.name === commodityName.name) {
                    // 为零时判断是否删除
                    if (myCartCommodityName.num === 0) return
                    myCartCommodityName.num--
                    let newShop = sameCommodity(shop, myCartCommodityName)
                    let newMyCart = sameShop(props.myCart, newShop)

                    props.onGetMyCart(newMyCart)
                    pEl.innerText = myCartCommodityName.num
                }
            })
        })

    }

    function onClickCircle(ev) {
        ev.preventDefault()
        let circleEl = document.querySelector(`.shop-list-${props.commodityName.id} .shop-list-circle img`)
        let commodityName = props.commodityName
        props.myCart.forEach(shop => {
            shop.commodity.forEach(myCartCommodityName => {
                if (myCartCommodityName.name === commodityName.name) {
                    // action === 0 选中
                    if (myCartCommodityName.action === 0) {
                        myCartCommodityName.action = 1
                        circleEl.style.display = 'none'

                        props.onGetMyCart(props.myCart)

                    } else {
                        myCartCommodityName.action = 0
                        circleEl.style.display = 'block'
                        props.onGetMyCart(props.myCart)
                    }
                    let newShop = sameCommodity(shop, myCartCommodityName)
                    let newCart = sameShop(props.myCart, newShop)
                    props.onGetMyCart(newCart)



                }
            })
        })



    }

    // 如果店铺全选
    // 商品改变
    function getCircle() {
        let circleEl = document.querySelector(`.shop-list-${props.commodityName.id} .shop-list-circle img`)
        props.myCart.forEach(shop => {
            shop.commodity.forEach(myCommodityName => {
                if (myCommodityName.name === props.commodityName.name) {
                    if (myCommodityName.action === 0) {
                        circleEl.style.display = 'block'
                    } else {
                        circleEl.style.display = 'none'
                    }
                }
            })
        })

    }


    React.useEffect(() => {
        getCircle()
    })


    return (


        <li className={`shop-list shop-list-${props.commodityName.id}`}
            data-commodity={props.commodityName.name}>
            <div className='shop-circle shop-list-circle' onClick={onClickCircle}>
                <img src={action} alt='action' />
            </div>
            <Link to={props.commodityName.id === 131 ? '/shop/101 ' : `/shop/${props.commodityName.id}`} >
                <div className='shop-list-image' >
                    <img src={props.commodityName.image} alt='list-img' />
                </div>
                <div className='shop-list-content'>
                    <p>{props.commodityName.name}</p>
                    <p>{`￥${props.commodityName.price}`}</p>
                </div>
            </Link>
            <div className='shop-list-num'>
                <div className='minus' onClick={onClickMinus}>
                    -
                    </div>
                <p>{props.commodityName.num}</p>
                <div className='add' onClick={onClickAdd}>
                    +
                    </div>
            </div>
        </li >
    )


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



export default connect(mapStateToProps, mapDispatchToProps)(CartShopCommodityName)
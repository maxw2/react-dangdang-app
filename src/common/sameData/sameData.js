
/**
 * @method 合并本地myCart和线上Cart/或两个cart
 * @param {Array} myCart
 * @param {Array} cart
 * @return {Array} 返回一个Cart合并数组 赋值在本地
 */

const sameCart = (cart, antherCart) => {
    let _cart = []
    let _antherCart = []
    _cart = _cart.concat(cart)
    _antherCart = _antherCart.concat(antherCart)

    if (_cart.length === 0) {
        return _cart.concat(_antherCart)
    } else if (_antherCart.length === 0) {
        return _antherCart.concat(_cart)
    }

    let _cartLen = _cart.length
    let __antherCartLen = _antherCart.length

    if (_cartLen > __antherCartLen) {
        for (let i = 0; i < _cartLen; i++) {
            // 如果Cart店铺 与 myCart店铺相等
            if (_cart[i] && _antherCart[i] && _cart[i].shopName === _antherCart[i].shopName) {
                _cart[i] = Object.assign({}, _cart[i], _antherCart[i])
                // 如果不相等
            } else if (_antherCart[i]) {
                _cart.push(_antherCart[i])
            }
        }
        return _cart
    } else {
        for (let i = 0; i < __antherCartLen; i++) {
            // 如果Cart店铺 与 myCart店铺相等
            if (_cart[i].shopName === _antherCart[i].shopName) {
                _antherCart[i] = Object.assign({}, _antherCart[i], _cart[i])
                // 如果不相等
            } else if (_cart[i]) {
                _antherCart.push(_cart[i])
            }
        }
        return _antherCart
    }

}

/**
 * @method  合并本地Cart和店铺shop
 * @param   {Array}  cart 
 * @param   {Object} shop 
 * @return  {Array} 返回一个Cart合并数组 赋值在本地
 */
const sameShop = (cart, shop) => {
    let _cart = [].concat(cart)
    let _shop = Object.assign({}, shop)

    if (_cart.length === 0) {
        return _cart.concat(_shop)
    }

    for (let i = 0; i < _cart.length; i++) {
        // 查看店铺是否相同
        // 店铺名相同
        if (_cart[i].shopName === _shop.shopName) {
            _cart[i] = _shop
            return _cart
            
        }
    }
    // 店铺不同
    _cart.push(_shop)
    return _cart



}


/**
 * @method  合并店铺Shop和书名Commodity
 * @param   {Object} shop          店铺   
 * @param   {Object} commodityName 店铺中的书籍类型
 * @return  {Object} 返回店铺
 */
const sameCommodity = (shop, commodityName) => {
    let _shop = Object.assign({}, shop)
    let _shopCommodity = _shop.commodity
    let _commodityName = Object.assign({}, commodityName)

    for (let i = 0; i < _shopCommodity.length; i++) {
        // 比较书名是否相等 
        let _shopCommodityName = _shopCommodity[i]
        // 如果书名相等 进行合并
        if (_shopCommodityName.name === _commodityName.name) {
            let newShopCommodityName = Object.assign({}, _shopCommodityName, _commodityName)
            _shopCommodity[i] = newShopCommodityName
            _shop.commodity = _shopCommodity
            return _shop
        }
    }
    //  如果书名不同 在末尾添加
    _shopCommodity.push(commodityName)
    _shop.commodity = _shopCommodity
    return _shop

}




export { sameCart, sameShop, sameCommodity }
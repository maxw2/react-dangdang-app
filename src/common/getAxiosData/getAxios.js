import Axios from 'axios'

/**
 * @method 登陆
 * @param {Object} state 
 */
const getLogin = (state,fn)=>{
    let url = 'https://www.easy-mock.com/mock/5d0b033f3fbfb24cfbc80c27/dangdang/query/user'
    
    Axios.get(url,{
        params:{
            name:state.name,
            pass:state.pass
        }
    }).then(res=>{
        fn(res)
    })

}

const getShop = (fn)=>{
    let url = 'https://www.easy-mock.com/mock/5d0b033f3fbfb24cfbc80c27/dangdang/query/shop'

    Axios.get(url)
        .then(res=>{
            fn(res)
        })
}

const getShopPage = (state,fn)=>{
    let url = 'https://www.easy-mock.com/mock/5d0b033f3fbfb24cfbc80c27/dangdang/shop/' + state

    Axios.get(url)
        .then(res=>{
            fn(res)
        })
}



export {getLogin , getShop , getShopPage}
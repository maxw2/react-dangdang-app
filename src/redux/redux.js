import { createStore } from 'redux'

const state = {
    name: '',
    _type: 1,
    cart: [],
    actionCart: [],
    myCart: []
}


const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_NAME':
            return Object.assign({}, state, { name: action.name })
        case "GET_TYPE":
            return Object.assign({}, state, { _type: action._type })
        case "GET_CART":
            return Object.assign({}, state, { cart: action.cart })
        case "GET_MYCART":
            return Object.assign({}, state, { myCart: action.myCart })
        case 'GET_ACTIONCART':
            return Object.assign({}, state, { actionCart: action.actionCart })
        default:
            return state
    }
}


const store = createStore(reducer, state)


store.subscribe(() => {
    console.log(store.getState())
})


export default store



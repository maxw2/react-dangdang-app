import store from '../redux/redux'

const login = ()=>{
    let _type = store.getState()._type
    if(_type === 0){
        return true
    }else if(_type === 1){
        return false
    }
}

export default login
import React from 'react'
import { getLogin } from '../../common/getAxiosData/getAxios'
import { connect } from 'react-redux'
import {sameCart} from '../sameData/sameData'

import user from './images/user.svg'
import lock from './images/lock.svg'
import mobile from './images/mobile.svg'

class LoginContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            pass: ''
        }
        this.lastEl = null
        this.loading = false
    }

    onClick(ev) {
        let el = ev.target
        if (!this.lastEl) this.lastEl = document.querySelector('.login-content .action')
        if (el === this.lastEl) return

        let content = document.querySelector('.login-content .content-left')
        let _content = document.querySelector('.login-content .content-right')

        if (el.getAttribute('data-title') === 'left') {
            el.classList.add('action')
            this.lastEl.classList.remove('action')
            this.lastEl = el

            content.style.display = ''
            _content.style.display = 'none'

        } else if (el.getAttribute('data-title') === 'right') {
            el.classList.add('action')
            this.lastEl.classList.remove('action')
            this.lastEl = el

            content.style.display = 'none'
            _content.style.display = ''
        }



    }

    onChange(ev) {
        let target = ev.target
        if (target.getAttribute('data-input') === 'name') {
            this.setState({
                name: target.value
            })
        }
        if (target.getAttribute('data-input') === 'pass') {
            this.setState({
                pass: target.value
            })
        }

    }

    getLogin() {
        if (this.state.name.length === 0) {
            alert('请输入用户名(dangdang/12345)')
            return
        } else if (this.state.pass.length === 0) {
            alert('请输入密码(dangdang/12345)')
            return
        }
        if (this.loading) return

        this.loading = true
        getLogin(this.state, (res) => {
            let data = res.data.data
            if (data.type === 1) alert('密码输入错误')
            if (data.type === 0) {
                // 合并 myCart和Cart 
                let newMyCart = sameCart(data.cart.cart,this.props.myCart)
                // 更新redux
                this.props.onGetName(data.user.name)
                this.props.onGetType(data.type)
                this.props.onGetCart(data.cart.cart)
                this.props.onGetMyCart(newMyCart)

                this.props.history.goBack()
            }
            this.loading = false
        })

    }



    render() {
        return (
            <div className='login-content' onChange={this.onChange.bind(this)}>
                <div className='title' onClick={this.onClick.bind(this)}>
                    <span className='title-left action' data-title='left' >账号密码登录</span>
                    <span className='title-right' data-title='right' >短信快捷登录</span>
                </div>
                <div className='content'>
                    <div className='content-left'>
                        <div className='content-left-name content-input'>
                            <img src={user} alt='user' />
                            <input placeholder='请输入手机号/邮箱/昵称' data-input='name' />
                        </div>
                        <div className='content-left-pass content-input'>
                            <img src={lock} alt='lock' />
                            <input placeholder='请输入密码' data-input='pass' />
                        </div>
                    </div>
                    <div className='content-right' style={{ display: 'none' }}>
                        <div className='content-right-name content-input'>
                            <img src={mobile} alt='mobile' />
                            <input placeholder='请输入手机号' />
                        </div>
                    </div>
                </div>
                <div className='button' onClick={this.getLogin.bind(this)}>
                    <div>登录</div>
                </div>
                <div className='bottom'>
                    <span style={{ float: 'left' }}>忘记密码？</span>
                    <span style={{ float: 'right' }}>立即注册</span>
                </div>
            </div>
        )
    }

}
const mapStateToProps = (state)=>{
    return {
        myCart:state.myCart,
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        onGetName(val){
            dispatch({
                type:'GET_NAME',
                name:val
            })
        },
        onGetType(val){
            dispatch({
                type:'GET_TYPE',
                _type:val
            })
        },
        onGetCart(val){
            dispatch({
                type:'GET_CART',
                cart:val
            })
        },
        onGetMyCart(val){
            dispatch({
                type:'GET_MYCART',
                myCart:val
            })
        }
    }
}

LoginContent = connect(mapStateToProps,mapDispatchToProps)(LoginContent)

export default LoginContent
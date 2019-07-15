import React from 'react'

import LoginTitle from './LoginTitle'
import LoginContent from './LoginContent'
import LoginLogo from './LoginLogo'

import './Login.scss'

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            pass: ''
        }
    }

    componentDidMount(){
        console.log(this.props.history)
    }

    render() {
        return (
            <div className='login'>
                <LoginTitle history={this.props.history} />
                <LoginContent history={this.props.history} />
                <LoginLogo />
            </div>
        )
    }



}

export default Login
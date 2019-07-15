import React from 'react'

import UserContent from './UserContent'
import UserBanner from './UserBanner'

import './User.scss'

const User = () => {
    return (
        <div className='user user-radius'>
            <div className='radius'></div>
            <UserContent />
            <UserBanner />
        </div>
    )
}




export default User
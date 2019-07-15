import React from 'react'
import option from './image/option.svg'
import message from './image/message.svg'


const UserContentTitle = ()=>{
    return (
        <div className='user-content-title'>
            <div className='user-content-title-icon'>
                <img src={option} alt='option' />
            </div>
            <div className='user-content-title-icon'>
                <img src={message} alt='message' />
            </div>
        </div>
    )
}

export default UserContentTitle
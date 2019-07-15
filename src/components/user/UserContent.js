import React from 'react'
import UserContentTitle from './UserContentTitle'
import UserContentName from './UserContentName'
import UserContentNav from './UserContentNav'

const UserContent = ()=>{
    return (
        <div className='user-content'>
            <UserContentTitle />
            <UserContentName />
            <UserContentNav />
        </div>
    )
}

export default UserContent
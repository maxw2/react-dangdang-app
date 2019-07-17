import React from 'react'
import loading from './Dual Ring-1s-200px.gif'

import './Explore.scss'

const Explore = () => {
    return (
        <div className='explore'>
            <div className='loading'>
                <img src={loading} alt='loading' />
            </div>
        </div>
    )
}

export default Explore
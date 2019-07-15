import React from 'react'

import IndexSearch from './IndexSearch'
import IndexNav from './IndexNav'


class Index extends React.Component {
    render(){
        return (
            <div className='index'>
                <IndexSearch />
                <IndexNav />
            </div>
        )
    }
}

export default Index
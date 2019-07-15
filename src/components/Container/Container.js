import React from 'react'
import { Route } from 'react-router-dom'

import Index from '../index/Index'
import Sort from '../sort/Sort'
import Explore from '../explore/Explore'
import Cart from '../cart/Cart'
import User from '../user/User'
import Nav from '../nav/Nav'
//



const Container = (props) => {
    return (
        <>
            <div className='container'>
                <Route exact path={`${props.match.path}`} component={Index} />
                <Route exact path={`/sort`} component={Sort} />
                <Route exact path={`${props.match.path}explore`} component={Explore} />
                <Route path={`${props.match.path}cart`} component={Cart} />
                <Route exact path={`${props.match.path}user`} component={User} />

            </div>
            <Nav />
        </>
    )
}

export default Container 
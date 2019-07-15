import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const UserContentName = (props) => {



    return (
        <div className='user-content-name'>
            <div className='user-content-name-img'>
                {/* <img /> */}
            </div>
            <div className='user-content-name-title'>
                <div className='name'>
                    <Link to='/login'>
                        <p>{props.name ?
                            props.name : '登录/注册'}</p>
                    </Link>

                </div>
                <div className='noname'>
                    <p>签到领银铃铛></p>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        name: state.name
    }
}


export default connect(mapStateToProps, null)(UserContentName)
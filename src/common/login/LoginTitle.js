import React from 'react'
import left from './images/left.svg'

const LoginTitle = (props)=>{

    function onClick(){
        props.history.goBack()
    }

    return (
        <div className='login-title'>
            <div className='title-img'>
               <img src={left} alt='left' onClick={onClick}/> 
            </div>
            
        </div>
    )
}

export default LoginTitle
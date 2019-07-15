import React from 'react'

const SortMenuContent = (props)=>{
    return(
        <div className='sort-menu-content' style={{width:'100%',height:'100%'}}>
            <props.component />
        </div>
    )
}


export default SortMenuContent
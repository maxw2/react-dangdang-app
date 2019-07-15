import React from 'react'
import SortSearch from './SortSearch'
import SortMenu from './SortMenu';

const Sort = ()=>{
    return (
        <div className='sort' style={{display:'flex'}}>
            <SortSearch />
            <SortMenu />
        </div>
    )
}

export default Sort
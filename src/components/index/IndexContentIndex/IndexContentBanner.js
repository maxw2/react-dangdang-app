import React from 'react'

import mini_banner from '../image/indexContentIndex/index-mini-banner.jpg'

const IndexContentBanner = ()=>{
    return(
        <div className='index-mini-banner' style={{width:document.documentElement.clientWidth,background:'white'}}>
                <img src={mini_banner} alt='mini-banner' style={{width:'100%'}}/>
        </div>
    )
}

export default IndexContentBanner
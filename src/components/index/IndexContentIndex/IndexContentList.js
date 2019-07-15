import React from 'react'

import list_1 from '../image/indexContentIndex/index-list-1.png'
import list_2 from '../image/indexContentIndex/index-list-2.png'
import list_3 from '../image/indexContentIndex/index-list-3.png'
import list_4 from '../image/indexContentIndex/index-list-4.png'
import list_5 from '../image/indexContentIndex/index-list-5.png'
import list_6 from '../image/indexContentIndex/index-list-6.jpg'
import list_7 from '../image/indexContentIndex/index-list-7.png'
import list_8 from '../image/indexContentIndex/index-list-8.png'
import list_9 from '../image/indexContentIndex/index-list-9.png'
import list_10 from '../image/indexContentIndex/index-list-10.jpg'

const IndexContentList = ()=>{
    const list = [list_1,list_2,list_3,list_4,list_5,list_6,list_7,list_8,list_9,list_10]
    return(
        <div className='index-list' style={{width:'100%'}}>
            <ul style={{width:'100%',background:'white',display:'flex',flexWrap:'wrap'}}>
                {
                    list.map((val,index)=>{
                        return(
                            <li key={index}
                                style={{width:'calc(100% / 5)'}}>
                                <img src={val} style={{width:'100%'}} alt='index-list'/>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default IndexContentList
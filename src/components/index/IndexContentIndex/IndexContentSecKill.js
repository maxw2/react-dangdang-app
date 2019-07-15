import React from 'react'

import listArr from './IndexContentSecKillData'
import IndexContentSecKillCountDown from './IndexContentSecKillCountDown'
import Scroll from '../../../common/scroll/Scroll'
import secKill_title from '../image/indexContentIndex/index-seckill-title.jpg'




const IndexContentSecKill = () => {


    
    return (
        <div className='index-seckill' style={{ width: document.documentElement.clientWidth }}>
            <div className='index-seckill-title' style={{ width: '100%', background: 'white' }}>
                <img src={secKill_title} style={{ width: '100%' }} alt='seckill-title' />
            </div>
            <IndexContentSecKillCountDown />
            <div className='index-seckill-list'>
                <Scroll className='index-seckill-list'
                    style={{ width: document.documentElement.clientWidth, height: '180px' ,background:'white'}}
                    options={{ scrollX: true, direction: 'x' }}>
                    <ul style={{ display: 'flex', float: 'left' }}>
                        {
                            listArr.map((val, index) => {
                                return (
                                    <li className={`seckill-list` + index}
                                        style={{ width: document.documentElement.clientWidth * 0.3, background: 'white' }}
                                        key={index}>
                                        <div className='seckill-image' style={{ width: '80%', margin: 'auto' }}>
                                            <img src={val.image} style={{ width: '100%' }} alt='seckill-img' />
                                        </div>
                                        <div className='seckill-name' style={{ width: '80%',height:'1.7rem',margin:'auto',fontSize:'0.7rem',marginTop:'10px'}}>
                                            <p style={{width:'100%',height:'100%',overflow:'hidden',textOverflow: 'ellipsis',WebkitLineClamp:'2',WebkitBoxOrient:'vertical',display:'-webkit-box'}}>{val.title}</p>
                                        </div>
                                        <div className='price' style={{width:'80%',margin:'5px auto'}}>
                                            <p className='seckill-num' style={{color:'#f3344a'}}>{val.num}</p>
                                            <p className='seckill-discount' style={{fontSize:'12px',color:'#bababa',textDecoration:'line-through'}} >{val.discount}</p>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </Scroll>

            </div>

        </div>
    )
}




export default IndexContentSecKill
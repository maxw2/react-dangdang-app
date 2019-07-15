import React from 'react'

import Scroll from '../../common/scroll/Scroll'

const ShopPageBanner = (props) => {
    function getScroll(val) {
        let scroll = val
        let btnEl = document.querySelectorAll('.shop-page-banner .shop-page-banner-btn .btn')
        let lastBtn = document.querySelector('.shop-page-banner .shop-page-banner-btn .action')
        
        scroll.on('onSwiper',(ev)=>{
            let num = ev.num
            if(btnEl[num] === lastBtn) return 

            btnEl[num].classList.add('action')
            lastBtn.classList.remove('action')
            lastBtn = btnEl[num]
        })
    }
    return (
        <div className='shop-page-banner'>
            <Scroll className={'shop-page-banner-scroll'}
                options={{ scrollX: true, swiper: {} }}
                getScroll={getScroll.bind(this)}>
                <ul>
                    {
                        props.banner.map((val, index) => {
                            return (
                                <li className={`shop-page-li shop-page-li-${index}`}
                                    style={{ width: document.documentElement.clientWidth }}
                                    key={index}>
                                    <img src={val} alt='imag' />
                                </li>
                            )
                        })
                    }
                </ul>
            </Scroll>
            <ul className='shop-page-banner-btn'>
                {
                    props.banner.map((val, index, arr) => {
                        return (
                            <li className={index === 0 ? 'btn action' : 'btn'}
                                key={index}>

                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ShopPageBanner
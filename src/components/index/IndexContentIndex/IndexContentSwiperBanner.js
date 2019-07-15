import React from 'react'

import { Link } from 'react-router-dom'
import Scroll from '../../../common/scroll/Scroll'
import banner_1 from '../image/indexContentIndex/index-swiper-banner-1.jpg'
import banner_2 from '../image/indexContentIndex/index-swiper-banner-2.jpg'
import banner_3 from '../image/indexContentIndex/index-swiper-banner-3.jpg'
import banner_4 from '../image/indexContentIndex/index-swiper-banner-4.jpg'
import banner_5 from '../image/indexContentIndex/index-swiper-banner-5.jpg'
import banner_6 from '../image/indexContentIndex/index-swiper-banner-6.jpg'
import banner_7 from '../image/indexContentIndex/index-swiper-banner-7.jpg'

import './IndexContentSwiperBanner.scss'

class IndexContentSwiperBanner extends React.Component {
    constructor() {
        super()
        this.lastBtn = 0
    }
    getScroll(val) {
        let scroll = val
        let btnEl = this.refs.btn.querySelectorAll('.index-banner .banner-scroll span')
        scroll.on('onSwiper', (ev) => {
            if (ev.num !== this.lastBtn) {
                // add
                btnEl[ev.num].className = 'action'
                // clear
                btnEl[this.lastBtn].className = ''
                this.lastBtn = ev.num
            }
        })
    }

    render() {
        const style = {
            width: document.documentElement.clientWidth
        }
        const options = {
            scrollX: true,
            direction: 'x',
            swiper: {
                loop: true
            }
        }

        return (
            <div className='index-banner'>
                <Scroll className={'banner-scroll'}
                    getScroll={this.getScroll.bind(this)}
                    options={options}
                    style={style}>
                    <ul className='banner-list'>
                        <li style={style}>
                            <Link to="/shop">
                                <img src={banner_1} alt='banner_1' />
                            </Link>
                        </li>
                        <li style={style}>
                            <Link to="/shop">
                                <img src={banner_2} alt='banner_2' />
                            </Link>
                        </li>
                        <li style={style}>
                            <Link to="/shop">
                                <img src={banner_3} alt='banner_3' />
                            </Link>
                        </li>
                        <li style={style}>
                            <Link to="/shop">
                                <img src={banner_4} alt='banner_4' />
                            </Link>
                        </li>
                        <li style={style}>
                            <Link to="/shop">
                                <img src={banner_5} alt='banner_5' />
                            </Link>
                        </li>
                        <li style={style}>
                            <Link to="/shop">
                                <img src={banner_6} alt='banner_6' />
                            </Link>
                        </li>
                        <li style={style}>
                            <Link to="/shop">
                                <img src={banner_7} alt='banner_7' />
                            </Link>
                        </li>
                    </ul>
                    <div className='banner-list-btn' ref='btn'>
                        <span className='action'></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </Scroll>
            </div >
        )
    }

}

export default IndexContentSwiperBanner
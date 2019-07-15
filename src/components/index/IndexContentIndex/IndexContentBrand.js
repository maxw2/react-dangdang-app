import React from 'react'

import { Link } from 'react-router-dom'
import Scroll from '../../../common/scroll/Scroll'
import brand_title from '../image/indexContentIndex/index-brand-title.jpg'
import brand_list_1 from '../image/indexContentIndex/index-brand-list-1.jpg'
import brand_list_2 from '../image/indexContentIndex/index-brand-list-2.jpg'
import brand_list_3 from '../image/indexContentIndex/index-brand-list-3.jpg'
import './IndexContentBrand.scss'


class IndexContentBrand extends React.Component {
    constructor() {
        super()
        this.list = [brand_list_1, brand_list_2, brand_list_3]
        this.scroll = null
        this.lastBtn = 0
    }
    getScroll(val) {
        this.scroll = val

    }
    onSwiper() {
        let btnsEl = this.refs.btn.querySelectorAll('span')
        this.scroll.on('onSwiper', (ev) => {
            if (ev.num !== this.lastBtn) {
                // add 
                btnsEl[ev.num].className = 'action'
                //close
                btnsEl[this.lastBtn].className = ''
                this.lastBtn = ev.num
            }
        })
    }
    componentDidMount() {
        this.onSwiper()
    }
    render() {
        return (
            <div className='index-brand'>
                <div className='index-brand-swiper'>
                    {/* Scroll */}
                    <Scroll className={'index-brand-swiper-scroll'}
                        options={{ scrollX: true, direction: 'x', swiper: { loop: false } }}
                        getScroll={this.getScroll.bind(this)}>
                        <ul style={{ display: 'flex' }}>
                            {
                                this.list.map((val, index) => {
                                    return (
                                        <li style={{ width: document.documentElement.clientWidth }} key={index}>
                                            <Link to='/shop'>
                                                <img src={val} style={{ width: '100%' }} alt='index-brand-list' />
                                            </Link>
                                        </li>
                                    )
                                })
                            }

                        </ul>
                    </Scroll>
                    {/* 盖住上部图片 */}
                    <div className='index-brand-title'>
                        <img src={brand_title} alt='brand-title' style={{ width: '100%' }} />
                    </div>
                    {/* btn指示器 */}
                    <div className='index-brand-btn' ref='btn'>
                        {
                            this.list.map((val, index) => {
                                return (
                                    <span className={index === 0 ? 'action' : ''} key={index}></span>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }

}

export default IndexContentBrand 
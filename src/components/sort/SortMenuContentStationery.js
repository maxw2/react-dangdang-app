import React from 'react'

import Scroll from '../../common/scroll/Scroll'
import banner from './images/contentStationery/sort-menu-content-stationery-banner.jpg'
import hot_brand_1 from './images/contentStationery/sort-menu-content-stationery-hot-brand-1.jpg'
import hot_brand_2 from './images/contentStationery/sort-menu-content-stationery-hot-brand-2.jpg'
import hot_brand_3 from './images/contentStationery/sort-menu-content-stationery-hot-brand-3.jpg'
import hot_brand_4 from './images/contentStationery/sort-menu-content-stationery-hot-brand-4.jpg'
import hot_brand_5 from './images/contentStationery/sort-menu-content-stationery-hot-brand-5.jpg'
import hot_brand_6 from './images/contentStationery/sort-menu-content-stationery-hot-brand-6.jpg'
import hot_brand_7 from './images/contentStationery/sort-menu-content-stationery-hot-brand-7.jpg'
import hot_brand_8 from './images/contentStationery/sort-menu-content-stationery-hot-brand-8.jpg'
import hot_brand_9 from './images/contentStationery/sort-menu-content-stationery-hot-brand-9.png'
import year_1 from './images/contentStationery/sort-menu-content-stationery-year-1.png'
import year_2 from './images/contentStationery/sort-menu-content-stationery-year-2.png'
import year_3 from './images/contentStationery/sort-menu-content-stationery-year-3.png'
import year_4 from './images/contentStationery/sort-menu-content-stationery-year-4.png'
import year_5 from './images/contentStationery/sort-menu-content-stationery-year-5.png'


import './SortMenuContentStationery.scss'

class SortMenuContentStationery extends React.Component {
    getScroll(val) {
        this.scroll = val
    }
    onImageLoad() {
        let that = this
        let imgsEl = document.querySelectorAll('.sort-menu-content-stationery-scroll img')
        for (let i = 0; i < imgsEl.length; i++) {
            imgsEl[i].onload = function () {
                that.scroll.refresh()
            }
        }
    }

    componentDidMount() {
        this.onImageLoad()
    }

    render() {
        return (
            <Scroll className={'sort-menu-content-stationery-scroll'}
                    style={{width:'100%',height:'100%',overflow:'hidden'}}
                    getScroll={this.getScroll.bind(this)}>
                <div className='content'>
                    {/* banner */}
                    <div className='banner'>
                        <img src={banner} alt='banner' />
                    </div>
                    {/* mini-banner */}
                    <div className='mini-banner'>
                        <div className='link-double'>
                            <div className='text'>
                                <p>进入母婴馆</p>
                                <span>母婴用品一站购</span>
                            </div>
                            <div className='icon'>
                                <span className='icon-arrow'></span>
                                <span className='icon-arrow-1'></span>
                            </div>
                        </div>
                        <div className='link-double link-double-right'>
                            <div className='text'>
                                <p>进入玩具馆</p>
                                <span>超值玩具精选</span>
                            </div>
                            <div className='icon'>
                                <span className='icon-arrow'></span>
                                <span className='icon-arrow-1'></span>
                            </div>
                        </div>
                    </div>
                    {/* hot-brand */}
                    <div className='hot-brand'>
                        <div className='title'>
                            <p>热门品牌</p>
                        </div>
                        <ul className='list'>
                            <li>
                                <div className='img'>
                                    <img src={hot_brand_1} alt='hot-brand-1' />
                                </div>
                                <p>洪恩</p>
                            </li>
                            <li>
                                <div className='img'>
                                    <img src={hot_brand_2} alt='hot-brand-2' />
                                </div>
                                <p>逻辑狗</p>
                            </li>
                            <li>
                                <div className='img'>
                                    <img src={hot_brand_3} alt='hot-brand-3' />
                                </div>
                                <p>特宝儿</p>
                            </li>
                            <li>
                                <div className='img'>
                                    <img src={hot_brand_4} alt='hot-brand-4' />
                                </div>
                                <p>乐高</p>
                            </li>
                            <li>
                                <div className='img'>
                                    <img src={hot_brand_5} alt='hot-brand-5' />
                                </div>
                                <p>米米智玩</p>
                            </li>
                            <li>
                                <div className='img'>
                                    <img src={hot_brand_6} alt='hot-brand-6' />
                                </div>
                                <p>小猪佩奇</p>
                            </li>
                            <li>
                                <div className='img'>
                                    <img src={hot_brand_7} alt='hot-brand-7' />
                                </div>
                                <p>火火兔</p>
                            </li>
                            <li>
                                <div className='img'>
                                    <img src={hot_brand_8} alt='hot-brand-8' />
                                </div>
                                <p>拉拉布书</p>
                            </li>
                            <li>
                                <div className='img'>
                                    <img src={hot_brand_9} alt='hot-brand-9' />
                                </div>
                                <p>UNME</p>
                            </li>
                            <li>
                                <div className='img'>
                                    <img src={hot_brand_1} alt='hot-brand-1' />
                                </div>
                                <p>洪恩</p>
                            </li>
                            <li>
                                <div className='img'>
                                    <img src={hot_brand_2} alt='hot-brand-2' />
                                </div>
                                <p>逻辑狗</p>
                            </li>
                            <li>
                                <div className='img'>
                                    <img src={hot_brand_3} alt='hot-brand-3' />
                                </div>
                                <p>特宝儿</p>
                            </li>
                        </ul>
                    </div>
                    {/* line-title 分割线 */}
                    <div className='line-title'>
                        <span>玩具童车畅销榜</span>
                    </div>
                    {/* year 适用年龄 */}
                    <div className='year'>
                        <div className='title'>
                            <div className='title-left'>
                                <p className='text'>适用年龄</p>
                                <div className='icon'>
                                    <span className='icon-arrow'></span>
                                    <span className='icon-arrow-1'></span>
                                </div>
                            </div>
                            <div className='title-right'>
                                <p className='text'>玩具馆</p>
                                <div className='icon'>
                                    <span className='icon-arrow'></span>
                                    <span className='icon-arrow-1'></span>
                                </div>
                            </div>
                        </div>
                        <div className='list'>
                            <ul>
                                <li>
                                    <div className='img'>
                                        <img src={year_1} alt='year_1' />
                                    </div>
                                    <p>0-1岁</p>
                                </li>
                                <li>
                                    <div className='img'>
                                        <img src={year_2} alt='year_2' />
                                    </div>
                                    <p>1-2岁</p>
                                </li>
                                <li>
                                    <div className='img'>
                                        <img src={year_3} alt='year_3' />
                                    </div>
                                    <p>3-6岁</p>
                                </li>
                                <li>
                                    <div className='img'>
                                        <img src={year_4} alt='year_4' />
                                    </div>
                                    <p>7-10岁</p>
                                </li>
                                <li>
                                    <div className='img'>
                                        <img src={year_5} alt='year_5' />
                                    </div>
                                    <p>11-14岁</p>
                                </li>
                            </ul>
                        </div>
                    
                    </div>
                    {/* year 适用年龄 */}
                    <div className='year'>
                        <div className='title'>
                            <div className='title-left'>
                                <p className='text'>适用年龄</p>
                                <div className='icon'>
                                    <span className='icon-arrow'></span>
                                    <span className='icon-arrow-1'></span>
                                </div>
                            </div>
                            <div className='title-right'>
                                <p className='text'>玩具馆</p>
                                <div className='icon'>
                                    <span className='icon-arrow'></span>
                                    <span className='icon-arrow-1'></span>
                                </div>
                            </div>
                        </div>
                        <div className='list'>
                            <ul>
                                <li>
                                    <div className='img'>
                                        <img src={year_1} alt='year_1' />
                                    </div>
                                    <p>0-1岁</p>
                                </li>
                                <li>
                                    <div className='img'>
                                        <img src={year_2} alt='year_2' />
                                    </div>
                                    <p>1-2岁</p>
                                </li>
                                <li>
                                    <div className='img'>
                                        <img src={year_3} alt='year_3' />
                                    </div>
                                    <p>3-6岁</p>
                                </li>
                                <li>
                                    <div className='img'>
                                        <img src={year_4} alt='year_4' />
                                    </div>
                                    <p>7-10岁</p>
                                </li>
                                <li>
                                    <div className='img'>
                                        <img src={year_5} alt='year_5' />
                                    </div>
                                    <p>11-14岁</p>
                                </li>
                            </ul>
                        </div>
                    
                    </div>

                </div>

            </Scroll>
        )
    }

}

export default SortMenuContentStationery
import React from 'react'

import Scroll from '../../../common/scroll/Scroll'
import IndexContentSwiperBanner from './IndexContentSwiperBanner'   // 轮播图
import IndexContentBanner from './IndexContentBanner'               // 广告
import IndexContentList from './IndexContentList'                   // 
import IndexContentBrand from './IndexContentBrand'
import IndexContentSecKill from './IndexContentSecKill'



class IndexContentIndex extends React.Component {
    constructor() {
        super()
        this.scroll = null
    }
    getScroll(val) {
        this.scroll = val
    }
    onImgLoad() {
        let imgsEl = this.refs.indexContentIndex.querySelectorAll('img')
        for (let i = 0; i < imgsEl.length; i++) {
            imgsEl[i].onload = () => {
                this.scroll.refresh()
            }
        }
    }
    componentDidMount() {
        this.onImgLoad()
    }
    render() {
        const style = {
            width: document.documentElement.clientWidth, 
            height: document.documentElement.clientHeight - 140, 
            overflow: 'hidden'
        }
        return (
            <div className='index-content-index' ref='indexContentIndex' style={{background:"#eff4fa"}}>
                <Scroll className='index-content-index-scroll'
                    style={style}
                    options={{ scrollX: false, direction: 'y' }}
                    getScroll={this.getScroll.bind(this)}>
                    <div style={{minHeight:'100%'}}>
                        <IndexContentSwiperBanner />
                        <IndexContentBanner />
                        <IndexContentList />
                        <IndexContentBrand />
                        <IndexContentSecKill />
                    </div>
                </Scroll>

            </div>

        )
    }

}

export default IndexContentIndex
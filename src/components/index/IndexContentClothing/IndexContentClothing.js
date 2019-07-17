import React from 'react'

import Scroll from '../../../common/scroll/Scroll'
import IndexContentBanner from './IndexContentBanner'
import IndexContentList from './IndexContntList'
import IndexContentNews from './IndexContentNews'
import IndexContentBrand from './IndexContentBrand'

import './IndexContentClothing.scss'

class IndexContentClothing extends React.Component {
    getScroll(val){
        this.scroll = val
    }
    onImgLoad() {
        let imgsEl = this.refs.indexContentClothing.querySelectorAll('img')
        for (let i = 0; i < imgsEl.length; i++) {
            imgsEl[i].onload = () => {
                this.scroll.refresh()
            }
        }
    }
    componentDidMount(){
        this.onImgLoad()
    }

    render() {
        return (
            <div className='index-content-clothing' ref='indexContentClothing'>
                <Scroll className='index-content-scroll'
                    options={{ direction: 'y' }}
                    getScroll={this.getScroll.bind(this)}>
                    <div style={{ minHeight: '100%' }}>
                        <IndexContentBanner />
                        <IndexContentList />
                        <IndexContentNews />
                        <IndexContentBrand />
                </div>
                </Scroll>
            </div>
        )
    }

}

export default IndexContentClothing
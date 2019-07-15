import React from 'react'

import Scroll from '../../common/scroll/Scroll'
import banner from './images/contentBook/sort-menu-content-book-banner.jpg'
import billboard_1 from './images/contentBook/sort-menu-content-book-billboard-1.png'
import billboard_2 from './images/contentBook/sort-menu-content-book-billboard-2.png'
import billboard_3 from './images/contentBook/sort-menu-content-book-billboard-3.png'
// import classify_arrow from './images/contentBook/sort-menu-content-book-arrow.png'
import './SortMenuContentBook.scss'


class SortMenuContentBook extends React.Component {
    getScroll(val) {
        this.scroll = val
    }
    // 展开与关闭
    onClick(ev) {
        let el = ev.currentTarget
        let targetEl = ev.target
        if (targetEl === el.querySelector('.btn span') || targetEl === el.querySelector('.btn')) {
            let divEl = el.querySelectorAll('.list .action')
            let btnEl = el.querySelector('.btn')
            // 展开内容
            if (btnEl.getAttribute('data-btn') === 'open') {
                for (let i = 0; i < divEl.length; i++) {
                    divEl[i].style = ''
                }
                btnEl.setAttribute('data-btn', 'close')
                btnEl.querySelector('span').innerText = '收起'
                // 关闭内容
            } else if (btnEl.getAttribute('data-btn') === 'close') {
                for (let i = 0; i < divEl.length; i++) {
                    divEl[i].style = 'display:none'
                }
                btnEl.setAttribute('data-btn', 'open')
                btnEl.querySelector('span').innerText = '展开'
            }

            this.scroll.refresh()
        }





    }
    // image加载
    onImageLoad(){
        let that = this
        let imgsEl = document.querySelectorAll('.sort-menu-content-book-scroll img')
        for(let i = 0;i< imgsEl.length;i++){
            imgsEl[i].onload = function (){
                that.scroll.refresh()
            }
        }
    }
    // 
    componentDidMount() {
        this.onImageLoad()
    }
    render() {
        return (
            <Scroll className={'sort-menu-content-book-scroll'}
                getScroll={this.getScroll.bind(this)}
                options={{ scrollX: false}}>
                <div className='content'>
                    {/* banner */}
                    <div className='banner'>
                        <img src={banner} alt='banner' />
                    </div>
                    {/* mini-banner */}
                    <div className='mini-banner'>
                        <div className='link-double'>
                            <div className='text'>
                                <p>进入当当书城</p>
                                <span>特价低至1.9折</span>
                            </div>
                            <div className='icon'>
                                <span className='icon-arrow'></span>
                                <span className='icon-arrow-1'></span>
                            </div>
                        </div>
                        <div className='link-double link-double-right'>
                            <div className='text'>
                                <p>进入童书馆</p>
                                <span>精选少儿读物</span>
                            </div>
                            <div className='icon'>
                                <span className='icon-arrow'></span>
                                <span className='icon-arrow-1'></span>
                            </div>
                        </div>
                    </div>
                    {/* billboard */}
                    <div className='billboard'>
                        <div className='title'>
                            <p>榜单</p>
                        </div>
                        <div className='content'>
                            <ul>
                                <li>
                                    <div className='img'>
                                        <img src={billboard_1} alt='billboard-1'></img>
                                    </div>
                                    <div className='text'>
                                        <p>总榜</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='img'>
                                        <img src={billboard_2} alt='billboard-2'></img>
                                    </div>
                                    <div className='text'>
                                        <p>新书榜</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='img'>
                                        <img src={billboard_3} alt='billboard-3'></img>
                                    </div>
                                    <div className='text'>
                                        <p>童书榜</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* classify 文学 */}
                    <div className='classify' onClick={this.onClick.bind(this)}>
                        <div className='title'>
                            <div className='title-left'>
                                <p className='text'>文学</p>
                                <div className='icon'>
                                    <span className='icon-arrow'></span>
                                    <span className='icon-arrow-1'></span>
                                </div>
                            </div>
                            <div className='title-right'>
                                <p className='text'>畅销榜</p>
                                <div className='icon'>
                                    <span className='icon-arrow'></span>
                                    <span className='icon-arrow-1'></span>
                                </div>
                            </div>
                        </div>
                        <ul className='list'>
                            <li className=''>
                                <div className='text'>
                                    <p>社会</p>
                                </div>
                            </li>
                            <li>
                                <div className='text'>
                                    <p>侦探/悬疑/推理</p>
                                </div>
                            </li>
                            <li>
                                <div className='text'>
                                    <p>情感</p>
                                </div>
                            </li>
                            <li>
                                <div className='text'>
                                    <p>世界名著</p>
                                </div>
                            </li>
                            <li>
                                <div className='text'>
                                    <p>历史</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>科幻</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>魔幻</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>惊悚/恐怖</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>武侠</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>官场</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>军事</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>都市</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>乡土</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>职场</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>财经</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>影视小说</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>四大名著</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>中国古典小说</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>中国近代小说</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>中国当代小说</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>国外小说</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>作品集</p>
                                </div>
                            </li>
                            <li className='btn' data-btn='open'>
                                <span>展开</span>
                                {/* <img src={classify_arrow} alt='arrow' /> */}
                            </li>
                        </ul>
                    </div>
                    {/* classify 艺术 */}
                    <div className='classify' onClick={this.onClick.bind(this)}>
                        <div className='title'>
                            <div className='title-left'>
                                <p className='text'>艺术</p>
                                <div className='icon'>
                                    <span className='icon-arrow'></span>
                                    <span className='icon-arrow-1'></span>
                                </div>
                            </div>
                            <div className='title-right'>
                                <p className='text'>畅销榜</p>
                                <div className='icon'>
                                    <span className='icon-arrow'></span>
                                    <span className='icon-arrow-1'></span>
                                </div>
                            </div>
                        </div>
                        <ul className='list'>
                            <li className=''>
                                <div className='text'>
                                    <p>绘画</p>
                                </div>
                            </li>
                            <li>
                                <div className='text'>
                                    <p>书法/篆刻</p>
                                </div>
                            </li>
                            <li>
                                <div className='text'>
                                    <p>音乐</p>
                                </div>
                            </li>
                            <li>
                                <div className='text'>
                                    <p>摄影</p>
                                </div>
                            </li>
                            <li>
                                <div className='text'>
                                    <p>设计</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>收藏/鉴赏</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>艺术理论</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>小人书/连环画</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>影视/媒体艺术</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>世界各国艺术概况</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>人体艺术</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>工艺美术</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>戏剧艺术/舞台艺术</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>民间艺术</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>建筑艺术</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>舞蹈</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>雕塑</p>
                                </div>
                            </li>
                            <li className='btn' data-btn='open'>
                                <span>展开</span>
                                {/* <img src={classify_arrow} alt='arrow' /> */}
                            </li>
                        </ul>
                    </div>
                    {/* classify 文学 */}
                    <div className='classify' onClick={this.onClick.bind(this)}>
                        <div className='title'>
                            <div className='title-left'>
                                <p className='text'>文学</p>
                                <div className='icon'>
                                    <span className='icon-arrow'></span>
                                    <span className='icon-arrow-1'></span>
                                </div>
                            </div>
                            <div className='title-right'>
                                <p className='text'>畅销榜</p>
                                <div className='icon'>
                                    <span className='icon-arrow'></span>
                                    <span className='icon-arrow-1'></span>
                                </div>
                            </div>
                        </div>
                        <ul className='list'>
                            <li className=''>
                                <div className='text'>
                                    <p>社会</p>
                                </div>
                            </li>
                            <li>
                                <div className='text'>
                                    <p>侦探/悬疑/推理</p>
                                </div>
                            </li>
                            <li>
                                <div className='text'>
                                    <p>情感</p>
                                </div>
                            </li>
                            <li>
                                <div className='text'>
                                    <p>世界名著</p>
                                </div>
                            </li>
                            <li>
                                <div className='text'>
                                    <p>历史</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>科幻</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>魔幻</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>惊悚/恐怖</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>武侠</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>官场</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>军事</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>都市</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>乡土</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>职场</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>财经</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>影视小说</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>四大名著</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>中国古典小说</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>中国近代小说</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>中国当代小说</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>国外小说</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>作品集</p>
                                </div>
                            </li>
                            <li className='btn' data-btn='open'>
                                <span>展开</span>
                                {/* <img src={classify_arrow} alt='arrow' /> */}
                            </li>
                        </ul>
                    </div>
                    {/* classify 艺术 */}
                    <div className='classify' onClick={this.onClick.bind(this)}>
                        <div className='title'>
                            <div className='title-left'>
                                <p className='text'>艺术</p>
                                <div className='icon'>
                                    <span className='icon-arrow'></span>
                                    <span className='icon-arrow-1'></span>
                                </div>
                            </div>
                            <div className='title-right'>
                                <p className='text'>畅销榜</p>
                                <div className='icon'>
                                    <span className='icon-arrow'></span>
                                    <span className='icon-arrow-1'></span>
                                </div>
                            </div>
                        </div>
                        <ul className='list'>
                            <li className=''>
                                <div className='text'>
                                    <p>绘画</p>
                                </div>
                            </li>
                            <li>
                                <div className='text'>
                                    <p>书法/篆刻</p>
                                </div>
                            </li>
                            <li>
                                <div className='text'>
                                    <p>音乐</p>
                                </div>
                            </li>
                            <li>
                                <div className='text'>
                                    <p>摄影</p>
                                </div>
                            </li>
                            <li>
                                <div className='text'>
                                    <p>设计</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>收藏/鉴赏</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>艺术理论</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>小人书/连环画</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>影视/媒体艺术</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>世界各国艺术概况</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>人体艺术</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>工艺美术</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>戏剧艺术/舞台艺术</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>民间艺术</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>建筑艺术</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>舞蹈</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>雕塑</p>
                                </div>
                            </li>
                            <li className='btn' data-btn='open'>
                                <span>展开</span>
                                {/* <img src={classify_arrow} alt='arrow' /> */}
                            </li>
                        </ul>
                    </div>
                    {/* classify 文学 */}
                    <div className='classify' onClick={this.onClick.bind(this)}>
                        <div className='title'>
                            <div className='title-left'>
                                <p className='text'>文学</p>
                                <div className='icon'>
                                    <span className='icon-arrow'></span>
                                    <span className='icon-arrow-1'></span>
                                </div>
                            </div>
                            <div className='title-right'>
                                <p className='text'>畅销榜</p>
                                <div className='icon'>
                                    <span className='icon-arrow'></span>
                                    <span className='icon-arrow-1'></span>
                                </div>
                            </div>
                        </div>
                        <ul className='list'>
                            <li className=''>
                                <div className='text'>
                                    <p>社会</p>
                                </div>
                            </li>
                            <li>
                                <div className='text'>
                                    <p>侦探/悬疑/推理</p>
                                </div>
                            </li>
                            <li>
                                <div className='text'>
                                    <p>情感</p>
                                </div>
                            </li>
                            <li>
                                <div className='text'>
                                    <p>世界名著</p>
                                </div>
                            </li>
                            <li>
                                <div className='text'>
                                    <p>历史</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>科幻</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>魔幻</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>惊悚/恐怖</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>武侠</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>官场</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>军事</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>都市</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>乡土</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>职场</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>财经</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>影视小说</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>四大名著</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>中国古典小说</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>中国近代小说</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>中国当代小说</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>国外小说</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>作品集</p>
                                </div>
                            </li>
                            <li className='btn' data-btn='open'>
                                <span>展开</span>
                                {/* <img src={classify_arrow} alt='arrow' /> */}
                            </li>
                        </ul>
                    </div>
                    {/* classify 艺术 */}
                    <div className='classify' onClick={this.onClick.bind(this)}>
                        <div className='title'>
                            <div className='title-left'>
                                <p className='text'>艺术</p>
                                <div className='icon'>
                                    <span className='icon-arrow'></span>
                                    <span className='icon-arrow-1'></span>
                                </div>
                            </div>
                            <div className='title-right'>
                                <p className='text'>畅销榜</p>
                                <div className='icon'>
                                    <span className='icon-arrow'></span>
                                    <span className='icon-arrow-1'></span>
                                </div>
                            </div>
                        </div>
                        <ul className='list'>
                            <li className=''>
                                <div className='text'>
                                    <p>绘画</p>
                                </div>
                            </li>
                            <li>
                                <div className='text'>
                                    <p>书法/篆刻</p>
                                </div>
                            </li>
                            <li>
                                <div className='text'>
                                    <p>音乐</p>
                                </div>
                            </li>
                            <li>
                                <div className='text'>
                                    <p>摄影</p>
                                </div>
                            </li>
                            <li>
                                <div className='text'>
                                    <p>设计</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>收藏/鉴赏</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>艺术理论</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>小人书/连环画</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>影视/媒体艺术</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>世界各国艺术概况</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>人体艺术</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>工艺美术</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>戏剧艺术/舞台艺术</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>民间艺术</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>建筑艺术</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>舞蹈</p>
                                </div>
                            </li>
                            <li className='action' style={{ display: 'none' }}>
                                <div className='text'>
                                    <p>雕塑</p>
                                </div>
                            </li>
                            <li className='btn' data-btn='open'>
                                <span>展开</span>
                                {/* <img src={classify_arrow} alt='arrow' /> */}
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </Scroll>
        )
    }

}





export default SortMenuContentBook
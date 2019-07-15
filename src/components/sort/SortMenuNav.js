import React from 'react'
import PropTypes from 'prop-types'


import Scroll from '../../common/scroll/Scroll'
import './SortMenuNav.scss'

class SortMenuNav extends React.Component {
    constructor() {
        super()
        this.scroll = null
        this.lastNav = null
        this.listTop = []
        this.originTop = null
        this.originPos = null
        this.time = null
    }
    getScroll(val) {
        this.scroll = val
    }
    getListTop() {
        let contentEl = document.querySelector('.sort-menu-nav-scroll')
        let ulsEl = contentEl.querySelector('ul')
        let listsEl = document.querySelectorAll('.sort-menu-nav-list li')
        // 列出所有ListTop
        for (let i = 0; i < listsEl.length; i++) {
            this.listTop.push(listsEl[i].offsetTop)
        }
        // 求出listEl的中心点
        // let originNum = Math.floor(contentEl.clientHeight / listsEl[0].clientHeight / 2)
        // this.originTop = listsEl[originNum].offsetTop
        // this.originPos = 0

        this.originTop = contentEl.clientHeight / 2
        this.originBottom = ulsEl.clientHeight - this.originTop
    }
    onClick(ev) {
        let el = ev.currentTarget
        let elNum = el.getAttribute('data-com')
        if (!this.lastNav) this.lastNav = document.querySelector('.sort-menu-nav-scroll .nav-action')
        if (this.lastNav === el) return
        // 修改 actionClass
        el.classList.add('nav-action')
        this.lastNav.classList.remove('nav-action')
        this.lastNav = el
        // nav 居中对齐 
        this.onMoveMiddle(this.originTop, this.listTop[elNum])
        // callBack
        this.props.onClickNav(elNum)

    }
    // scrollTo
    scrollTo(_to){
        window.cancelAnimationFrame(this.time)
        let posY = this.scroll.$pos.y
        let to = _to
        let distance = to - posY   // 距离 

        if(Math.ceil(posY) === Math.ceil(_to) || Math.floor(posY) === Math.floor(_to)){
            window.cancelAnimationFrame(this.time)
            return 
        }
        
        this.scroll.$pos.y += distance * 0.1
        this.scroll._setPos()
        // console.log(this.scroll)

        this.time = window.requestAnimationFrame(this.scrollTo.bind(this,to))
    }

    onMoveMiddle(origin, elTop, el) {
        if (elTop <= origin) {
            //
            this.scrollTo(0)


            // this.scroll.$pos.y = 0
            // this.scroll._setPos()
        } else if (elTop >= this.originBottom) {
            //
            this.scrollTo(-this.scroll.$dom.scroll_B)


            // this.scroll.$pos.y = -this.scroll.$dom.scroll_B
            // this.scroll._setPos()
        } else {
            //
            let pos = -(elTop - origin)
            this.scrollTo(pos)


            // this.scroll.$pos.y = -(elTop - origin)
            // this.scroll._setPos()
        }
    }

    componentDidMount() {
        this.getListTop()
    }



    render() {
        return (
            <Scroll className='sort-menu-nav-scroll' getScroll={this.getScroll.bind(this)}>
                <ul className='sort-menu-nav-list'>
                    {
                        this.props.listArr.map((val, index) => {
                            return (
                                <li className={val.className}
                                    data-dd={val.data_dd}
                                    data-com={val.data_com}
                                    key={val.data_dd + index}
                                    onClick={this.onClick.bind(this)}>
                                    <p>{val.text}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </Scroll>
        )
    }
}


SortMenuNav.propType = {
    listArr: PropTypes.array,
    onClickNav: PropTypes.func
}



export default SortMenuNav
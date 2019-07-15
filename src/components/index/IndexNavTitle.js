import React from 'react'
import PropTypes from 'prop-types'
import Scroll from '../../common/scroll/Scroll'


class IndexNavTitle extends React.Component {
    constructor(props) {
        super(props)
        this.scroll = null
        this.listLeft = []
        this.listEl = null
        this.lastNavNum = this.props.num
        this.originLeft = null
        this.originRight = null
    }

    getScroll(val) {
        this.scroll = val
    }
    getListLeft() {
        let contentEl = document.querySelector('.index-nav-title-scroll')
        let ulEl = document.querySelector('.index-nav-list')
        let listEl = document.querySelectorAll('.index-nav-list li')
        // listEl
        this.listEl = listEl
        // listLeft
        for (let i = 0; i < listEl.length; i++) {
            this.listLeft.push(listEl[i].offsetLeft)
        }
        // origin 换一种思路
        let listMiddle_w = listEl[0].clientWidth / 2    // li的一半
        this.originLeft = contentEl.clientWidth / 2 - listMiddle_w
        this.originRight = ulEl.clientWidth - this.originLeft - listMiddle_w * 2

    }

    onClick(ev) {
        // let el = ev.currentTatget
        let targetEl = ev.target
        let elNum = Number(targetEl.getAttribute('data-type'))

        if (this.listEl[this.lastNavNum] === targetEl) return

        // 改变 Navclass
        this.onChangeNum(elNum)

        // callBack
        this.props.onChangeNav(elNum)
    }
    onChangeNum(num) {
        let targetEl = this.listEl[num]
        let lastNavEl = this.listEl[this.lastNavNum]
        // 替换class
        targetEl.classList.add('action')
        lastNavEl.classList.remove('action')
        // 居中居中
        this.onMoveMiddle(this.originLeft, this.listLeft[num])
        // 改变当前lastNavNum
        this.lastNavNum = num


    }
    scrollTo(_to) {
        window.cancelAnimationFrame(this.time)
        let posX = this.scroll.$pos.x
        let to = _to
        let distance = to - posX   // 距离 

        
        if (Math.ceil(posX) === Math.ceil(_to) || Math.floor(posX) === Math.floor(_to)) {
            window.cancelAnimationFrame(this.time)
            return
        }

        this.scroll.$pos.x += distance * 0.1
        this.scroll._setPos()
        // console.log(this.scroll)

        this.time = window.requestAnimationFrame(this.scrollTo.bind(this, to))
    }

    onMoveMiddle(originLeft, listLeft, el) {
        // 不满足居中条件 首位
        if (listLeft <= this.originLeft) {
            // this.scroll.$pos.x = 0
            // this.scroll._setPos()
            this.scrollTo(0)



            // 尾部
        } else if (listLeft >= this.originRight) {
            // this.scroll.$pos.x = -this.scroll.$dom.scroll_R
            // this.scroll._setPos()
            this.scrollTo(-this.scroll.$dom.scroll_R)


        } else {
            // this.scroll.$pos.x = -(listLeft - originLeft)
            // // this.scroll.scrollTo(-100)
            // this.scroll._setPos()

            this.scrollTo(-(listLeft - originLeft))

        }


    }

    componentDidMount() {
        this.getListLeft()
    }
    shouldComponentUpdate(nextProp) {
        if (nextProp.num === this.lastNavNum) {
            return false
        } else {
            this.onChangeNum(nextProp.num)
            return false
        }

    }


    render() {
        return (
            <Scroll className='index-nav-title-scroll'
                getScroll={this.getScroll.bind(this)}
                options={{ scrollX: true }}>
                <ul className='index-nav-list' onClick={this.onClick.bind(this)}>
                    {
                        this.props.listArr.map((val, index) => {
                            return (
                                <li className={val.className}
                                    data-type={val.type}
                                    key={index}>
                                    {val.title}
                                </li>
                            )
                        })
                    }
                </ul>
            </Scroll>
        )
    }

}

IndexNavTitle.proptype = {
    listArr: PropTypes.array,
    num: PropTypes.number,
    onChangeNav: PropTypes.func
}


export default IndexNavTitle
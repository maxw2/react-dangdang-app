import React from 'react'
import PropTypes from 'prop-types'

import Scroll from '../../common/scroll/Scroll'
import IndexNavContentLi from './IndexNavContentLi'

class IndexNavContent extends React.Component {
    constructor(props) {
        super(props)
        this.scroll = null
        this.state = {
            componentArr: new Array(this.props.listArr.length)
        }
    }
    getScroll(val) {
        this.scroll = val
        this.scroll.on('onSwiper', (ev) => {
            this.props.onChangeNav(ev.num)
        })
    }
    setCompoentArr(num) {
        let _num = num
        let componentArr = this.state.componentArr
        // component
        componentArr[_num] = true
        this.setState({
            componentArr: componentArr
        })
    }

    componentWillReceiveProps(nextProps) {
        this.setCompoentArr(nextProps.num)        
    }
    componentDidUpdate(){
        this.scroll.swiperTo(this.props.num)
    }

    componentWillMount() {
        let componentArr = this.state.componentArr
        componentArr[0] = true
        this.setState({
            componentArr: componentArr
        })
    }     


    render() {
        return (
            <Scroll className='index-nav-content-scroll'
                getScroll={this.getScroll.bind(this)}
                options={{ scrollX: true, swiper: { loop: false } }}>
                <ul className='index-nav-content'>
                    {
                        this.props.listArr.map((val, index) => {
                            return (
                                <IndexNavContentLi
                                    componentArr={this.state.componentArr[index]}
                                    component={val.component}
                                    key={index} />
                            )
                        })
                    }
                </ul>
            </Scroll>
        )
    }
}

IndexNavContent.propTypes = {
    listArr: PropTypes.array,
    num: PropTypes.number,
    onChangeNav: PropTypes.func
}


export default IndexNavContent
import React from 'react'
import listArr from './SortMenuData'

import SortMenuNav from './SortMenuNav'
import SortMenuContent from './SortMenuContent'


class SortMenu extends React.Component {
    constructor() {
        super()
        this.listArr = listArr
        this.state = {
            component: this.listArr[0].component
        }
    }
    
    onClickNav(elNum){
        this.setState({
            component:this.listArr[elNum].component
        })
    }

    render() {
        return (
            <div className='sort-menu' style={{ width: document.documentElement.clientWidth, height: document.documentElement.clientHeight - 95, marginTop: '45px', display: 'flex' }}>
                <div className='sort-menu-nav' style={{ width: '20%', height: '100%', background: '#eff4fa' }}>
                    <SortMenuNav listArr={this.listArr} onClickNav={this.onClickNav.bind(this)} />
                </div>
                <div className='sort-menu-content' style={{ width: '80%', height: '100%', background: '#eff4fa', overflow: 'hidden' }}>
                    <SortMenuContent component={this.state.component} />
                </div>
            </div>
        )
    }

}

export default SortMenu
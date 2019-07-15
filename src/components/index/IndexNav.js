import React from 'react'
import navList from './IndexNavData'

import IndexNavTitle from './IndexNavTitle'
import IndexNavContent from './IndexNavContent'
import './IndexNav.scss'

class IndexNav extends React.Component {
    constructor() {
        super()
        this.state = {
            num: 0
        }
        this.listArr = navList
    }

    onChangeNav(elNum){
        this.setState(()=>{
            if(elNum === this.state.num) return 
            console.log(elNum)
            return {
                num:elNum
            }
        })
    }

    componentDidMount(){
    }


    render() {
        return (
            <div className='index-nav'>
                <div className='index-nav-title'>
                    <IndexNavTitle listArr={this.listArr} num={this.state.num} onChangeNav={this.onChangeNav.bind(this)} />
                </div>
                <div className='index-nav-content'>
                    <IndexNavContent listArr={this.listArr} num={this.state.num} onChangeNav={this.onChangeNav.bind(this)} />
                </div>
            </div>
        )
    }

}

export default IndexNav
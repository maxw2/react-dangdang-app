import React from 'react'
import CScroll from 'crash-scroll'

class Scroll extends React.Component {
    // constructor(props){
    //     super()
    // }
     
    componentDidMount(){
        this.scroll = new CScroll(this.refs.scroll,this.props.options)
        if(this.props.getScroll) this.props.getScroll(this.scroll)
    }
    componentDidUpdate(){
        this.scroll.refresh()
    }
    render(){
        return (
            <div className={this.props.className} style={this.props.style} ref='scroll'>
                {
                    this.props.children
                }
            </div>
        )
    }
}

export default Scroll
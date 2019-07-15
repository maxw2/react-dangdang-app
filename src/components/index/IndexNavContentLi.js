import React from 'react'

class IndexNavContentLi extends React.Component {
    constructor() {
        super()
        this.compoment = false
    }

    shouldComponentUpdate(nextProps) {
        if (nextProps.componentArr === this.compoment) return false
        this.compoment = nextProps.componentArr
        return true
    }

    render() {
        return (
            <div className='index-nav-content-li' style={{ width: document.documentElement.clientWidth, minHeight: document.documentElement.clientHeight, overflow: 'hidden' }}>
                {
                    this.props.componentArr ?
                        <this.props.component /> : null
                }
            </div>
        )
    }

}

export default IndexNavContentLi
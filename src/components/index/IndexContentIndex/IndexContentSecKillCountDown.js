import React from 'react'

class IndexContentSecKillCountDown extends React.Component {
    constructor() {
        super()
        this.state = {
            hours: null,
            minutes: null,
            seconds: null,
        }
        this.time = null
    }

    getTime() {
        let date = new Date()
        let _hours = 24
        let _minutes = 59
        let _seconds = 59
        let hours = _hours - date.getHours() + ''
        let minutes = _minutes - date.getMinutes() + ''
        let seconds = _seconds - date.getSeconds() + ''

        if (hours.length === 1) {
            hours = '0' + hours
        } 
        if (minutes.length === 1) {
            minutes = '0' + minutes
        } 
        if (seconds.length === 1) {
            seconds = '0' + seconds
        }

        this.setState({
            hours: hours,
            minutes: minutes,
            seconds: seconds
        })
    }
    componentDidMount() {
        this.time = setInterval(this.getTime.bind(this), 1000)
    }
    componentWillUnmount() {
        clearInterval(this.time)
    }

    render() {
        return (
            <div className='index-seckill-countdown' style={{ height:'45px',textAlign: 'center', background: 'white' }}>
                <div style={{paddingTop:'5px'}}>
                    <span className='countdown-hours' style={{ borderRadius: '20%', padding: '2px',marginRight:'4px', textAlign: "center", background: '#323232', color: 'white' }}>
                        {this.state.hours}
                    </span>
                    <span className='hours' style={{marginRight:'4px'}}>时</span>
                    <span className='countdown-minutes' style={{ borderRadius: '20%', marginRight:'4px',padding: '2px', background: '#323232', color: 'white' }}>
                        {this.state.minutes}
                    </span>
                    <span className='minutes' style={{marginRight:'4px'}}>分</span>
                    <span className='countdown-seconds' style={{ borderRadius: '20%', padding: '2px',marginRight:'4px', color: 'white', background: '#f3344a' }}>
                        {this.state.seconds}
                    </span>
                    <span className='seconds'>
                        秒
                    </span>
                </div>
            </div>

        )
    }
}

export default IndexContentSecKillCountDown
import React from 'react'

class ShopPageScore extends React.Component {
    // constructor(){
    //     super()

    // }

    getScoreStar(){
        let spanEl = document.querySelectorAll('.shop-page-score .shop-page-score-star span')
        let score = this.props.score.score
        let num = score / 2 
        let floor = Math.floor(num)

        for(let i = 0; i< floor;i++){
            spanEl[i].style.backgroundPositionX = '-1.2rem'
        }
        if(num - floor < 0.5){
            spanEl[floor].style.backgroundPositionX = '-0.6rem'
        }else{
            spanEl[floor].style.backgroundPositionX = '-1.2rem'
        }

    }

    componentDidMount(){
        this.getScoreStar()
    }

    render() {
        return (
            <div className='shop-page-score'>
                <div className='shop-page-score-star'>
                    <p>{this.props.score.score}</p>
                    <span style={{}}></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className='shop-page-score-num'>
                    <p>{this.props.score.num}评分</p>
                    <p>精彩评分送积分</p>
                </div>
            </div>
        )
    }



}

export default ShopPageScore
import React from 'react'
import Scroll from '../../../common/scroll/Scroll'

class IndexContentNews extends React.Component {

    function
    render() {
        const listArr = ['GAP7.11超品日 3件4折', 'BURANDENO 2件35折', "森马旗下GLM  49元2件"]
        return (
            <div className='index-news'>
                <div className='icon'>
                    <img src='http://img61.ddimg.cn/upload_img/00727/123/xiaolaba-1557284859.jpg' alt='快讯' />
                </div>
                <Scroll className={'index-news-scroll'}
                        options={{
                            direction:'y'
                        }}>
                    <ul >
                        {
                            listArr.map((val, index) => {
                                return (
                                    <li key={index}>
                                        <span>限时抢</span>
                                        <span>{val}</span>
                                        <span>></span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </Scroll>
            </div>
        )
    }
}

export default IndexContentNews
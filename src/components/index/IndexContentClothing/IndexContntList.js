import React from 'react'

const IndexContentList = ()=>{

    const listArr = [{
        img:'http://img61.ddimg.cn/upload_img/00727/123/duanxiutx-1557382094.jpg',
        text:'短袖T袖'
    },{
        img:'http://img62.ddimg.cn/upload_img/00727/123/duanxiu-1557382703.jpg',
        text:'短袖衬衫'
    },{
        img:'http://img63.ddimg.cn/upload_img/00727/123/poloshan-1557384138.jpg',
        text:'POLO衫'
    },{
        img:'http://img62.ddimg.cn/upload_img/00727/123/duanku-1557379519.jpg',
        text:'短裤'
    },{
        img:'http://img62.ddimg.cn/upload_img/00727/123/xiuxianku-1557382899.jpg',
        text:'休闲裤'
    },{
        img:'http://img61.ddimg.cn/upload_img/00727/123/niuzaiku-1557383128.jpg',
        text:'牛仔裤'
    },{
        img:'http://img61.ddimg.cn/upload_img/00727/123/weiyi-1557383822.jpg',
        text:'卫衣'
    },{
        img:'http://img63.ddimg.cn/upload_img/00727/123/changchen-1558602435.jpg',
        text:'长袖衬衫'
    },{
        img:'http://img61.ddimg.cn/upload_img/00727/123/xhangxiutxu-1557383678.jpg',
        text:'长袖T袖'
    },{
        img:'http://img61.ddimg.cn/upload_img/00727/123/jiake-1557384465.jpg',
        text:'夹克'
    }]

    return (
        <div className='index-list'>
            <ul>
                {
                    listArr.map((val,index)=>{
                        return (
                            <li className={'index-list'+index} key={index}>
                                <img src={val.img} alt='img'/>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default IndexContentList
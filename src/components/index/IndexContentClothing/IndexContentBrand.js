import React from 'react'

const IndexContentBrand = () => {
    function listArr(){
        const listArr = []
        for(let i = 0;i< 10;i++){
            listArr.push('http://img56.ddimg.cn/136700061353556_y.jpg')
        }
        return listArr
    }

    return (
        <div className='index-brand'>
            <div className='title'>
                <img src='http://img62.ddimg.cn/upload_img/00738/123/jingxuan-1559303930.jpg' alt='brand' />
            </div>
            <ul>
                {
                    listArr().map((val,index)=>{
                        return (
                            <li key={index}>
                                <img src={val} alt='banner' />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default IndexContentBrand
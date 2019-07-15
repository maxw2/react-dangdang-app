import IndexContentIndex from './IndexContentIndex/IndexContentIndex'
import IndexContentClothing from './IndexContentClothing/IndexContentClothing'


const navList = [{
    title: '首页',
    className: 'index action',
    type: 0,
    component: IndexContentIndex
}, {
    title: '服装',
    className: 'clothing',
    type: 1,
    component: IndexContentClothing
}, {
    title: '图书',
    className: 'book',
    type: 2,
    component: IndexContentIndex
}, {
    title: '童书',
    className: 'childbook',
    type: 3,
    component: IndexContentClothing
}, {
    title: '电子书',
    className: 'txt',
    type: 4,
    component: IndexContentIndex
}, {
    title: '超市',
    className: 'Supermarket',
    type: 5,
    component: IndexContentClothing
}, {
    title: '儿童街',
    className: 'ChildrenStreet',
    type: 6,
    component: IndexContentIndex
}, {
    title: '文具',
    className: 'Stationery',
    type: 7,
    component: IndexContentClothing
}, {
    title: '优品',
    className: 'Superiorproducts',
    type: 8,
    component: IndexContentIndex
}, {
    title: '小说',
    className: 'Novel',
    type: 9,
    component: IndexContentClothing
}, {
    title: '绘本',
    className: 'Picturebook',
    type: 10,
    component: IndexContentIndex
}, {
    title: '艺术品拍卖',
    className: 'ArtAuction',
    type: 11,
    component: IndexContentClothing
}, {
    title: '绘本',
    className: 'Picturebook',
    type: 12,
    component: IndexContentIndex
}]


export default navList
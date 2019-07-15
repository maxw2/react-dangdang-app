import Book from './SortMenuContentBook'
import Stationery from './SortMenuContentStationery'

const listArr = [{
    className: 'sort-menu-nav-book sort-menu-nav nav-action',
    text: "图书",
    data_dd: 'book',
    data_com: 0,
    component: Book
}, {
    className: 'sort-menu-nav-stationery sort-menu-nav',
    text: "创意文具",
    data_dd: 'stationery',
    data_com: 1,
    component: Stationery
}, {
    className: 'sort-menu-nav-shoes sort-menu-nav',
    text: '男女鞋',
    data_dd: 'shoes',
    data_com: 2,
    component: Book,
}, {
    className: 'sort-menu-nav-computer sort-menu-nav',
    text: '电脑数码',
    data_dd: 'computer',
    data_com: 3,
    component: Stationery,
}, {
    className: 'sort-menu-nav-equipment sort-menu-nav',
    text: '家用电器',
    data_dd: 'equipment',
    data_com: 4,
    component: Book,
}, {
    className: 'sort-menu-nav-literature sort-menu-nav',
    text: '网络文学',
    data_dd: 'literature',
    data_com: 5,
    component: Stationery,
}, {
    className: 'sort-menu-nav-food sort-menu-nav',
    text: '食品生鲜',
    data_dd: 'food',
    data_com: 6,
    component: Book,
}, {
    className: 'sort-menu-nav-sports sort-menu-nav',
    text: '运动户外',
    data_dd: 'sports',
    data_com: 7,
    component: Stationery,
}, {
    className: 'sort-menu-nav-furniture sort-menu-nav',
    text: '家具',
    data_dd: 'furniture',
    data_com: 8,
    component: Book,
}, {
    className: 'sort-menu-nav-glasses sort-menu-nav',
    text: '手表眼镜',
    data_dd: 'glasses',
    data_com: 9,
    component: Stationery,
}, {
    className: 'sort-menu-nav-book sort-menu-nav',
    text: "图书",
    data_dd: 'book',
    data_com: 10,
    component: Book
}, {
    className: 'sort-menu-nav-stationery sort-menu-nav',
    text: "创意文具",
    data_dd: 'stationery',
    data_com: 11,
    component: Stationery
}, {
    className: 'sort-menu-nav-shoes sort-menu-nav',
    text: '男女鞋',
    data_dd: 'shoes',
    data_com: 12,
    component: Book,
}, {
    className: 'sort-menu-nav-computer sort-menu-nav',
    text: '电脑数码',
    data_dd: 'computer',
    data_com: 13,
    component: Stationery,
}, {
    className: 'sort-menu-nav-equipment sort-menu-nav',
    text: '家用电器',
    data_dd: 'equipment',
    data_com: 14,
    component: Book,
}, {
    className: 'sort-menu-nav-literature sort-menu-nav',
    text: '网络文学',
    data_dd: 'literature',
    data_com: 15,
    component: Stationery,
}, {
    className: 'sort-menu-nav-food sort-menu-nav',
    text: '食品生鲜',
    data_dd: 'food',
    data_com: 16,
    component: Book,
}, {
    className: 'sort-menu-nav-sports sort-menu-nav',
    text: '运动户外',
    data_dd: 'sports',
    data_com: 17,
    component: Stationery,
}, {
    className: 'sort-menu-nav-furniture sort-menu-nav',
    text: '家具',
    data_dd: 'furniture',
    data_com: 18,
    component: Book,
}, {
    className: 'sort-menu-nav-glasses sort-menu-nav',
    text: '手表眼镜',
    data_dd: 'glasses',
    data_com: 19,
    component: Stationery,
}, {
    className: 'sort-menu-nav-book sort-menu-nav',
    text: "图书",
    data_dd: 'book',
    data_com: 20,
    component: Book
}, {
    className: 'sort-menu-nav-stationery sort-menu-nav',
    text: "创意文具",
    data_dd: 'stationery',
    data_com: 21,
    component: Stationery
}, {
    className: 'sort-menu-nav-shoes sort-menu-nav',
    text: '男女鞋',
    data_dd: 'shoes',
    data_com: 22,
    component: Book,
}, {
    className: 'sort-menu-nav-computer sort-menu-nav',
    text: '电脑数码',
    data_dd: 'computer',
    data_com: 23,
    component: Stationery,
}, {
    className: 'sort-menu-nav-equipment sort-menu-nav',
    text: '家用电器',
    data_dd: 'equipment',
    data_com: 24,
    component: Book,
}, {
    className: 'sort-menu-nav-literature sort-menu-nav',
    text: '网络文学',
    data_dd: 'literature',
    data_com: 25,
    component: Stationery,
}, {
    className: 'sort-menu-nav-food sort-menu-nav',
    text: '食品生鲜',
    data_dd: 'food',
    data_com: 26,
    component: Book,
}, {
    className: 'sort-menu-nav-sports sort-menu-nav',
    text: '运动户外',
    data_dd: 'sports',
    data_com: 27,
    component: Stationery,
}, {
    className: 'sort-menu-nav-furniture sort-menu-nav',
    text: '家具',
    data_dd: 'furniture',
    data_com: 28,
    component: Book,
}, {
    className: 'sort-menu-nav-glasses sort-menu-nav',
    text: '手表眼镜',
    data_dd: 'glasses',
    data_com: 29,
    component: Stationery,
}, {
    className: 'sort-menu-nav-book sort-menu-nav',
    text: "图书",
    data_dd: 'book',
    data_com: 30,
    component: Book
}, {
    className: 'sort-menu-nav-stationery sort-menu-nav',
    text: "创意文具",
    data_dd: 'stationery',
    data_com: 31,
    component: Stationery
}, {
    className: 'sort-menu-nav-shoes sort-menu-nav',
    text: '男女鞋',
    data_dd: 'shoes',
    data_com: 32,
    component: Book,
}, {
    className: 'sort-menu-nav-computer sort-menu-nav',
    text: '电脑数码',
    data_dd: 'computer',
    data_com: 33,
    component: Stationery,
}, {
    className: 'sort-menu-nav-equipment sort-menu-nav',
    text: '家用电器',
    data_dd: 'equipment',
    data_com: 34,
    component: Book,
}, {
    className: 'sort-menu-nav-literature sort-menu-nav',
    text: '网络文学',
    data_dd: 'literature',
    data_com: 35,
    component: Stationery,
}, {
    className: 'sort-menu-nav-food sort-menu-nav',
    text: '食品生鲜',
    data_dd: 'food',
    data_com: 36,
    component: Book,
}, {
    className: 'sort-menu-nav-sports sort-menu-nav',
    text: '运动户外',
    data_dd: 'sports',
    data_com: 37,
    component: Stationery,
}, {
    className: 'sort-menu-nav-furniture sort-menu-nav',
    text: '家具',
    data_dd: 'furniture',
    data_com: 38,
    component: Book,
}, {
    className: 'sort-menu-nav-glasses sort-menu-nav',
    text: '手表眼镜',
    data_dd: 'glasses',
    data_com: 39,
    component: Stationery,
}]

export default listArr
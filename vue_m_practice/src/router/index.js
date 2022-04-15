import Vue from 'vue'
import Router from 'vue-router'

// 导航栏路由配置
import Home from '@/components/tabbar/Home.vue'
import Member from '@/components/tabbar/Member.vue'
import ShoppingCart from '@/components/tabbar/ShoppingCart.vue'
import Search from '@/components/tabbar/Search.vue'
// 新闻资讯路由配置
import NewsList from '@/components/news/NewsList.vue'
import NewsInfo from '@/components/news/NewsInfo.vue'
// 图片分享路由配置
import PhotoList from '@/components/photos/PhotoList.vue'
import PhotoInfo from '@/components/photos/PhotoInfo.vue'
// 商品购买路由配置
import GoodsList from '@/components/goods/GoodsList.vue'
import GoodsInfo from '@/components/goods/GoodsInfo.vue'
import GoodsDescription from '@/components/goods/GoodsDescription.vue'
import GoodsComment from '@/components/goods/GoodsComment.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/member',
      name: 'Member',
      component: Member
    },
    {
      path: '/shoppingcart',
      name: 'ShoppingCart',
      component: ShoppingCart
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/home/newsList',
      name: 'NewsList',
      component: NewsList
    },
    {
      path: '/home/newsInfo/:id',
      name: 'NewsInfo',
      component: NewsInfo
    },
    {
      path: '/home/photoList',
      name: 'PhotoList',
      component: PhotoList
    },
    {
      path: '/home/photoInfo/:id',
      name: 'PhotoInfo',
      component: PhotoInfo
    },
    {
      path: '/home/goodsList',
      name: 'GoodsList',
      component: GoodsList
    },
    {
      path: '/home/goodsInfo/:id',
      name: 'GoodsInfo',
      component: GoodsInfo
    },
    {
      path: '/home/goodsDescription/:id',
      name: 'GoodsDescription',
      component: GoodsDescription
    },
    {
      path: '/home/goodsComment/:id',
      name: 'GoodsComment',
      component: GoodsComment
    },
  ],
  mode: 'history',
  linkActiveClass: 'mui-active',
  // // 设置进入页面时的滚轴位置
  // scrollBehavior(to, from, savedPosition) {
  //   // 始终滚动到顶部
  //   return { x: 0, y: 0 }
  // }
})

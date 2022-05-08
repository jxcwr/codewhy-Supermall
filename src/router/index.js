/*
 * @Author: jxc 1225100315@qq.com
 * @Date: 2022-04-25 21:58:42
 * @LastEditors: jxc 1225100315@qq.com
 * @LastEditTime: 2022-05-05 10:38:00
 * @FilePath: \mySuperMall-test\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home');
const Category = () => import('../views/category/Category');
const Cart = () => import('../views/cart/Cart');
const Profile = () => import('../views/profile/Profile');
const Detail = () => import('../views/detail/Detail');
const Video  =()=>import('../views/video')
// 1.安装插件
Vue.use(VueRouter)

// 2.创建router
const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/detail/:iid',
        component: Detail
    },
    {
        path:'/video',
        component:Video
    }
]
const router = new VueRouter({
    routes,
    mode: 'history'
})


//暴露router
export default router

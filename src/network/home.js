/*
 * @Author: your name
 * @Date: 2022-04-25 21:58:42
 * @LastEditTime: 2022-04-26 21:29:24
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \mySuperMall-test\src\network\home.js
 */
import {request} from "./request";
//引入mock虚拟数据
import mockRequests from "./mockAjax"

//首页轮播图的接口 地址是/home/multidata
// export const regHomeMultidata=()=>request({url:'/home/multidata',method:'get'})
//首页轮播图接口函数
export function getHomeMultidata() {
    return request({
        url: '/home/multidata'
    })
}
//模拟数据
// export function getHomeGoods() {
//     return mockRequests({url:'/goods'})s
// }

// 首页下拉列表接口函数(接口可能更改)
export function getHomeGoods(type,page) {
    return request({
        url:'/home/data',
        params:{
            type,page
        }
    })
}


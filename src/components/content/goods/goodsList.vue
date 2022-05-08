<!--
 * @Author: your name
 * @Date: 2022-04-25 21:58:42
 * @LastEditTime: 2022-05-04 16:28:06
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \mySuperMall-test\src\components\content\goods\goodsList.vue
-->
<template>
    <div class="goods">
        <goodsListItem :itemList="item" v-for="item in goods" :key="item.index" :goodsItem="item"></goodsListItem>
    </div>

</template>

<script>
    import goodsListItem from './goodsListItem'

    export default {
        name: "GoodsList",
        props: {
            goods: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        components: {
            goodsListItem
        }
    }
</script>

<style scoped>
    .goods {
        display: flex;
        flex-wrap: wrap;    /**让弹性盒元素在需要的时候拆开：
                                显示:flex ; 弹性换行：换行； */
                                
        justify-content: space-around;  /**在弹性盒对象的 <div> 元素中的各项周边留有空白 */

        padding: 2px;
    }

</style>

<!--
 * @Author: your name
 * @Date: 2022-04-26 14:51:20
 * @LastEditTime: 2022-04-26 15:20:45
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \mySuperMall-test\src\views\home\childComps\RecommendView.vue
-->
<template>
  <div class="recommend">
      <div class="recommend-item" v-for="item in recommends">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    name: "RecommendView",
    props: {
        recommends: {
            type:Array,
            default() {
                return []
            }
        }
    }

}
</script>

<style scoped>
.recommend {
    display: flex;
    width: 100%;
    text-align: center;
    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
}

.recommend-item {
    flex: 1;
}
.recommend-item img {
    width: 70px;
    height: 70px;
    margin-bottom: 10px;

}
</style>
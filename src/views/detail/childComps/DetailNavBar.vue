<!--
 * @Author: jxc 1225100315@qq.com
 * @Date: 2022-05-05 10:55:54
 * @LastEditors: jxc 1225100315@qq.com
 * @LastEditTime: 2022-05-05 19:54:22
 * @FilePath: \mySuperMall-test\src\views\detail\childComps\DetailNavBar.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="detailnavbar">
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>
      <div slot="center" class="tittle">
        <div
          class="tittle-item"
          v-for="(item, index) in tittles"
          :class="{ active: index === currentIndex }"
          @click="titleClick(index)"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";

export default {
  name: "DetailNavBar",
  components: {
    NavBar,
  },
  data() {
    return {
      tittles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
    },
    backClick() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.detailnavbar {
  height: 100vh;
}
.tittle {
  display: flex;
  font-size: 12px;
}
.tittle-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.back img {
  margin-top: 12px;
}
</style>
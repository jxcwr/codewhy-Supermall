<!--
 * @Author: your name
 * @Date: 2022-04-26 09:27:03
 * @LastEditTime: 2022-05-05 19:54:52
 * @LastEditors: jxc 1225100315@qq.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \mySuperMall-test\src\views\home\Home.vue
-->
<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物车</div></nav-bar>

    <tab-control
      :titles="['流行', '精选', '新款']"
      @TabClick="tabClick"
      ref="tabControl1"
      class="tab-control"
      v-show="isTabFixed"
    />

    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <!-- class样式中必须设置高度 -->
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad" />
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control
        :titles="['流行', '精选', '新款']"
        @TabClick="tabClick"
        ref="tabControl2"
      />

      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop" />
    <!--修饰.native修饰什么时候用？  
                                                                在我们需要监听一个组件的原生事件时，必须给对应的事件加上.native修饰符，才能进行监听-->
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "@/components/common/scroll/Scroll.vue";

import TabControl from "@/components/content/tabControl/TabControl.vue";
import GoodsList from "@/components/content/goods/goodsList.vue";
import BackTop from "@/components/content/backTop/BackTop.vue";

import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView.vue";
import FeatureView from "./childComps/FeatureView.vue";

import { getHomeMultidata, getHomeGoods } from "@/network/home.js";
import { debounce } from "@/common/utils";

export default {
  name: "Home",
  components: {
    NavBar,
    Scroll,
    TabControl,
    GoodsList,
    BackTop,
    HomeSwiper,
    RecommendView,
    FeatureView,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0,
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  created() {
    //1.请求多个数据
    this.getHomeMultidata();
    //2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    //created 3.监听item中图片加载完成
    const refresh = debounce(this.$refs.scroll.refresh, 50);
    this.$bus.$on("itemImageLoad", () => {
      //this.$refs.scroll.refresh();
      refresh();
    });
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 100);
    this.$refs.scroll.refresh();
    //console.log('lakai');
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY();
    //console.log(this.$refs.scroll.getScrollY);
    //console.log(this.$refs.scroll.getScrollY());
  },
  methods: {
    //防抖函数

    /*         debounce(func,delay) {
            let timer = null;
            return function(...args){
                if(timer) clearTimeout(timer)

                timer = setTimeout(() => {
                    func.apply(this,args)
                }, delay);
            }
        }, */

    /**
     * 事件监听的相关的方法
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },

    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 2000);
    },
    contentScroll(position) {
      //1.判断BackTop是否显示
      this.isShowBackTop = -position.y > 1000; //这里的处理牛逼

      //2.决定tabControl是否吸顶（position：fixed）
      this.isTabFixed = -position.y > this.tabOffsetTop;
    },
    loadMore() {
      //console.log('上啦加载更多');
      this.getHomeGoods(this.currentType);
    },
    swiperImageLoad() {
      //1.获取tabcontrol的offsetTop
      //所有组件都有一个属性$el：用于获取组件中的元素
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
    /**
     * 网络请求相关的方法
     */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp();
      });
    },
  },
};
</script>

<style scoped>
/**scoped限定css样式只在这个页面起效果，同名作用域问题 */
#home {
  /* padding-top:44px; */
  height: 100vh; /**vh 视口高度 */
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  /**在使用浏览器原生滚动时，为了让导航不跟随一起滚动 */
  /* position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9; *加入框架后，属性不起作用 */
}
/* .tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
    加入框架后，属性不起作用
} */
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.tab-control {
  position: relative;
  z-index: 9;
}
/** 两种解决办法中的第二种
.content {
    height: calc(100% - 93px);
    overflow: hidden;
    margin-top: 44px;
    
} 
*/
</style>
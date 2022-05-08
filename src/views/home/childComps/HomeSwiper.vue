<!--
 * @Author: your name
 * @Date: 2022-04-26 11:30:11
 * @LastEditTime: 2022-05-04 20:22:34
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \mySuperMall-test\src\views\home\childComps\HomeSwiper.vue
-->
<template>
  <div>
    <swiper>
        <swiper-item  v-for="item in banners" :key="item.title">
            <a :href="item.link">
                <img :src="item.image" alt="" @load="imageLoad">
            </a>
        </swiper-item>
    </swiper> 
  </div>
</template>

<script>
import {Swiper,SwiperItem} from "@/components/common/swiper"
//import {SwiperItem} from "@/components/common/swiper/SwiperItem"
export default {
    name:'HomeSwiper',
    props: {
        banners: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {
            isLoad: false,
        }
    },
    components: {
        Swiper,
        SwiperItem
    },
    methods: {
        imageLoad() {
            if (!this.isLoad) {
                this.$emit('swiperImageLoad')
                this.isLoad = true
            }
            
        }
    }

}
</script>

<style scoped>

</style>
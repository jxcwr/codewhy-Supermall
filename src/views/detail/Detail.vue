<!--
 * @Author: your name
 * @Date: 2022-04-26 09:54:38
 * @LastEditTime: 2022-05-05 11:44:53
 * @LastEditors: jxc 1225100315@qq.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \mySuperMall-test\src\views\detail\Detail.vue
-->
<template>
  <div>
    <detail-nav-bar/>
  </div>
</template>

<script>

import DetailNavBar from './childComps/DetailNavBar.vue'

import {getDetail} from '@/network/detail'

export default {
  name: "Detail",
  components: { 
    DetailNavBar
     },
  data() {
    return {
      iid: null
    }
  },
  created (){
    this.iid = this.$route.params.iid

    getDetail(this.iid).then(res =>{
      console.log(res);
    })
  },
}
</script>

<style scoped>

</style>
<!--
 * @Author: your name
 * @Date: 2022-04-25 21:58:42
 * @LastEditTime: 2022-05-04 09:21:45
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \mySuperMall-test\src\components\content\tabControl\TabControl.vue
-->
<template>
  <div class="tab-control">
<!--都是文字，没必要设置插槽!!-->
    <div  class="tab-control-item" v-for="(item,index) in titles" 
            :class="{active: index === currentIndex}" @click="itemClick(index)">
        <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
    name:"TabControl",
    props: {
        titles: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {
            currentIndex: 0
        }
    },
    methods: {
        itemClick(index) {
            this.currentIndex = index;
            this.$emit("TabClick",index);
        }
    }

}
</script>

<style scoped>
.tab-control {
    display: flex;
    text-align: center;
    height: 40px;
    width: 100%;
    line-height: 40px;
    font-size: 15px;
    background-color: #fff;

}
.tab-control-item {
    flex: 1;
}
.tab-control-item span {
    padding: 5px;
}
.active {
    color: var(--color-high-text);
}
.active span {
    
    border-bottom: 3px solid var(--color-tint);

}

</style>
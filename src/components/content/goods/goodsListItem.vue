<!--
 * @Author: your name
 * @Date: 2022-04-25 21:58:42
 * @LastEditTime: 2022-05-05 10:37:25
 * @LastEditors: jxc 1225100315@qq.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \mySuperMall-test\src\components\content\goods\goodsListItem.vue
-->
<template>
    <div class="goods-item" @click="itemClick">
        <!-- 图片-->
        <img :src="goodsItem.show.img" alt="" @load="imageLoad">
        <!--img v-lazy="showImage" alt="" @load="imageLoad" @click="itemClick"-->
        <div class="goods-info">
            <!--   商品标题-->
            <p>{{goodsItem.title}}</p>
            <!--   商品价格-->
            <span class="price">{{goodsItem.price}}</span>
            <!--   商品收藏数-->
            <span class="collect">{{goodsItem.cfav}}</span>
        </div>

    </div>

</template>

<script>
    export default {
        name: "GoodsListItem",
        props: {
            goodsItem: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        computed:{
            showImage(){
                //不同的地方调用名称与结构不同
                return this.itemList.image||this.itemList.show.img;
            }
        },
        methods:{
            imageLoad(){
                // console.log('goodsitem');
                this.$bus.$emit('itemImageLoad')
            },
            itemClick(){
                //跳转到详情页
                //console.log('跳转到详情页');
                // this.$router.push('/detail/')
              this.$router.push('/detail/'+this.goodsItem.iid)
            }
        }
    }
</script>

<style scoped>
.goods-item {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}
.goods-item img {
  width: 100%;
  border-radius: 10px;
  height: 100%;
}
.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods-info .collect {
  position: relative;
}
.goods-info .collect::before {
  content: '';
  position: absolute;
  left: -15px;
  top: 0;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
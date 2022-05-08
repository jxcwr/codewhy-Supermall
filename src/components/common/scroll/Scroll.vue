<!--
 * @Author: your name
 * @Date: 2022-04-25 21:58:42
 * @LastEditTime: 2022-05-05 10:20:36
 * @LastEditors: jxc 1225100315@qq.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \mySuperMall-test\src\components\common\scroll\Scroll.vue
-->
<template>
    <!-- better-scroll 只处理容器（wrapper）的第一个子元素（content）的滚动，其它的元素都会被忽略。-->
    <div class="wrapper" ref="wrapper">      <!--ref 拿到确定的组件，ref如果是绑定在组件中，那通过this.$refs.refname获取到的是一个组件对象
                                                                    ref如果绑定在普通的元素中，那么通过this.$refs.refname获取到的是一个元素对象-->
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'

    export default {
        name: "Scroll",
        props: {
            probeType: {
                type: Number,
                default: 0
            },
            pullUpLoad: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                scroll: null,
                message: '哈哈哈'
            }
        },
        mounted() {

            // 1.创建BScroll对象
            //BScroll有bug:如果是从PC端打开时，会被识别不是移动，而不会滑动
            this.scroll = new BScroll(this.$refs.wrapper, {
                click: true,
                probeType: this.probeType,
                pullUpLoad: this.pullUpLoad,
                //用户控制Better-scroll需要刷新才能滚动的bug
                disableTouch: false,
                disableMouse: false
            });

            //打印scroll---发现问题---scroll的高度有时会刷不出来(scrollerHeight)
            //console.log(this.scroll);
            this.scroll.refresh()

            // 2.监听滚动的位置
            this.scroll.on('scroll', (position) => {
                //console.log(position);

                this.$emit('scroll', position)
            });

            // 3.监听上拉事件
            if (this.pullUpLoad) {
                this.scroll.on('pullingUp', () => {
                    this.$emit('pullingUp')
                    //console.log("上拉加载更多")
                })
            }
        },
        methods: {
            scrollTo(x, y, time = 2000) {
                this.scroll.scrollTo(x, y, time)
            },
            finishPullUp() {
                this.scroll.finishPullUp()
            },
            refresh() {
                this.scroll && this.scroll.refresh() 
            },
            getScrollY() {
                return this.scroll ? this.scroll.y : 0;
            }
        }
    }
</script>

<style scoped>

</style>

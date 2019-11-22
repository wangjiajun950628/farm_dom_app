<template>
    <transition name="el-zoom-in-top">
        <div class="co-backtotop" v-show="toTopShow" :style="{bottom: bottom + 'rem'}">
            <el-button type="primary" icon="el-icon-caret-top" @click="topClick" circle></el-button>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'coBacktop',
        props: {
            bottom: {
                type: Number,
                default: 5
            }
        },
        data() {
            return {
                toTopShow: false,
                autofocus: true,
                value: .5
            }
        },
        mounted () {
            const that = this
            // 滚动条监听事件
            that.scrollToTop()
        },
        methods: {
            topClick() {
                document.documentElement.scrollTop = document.body.scrollTop = 0;
            },
            scrollToTop() {
                const that = this
                window.addEventListener('scroll',function() {
                    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                    // 判断滚动条滚动的高度
                    if (scrollTop >= 100) {
                        that.toTopShow = true
                    } else {
                        that.toTopShow = false
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .co-backtotop{
        position: fixed;
        z-index: 3000;
        right: 10px;
        /*opacity: .5;*/
    }
</style>

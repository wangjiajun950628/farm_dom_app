<template>
    <div class="co-nav-bar-box">
        <van-nav-bar
                :fixed="true"
                :z-index="10000"
                @click-left="onClickLeft"
                style="background-color: #6ee2d7">
            <div class="co-nav-left" slot="left" v-show="navBarIsShow">
                <van-icon name="arrow-left" color="white"/>
                <span style="display: inline-block;line-height: 2rem">返回</span>
            </div>
            <div slot="title" style="color: white">{{getTitle}}</div>
        </van-nav-bar>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: 'navBar',
        data() {
            return {}
        },
        computed: {
            ...mapGetters({
                getFromNames: 'getFormName'
            }),
            getTitle () {
                return this.$route.meta.title
            },
            navBarIsShow () {
                if (this.$route.path === '/'){
                    return false
                } else {
                    return true
                }
            }
        },
        mounted () {
        },
        methods: {
            onClickLeft () {
                const that = this
                this.$router.go(-1)
            }
        }
    }
</script>

<style scoped>
    .co-nav-left {
        font-size: 1rem;
        color: white;
    }
</style>

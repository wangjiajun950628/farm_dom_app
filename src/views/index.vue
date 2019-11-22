<template>
    <div class="co-main">
        <!--标头导航-->
        <van-row type="flex" justify="center">
            <van-col class="co-box1" span="24">
                <nav-bar></nav-bar>
            </van-col>
        </van-row>
        <!--轮播图-->
        <van-row type="flex" justify="center">
            <van-col class="co-box1" span="24">
                <div class="co-swipe-box">
                    <van-swipe :autoplay="3000" indicator-color="#66c6f2">
                        <van-swipe-item v-for="(image, index) in images" :key="index">
                            <img class="co-swipe-image" v-lazy="image" />
                        </van-swipe-item>
                    </van-swipe>
                </div>
            </van-col>
        </van-row>
        <!--功能导航-->
        <div style="margin-top: 5px;">
            <van-row type="flex" justify="center">
                <van-col class="co-box1" span="24">
                    <van-grid :column-num="5" clickable>
                        <van-grid-item :to="basePage.url" :icon="basePage.imageUrl" :text="basePage.title"></van-grid-item>
                        <van-grid-item :to="farmingMGT.url" :icon="farmingMGT.imageUrl" :text="farmingMGT.title"></van-grid-item>
                        <van-grid-item :to="plantingPage.url" :icon="plantingPage.imageUrl" :text="plantingPage.title"></van-grid-item>
                        <van-grid-item :to="farmingPage.url" :icon="farmingPage.imageUrl" :text="farmingPage.title"></van-grid-item>
                        <van-grid-item :icon="videoMonitoring.imageUrl" :text="videoMonitoring.title" @click="getVideo"></van-grid-item>
                    </van-grid>
                </van-col>
            </van-row>
        </div>
        <!--农事日历-->
        <div style="margin-top: 5px;">
            <van-row type="flex" justify="center">
                <van-col class="co-box1" span="24">
                    <van-cell>
                        <div slot="default">
                            <span class="co-base-title">农事日历</span>
                        </div>
                    </van-cell>
                    <!--农事日历组件-->
                    <farming-calendar :data-list="calendarList"></farming-calendar>
                </van-col>
            </van-row>
        </div>
    </div>
</template>

<script>
    import NavBar from "../components/navBar/navBar"
    import jd  from '../assets/image/jd.png'
    import ns from '../assets/image/ns.png'
    import zz from '../assets/image/zz.png'
    import yz from '../assets/image/yz.png'
    import sp from '../assets/image/sp.png'
    import lb1 from '../assets/image/lb1.jpg'
    import lb2 from '../assets/image/lb2.jpg'
    import lb3 from '../assets/image/lb3.jpeg'
    import moment from 'moment'
    import FarmingCalendar from "../components/farmingModule/farmingCalendar";
    export default {
        name: 'index',
        components: {FarmingCalendar, NavBar},
        data() {
            return {
                isShow: false, // 是否显示图表
                active: 0, // tab选择中的值
                images: [
                    lb1,
                    lb2,
                    lb3
                ], //  轮播图数据
                basePage: {
                    imageUrl: jd,
                    title: '基地信息',
                    url: '/basePage'
                }, // 基地信息导航配置
                farmingMGT: {
                    imageUrl: ns,
                    title: '农事管理',
                    url: '/farmingMGT'
                }, // 农事管理导航配置
                plantingPage: {
                    imageUrl: zz,
                    title: '种植档案',
                    url: '/plantingPage'
                }, // 种植档案导航配置
                farmingPage: {
                    imageUrl: yz,
                    title: '养殖档案',
                    url: '/farmingPage'
                }, // 养殖档案导航配置
                videoMonitoring: {
                    imageUrl: sp,
                    title: '视频监控',
                    url: '/videoMonitoring'
                }, // 视频监控导航配置
                plotNumberData: [
                    {month: '1号地块', value: 2},
                    {month: '2号地块', value: 4},
                    {month: '3号地块', value: 7}
                ], // 地块数量图表数据
                plotAreaData: [
                    {month: '1', value: 2.5},
                    {month: '2', value: 4.5},
                    {month: '3', value: 7.9}
                ], // 地块面积图表数据
                expectNumberData: [
                    {month: '1', value: 12.5},
                    {month: '2', value: 14.5},
                    {month: '3', value: 17.9}
                ], // 预计产量图表数据
                farmingNumberDta: [
                    {month: '1', value: 22.5},
                    {month: '2', value: 24.5},
                    {month: '3', value: 2.9}
                ], // 养殖数量图表数据
                calendarList: ['2019-09-23','2019-09-22','2019-09-10'] // 农事日历数组(用于标识哪些时间段有农事)
            }
        },
        computed: {
        },
        mounted () {
            // 初始化
            this.$store.commit('setNavIsShow', true)
        },
        methods: {
            // 获取视频监控
            getVideo () {
                AndroidJs.getVideo()// 调用安卓提供的后台接口
                console.log('跳入视频监控页面')
            }
        },
        destroyed() {
            const that = this
            // 隐藏底部导航
            that.$store.commit('setNavIsShow', false)
        }
    }
</script>

<style scoped>
    .co-main {
        background-color: #f0f3f6;
    }
    .co-swipe-image {
        width: 100%;
        max-height: 30vh;
    }
    .co-nav-bar-box {
        position: relative;
        height: 46px;
    }
    .co-base-title {
        display: flex;
        flex-flow: row;
        line-height: 1rem;
        color: #369aff;
    }
    .co-base-title:before {
        content: '';
        display: block;
        background-color: #00ba66;
        height: 1rem;
        width: .2rem;
        margin-right: .5rem;
    }
    .is-selected {
        color: #1989FA;
    }
</style>

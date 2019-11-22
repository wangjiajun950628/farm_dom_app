<template>
    <div class="co-main">
        <!--标头导航-->
        <van-row type="flex" justify="center">
            <van-col class="co-box1" span="24">
                <nav-bar></nav-bar>
            </van-col>
        </van-row>
        <!--种植区监控列表-->
        <div>
            <van-row type="flex" justify="center">
                <van-col class="co-box2" span="24">
                    <van-cell>
                        <div slot="default">
                            <span class="co-base-title">种植区监控</span>
                        </div>
                    </van-cell>
                    <!--视频展示-->
                    <van-grid :column-num="2">
                        <van-grid-item
                                v-for="item in 6"
                                :key="item"
                                icon="photo-o"
                                text="文字"
                                @click="openVideo('url')">
                        </van-grid-item>
                    </van-grid>
                </van-col>
            </van-row>
        </div>
        <!--养殖区监控列表-->
        <div style="margin-top: 5px">
            <van-row type="flex" justify="center">
                <van-col class="co-box2" span="24">
                    <van-cell>
                        <div slot="default">
                            <span class="co-base-title">养殖区监控</span>
                        </div>
                    </van-cell>
                    <!--视频展示-->
                    <van-grid :column-num="2"  :clickable="true">
                        <van-grid-item
                                v-for="value in 6"
                                :key="value"
                                icon="photo-o"
                                text="文字">
                        </van-grid-item>
                    </van-grid>
                </van-col>
            </van-row>
        </div>
        <!--返回顶部-->
        <co-backtop></co-backtop>
    </div>
</template>

<script>
       import NavBar from "../../components/navBar/navBar";
       import CoBacktop from "../../components/backtop/coBacktop";
       export default {
        name: 'videoMonitoring',
           components: { CoBacktop, NavBar },
           data() {
            return {
                plantingVideoList: [], // 种植视频列表
                farmingVideoList: [] // 养殖视频列表
            }
        },
        mounted () {
        },
        methods: {
            openVideo (url) {
            }
        }
    }
</script>

<style scoped>
    .co-main{
        background-color: #f0f3f6;
    }
    .co-box1{
        margin-top: 46px;
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
    .co-video-box {
        width: 100%;
        height: 100%;
    }
    .co-video-box > video {
        width: 100%;
        height: 100%;
    }
</style>

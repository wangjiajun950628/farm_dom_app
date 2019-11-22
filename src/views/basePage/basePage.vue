<template>
    <div class="co-main">
        <!--标头导航-->
        <van-row type="flex" justify="center">
            <van-col class="co-box1" span="24">
                <nav-bar></nav-bar>
            </van-col>
        </van-row>
        <!--基本信息-->
        <div style="margin-top: 5px">
            <van-row type="flex" justify="center">
                <van-col class="co-box2" span="24">
                    <van-cell>
                        <div slot="default">
                            <span class="co-base-title">基本信息</span>
                        </div>
                    </van-cell>
                    <!--基本信息-->
                    <div class="co-data-info-box">
                        <ul class="co-data-box">
                            <li><span style="width:100%;color: #1989fa;font-size: 1.2em;text-align: right">柘溪山生态农庄</span></li>
                            <li><span style="color: #666">联系人</span><span class="co-data-value">张三</span></li>
                            <li><span style="color: #666">电话</span><span class="co-data-value">15012341234</span></li>
                            <li><span style="color: #666">邮箱</span><span class="co-data-value">111@qq.com</span></li>
                        </ul>
                    </div>
                </van-col>
            </van-row>
        </div>
        <!--基地地图-->
        <div style="margin-top: 5px">
            <van-row type="flex" justify="center">
                <van-col class="co-box2" span="24">
                    <van-cell>
                        <div slot="default">
                            <span class="co-base-title">基本地图</span>
                        </div>
                    </van-cell>
                    <!--地图-->
                    <my-map :lng="lng" :lat="lat"></my-map>
                    <!--基本信息-->
                    <div class="co-data-info-box">
                        <ul class="co-data-box">
                            <li><span style="color: #666">地址</span><span class="co-data-value" style="color: #369aff">金华</span></li>
                        </ul>
                    </div>
                    <div slot="default" class="co-data-info-box2">
                        <span>
                            柘溪山生态农业项目要充分体现高标准定位、高理念规划、高科技展示、高品位建设，把项目建设成为集办公度假、有机特色农产品的种养、生态能源旅游展示、创意产业承接于一体的生态循环经济的示范区。同时，他要求柘溪山项目的建设处理好服务新居民与协调原住民的关系，处理好对内服务和对外展示的关系，处理好满足基本功能和体现综合效益的关系。
                        </span>
                    </div>
                </van-col>
            </van-row>
        </div>
        <!--农场介绍-->
        <div style="margin-top: 5px">
            <van-row type="flex" justify="center">
                <van-col class="co-box2" span="24">
                    <van-cell>
                        <div slot="default">
                            <span class="co-base-title">农场介绍</span>
                        </div>
                    </van-cell>
                    <!--农场介绍-->
                    <div slot="default" class="co-data-info-box2">
                        <span>
                            柘溪山生态农业项目要充分体现高标准定位、高理念规划、高科技展示、高品位建设，把项目建设成为集办公度假、有机特色农产品的种养、生态能源旅游展示、创意产业承接于一体的生态循环经济的示范区。同时，他要求柘溪山项目的建设处理好服务新居民与协调原住民的关系，处理好对内服务和对外展示的关系，处理好满足基本功能和体现综合效益的关系。
                        </span>
                    </div>
                </van-col>
            </van-row>
        </div>
        <!--采摘信息-->
        <div style="margin-top: 5px">
            <van-row type="flex" justify="center">
                <van-col class="co-box2" span="24">
                    <van-cell>
                        <div slot="default">
                            <span class="co-base-title">采摘信息</span>
                        </div>
                    </van-cell>
                    <!--采摘信息-->
                    <div slot="default" class="co-data-info-box2">
                        <span>
                           柘溪山生态农业项目要充分体现高标准定位、高理念规划、高科技展示、高品位建设，把项目建设成为集办公度假、有机特色农产品的种养、生态能源旅游展示、创意产业承接于一体的生态循环经济的示范区。同时，他要求柘溪山项目的建设处理好服务新居民与协调原住民的关系，处理好对内服务和对外展示的关系，处理好满足基本功能和体现综合效益的关系。
                        </span>
                    </div>
                </van-col>
            </van-row>
        </div>
    </div>
</template>

<script>
    import NavBar from "../../components/navBar/navBar";
    import MyMap from "../../components/mapModule/myMap";
    export default {
        name: 'basePage',
        components: {MyMap, NavBar},
        data() {
            return {
                lng: '119.62182',
                lat: '29.07334'
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
    .co-data-value {
        text-align: right;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        color: #999;
    }
    .co-data-info-box, .co-data-info-box2 {
        padding: 1rem;
        background-color: white;
    }
    .co-data-info-box2 {
        text-align: justify;
        text-indent: 2em;
    }
    .co-data-box > li {
        display: flex;
        justify-content: space-between;
        line-height: 1.8rem;
    }
</style>

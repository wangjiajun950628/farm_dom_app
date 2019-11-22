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
                        <span :style="{'background-image': 'url('+ image1 +')'}"></span>
                        <ul class="co-data-box">
                            <li><span style="color: #666">种植名称</span><span class="co-data-value">水稻</span></li>
                            <li><span style="color: #666">种植人类型</span><span class="co-data-value">农户</span></li>
                            <li><span style="color: #666">种植面积</span><span class="co-data-value">1亩/2.626425亩</span></li>
                            <li><span style="color: #666">定植时间</span><span class="co-data-value">2019-09-20</span></li>
                            <li><span style="color: #666">采收时间</span><span class="co-data-value">2019-09-30</span></li>
                            <li><span style="color: #666">种植结束</span><span class="co-data-value">2019-09-30</span></li>
                        </ul>
                    </div>
                </van-col>
            </van-row>
        </div>
        <!--收获信息-->
        <div style="margin-top: 5px">
            <van-row type="flex" justify="center">
                <van-col class="co-box2" span="24">
                    <van-cell>
                        <div slot="default">
                            <span class="co-base-title">收获信息</span>
                        </div>
                    </van-cell>
                    <!--收获信息-->
                    <div style="background-color: white; padding: 1rem;text-align: left">
                        <el-timeline :reverse="reverse" >
                            <el-timeline-item
                                    v-for="(activity, index) in activities"
                                    :key="index"
                                    :timestamp="activity.month"
                                    color="#008000"
                                    placement="top">
                                <ul class="co-other-data">
                                    <li><span>预估产量</span><span class="co-other-value">{{activity.production}}</span></li>
                                    <li><span>已收釆量</span><span class="co-other-value">{{activity.collectNumber}}</span></li>
                                </ul>
                            </el-timeline-item>
                        </el-timeline>
                    </div>
                </van-col>
            </van-row>
        </div>
    </div>
</template>

<script>
    import NavBar from "../../../components/navBar/navBar";
    import mx from '../../../assets/image/xiaomai.jpg'
    export default {
        name: 'plantingDetailed',
        components: {NavBar},
        data() {
            return {
                image1: mx, // 暂时用来显示图片信息的
                reverse: false,
                activities: [{
                    month: '一月',
                    production: '--',
                    collectNumber: '--'
                }, {
                    month: '二月',
                    production: '--',
                    collectNumber: '--',
                }, {
                    month: '三月',
                    production: '--',
                    collectNumber: '--'
                },{
                    month: '四月',
                    production: '--',
                    collectNumber: '--'
                },{
                    month: '五月',
                    production: '--',
                    collectNumber: '--'
                },{
                    month: '六月',
                    production: '--',
                    collectNumber: '--'
                },{
                    month: '七月',
                    production: '--',
                    collectNumber: '--'
                },{
                    month: '八月',
                    production: '--',
                    collectNumber: '--'
                },{
                    month: '九月',
                    production: '--',
                    collectNumber: '--'
                },{
                    month: '十月',
                    production: '--',
                    collectNumber: '--'
                },{
                    month: '十一月',
                    production: '--',
                    collectNumber: '--'
                },{
                    month: '十二月',
                    production: '--',
                    collectNumber: '--'
                }] // 种植物的收获数据
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
    .co-base-title {
        display: flex;
        flex-flow: row;
        line-height: 1.2rem;
        color: #369aff;
        font-size: 1rem;
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
    .co-data-info-box > span {
        display: block;
        width: 5rem;
        height: 5rem;
        background-size: 100% 100%;
        border-radius: 50%;
        border: 4px solid #CCDF93;
    }
    .co-data-info-box > span {
        margin: auto;
        margin-bottom: 1rem;
    }
    .co-other-data{
        width: 100%;
        height: 100%;
    }
    .co-other-data > li {
        display: flex;
        justify-content: space-between;
    }
    .co-other-value {
        color: #999;
    }
</style>

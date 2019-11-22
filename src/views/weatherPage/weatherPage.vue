<template>
    <div class="co-main">
        <!--标头导航-->
        <van-row type="flex" justify="center">
            <van-col class="co-box1" span="24">
                <nav-bar></nav-bar>
            </van-col>
        </van-row>
        <!--今天天气-->
        <div style="margin-top: 5px">
            <van-row type="flex" justify="center">
                <van-col class="co-box2" span="24">
                    <van-cell>
                        <div slot="default">
                            <span class="co-base-title">今天天气</span>
                        </div>
                    </van-cell>
                    <van-cell is-link arrow-direction="down" title-class="co-city-name" value-class="co-city-value" @click="showPicker = true">
                        <span slot="title" class="co-city-name">城市</span>
                        <span slot="default" class="co-city-value">{{value}}</span>
                    </van-cell>
                    <!--城市选择弹框-->
                    <van-popup v-model="showPicker" position="bottom">
                        <van-picker
                                show-toolbar
                                :columns="columns"
                                @cancel="showPicker = false"
                                @confirm="onConfirm">
                        </van-picker>
                    </van-popup>
                    <!--天气信息-->
                    <div class="co-data-info-box1">
                        <div class="co-weather-box1">
                            <img src="../../assets/image/xy.png" />
                            <span>14°</span>
                        </div>
                        <ul class="co-data-box">
                            <li><span style="color: white">天气</span><span class="co-data-value">中雨</span></li>
                            <li><span style="color: white">最高温度</span><span class="co-data-value">14°</span></li>
                            <li><span style="color: white">最低温度</span><span class="co-data-value">10°</span></li>
                            <li><span style="color: white">风力风向</span><span class="co-data-value">北风三级</span></li>
                            <li><span style="color: white">降水量</span><span class="co-data-value">0mm</span></li>
                            <li><span style="color: white">日出时间</span><span class="co-data-value">06:39</span></li>
                            <li><span style="color: white">日落时间</span><span class="co-data-value">16:58</span></li>
                            <li>
                                <div class="co-progress-box">
                                    <span style="color: white">相对湿度</span>
                                    <van-progress :percentage="50" />
                                </div>
                            </li>
                        </ul>
                    </div>
                </van-col>
            </van-row>
        </div>
        <!--明后天天气-->
        <div style="margin-top: 5px">
            <van-row type="flex" justify="center">
                <van-col class="co-box2" span="24">
                    <van-cell>
                        <div slot="default">
                            <span class="co-base-title">明后天天气</span>
                        </div>
                    </van-cell>
                    <!--天气信息-->
                    <van-cell v-for="item in 2" :key="item" :center="true">
                        <div  slot="default">
                            <ul class="co-data-box">
                                <li><span class="co-weather-title">周三</span></li>
                                <li><span>日期</span><span class="co-data-value2">12月05日</span></li>
                                <li><span>天气</span><span class="co-data-value2">小雨</span></li>
                                <li><span>温度</span><span class="co-data-value2">20 ～ 29°C</span></li>
                                <li><span>风向</span><span class="co-data-value2">东北风3-4级</span></li>
                                <li><span>空气质量</span><span class="co-data-value2">59 良</span></li>
                            </ul>
                        </div>
                    </van-cell>
                </van-col>
            </van-row>
        </div>
        <!--历史天气-->
        <div style="margin-top: 5px">
            <van-row type="flex" justify="center">
                <van-col class="co-box2" span="24">
                    <van-cell>
                        <div slot="default">
                            <span class="co-base-title">历史天气</span>
                        </div>
                    </van-cell>
                    <!--采摘信息-->
                    <div slot="default" class="co-data-info-box2">
                    </div>
                </van-col>
            </van-row>
        </div>
    </div>
</template>

<script>
    import NavBar from "../../components/navBar/navBar";
    import { provinceAndCityData, regionData, provinceAndCityDataPlus, regionDataPlus, CodeToText, TextToCode } from 'element-china-area-data'
    export default {
        name: 'weatherPage',
        components: {NavBar},
        data() {
            return {
                value: '浙江', // 城市值
                showPicker: false, // 是否显示城市选择弹框
                columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'], // 城市数组
                citys: {}, // 获取到的城市级联数据
                toDayList: [], // 今天天气数据
                futureTwoDaysList: [], // 未来两天天气数据
                historyList: [] // 历史天气数据
            }
        },
        mounted () {
            const map = new Map()
            let cs = []
            // 遍历获取到的城市数据
            for (let i = 0; i < provinceAndCityData.length; i ++) {
                cs = []
                if (provinceAndCityData[i].children){
                    for (let j = 0; j < provinceAndCityData[i].children.length; j++) {
                        cs.push(provinceAndCityData[i].children[j].label)
                    }
                }
                map.set(provinceAndCityData[i].label, cs )
            }
        },
        methods: {
            // 城市值选择
            onConfirm(value) {
                this.value = value;
                this.showPicker = false;
                this.getWeatherInfo(value)
            },
            // 请求今天天气信息
            getWeatherInfo (value) {
                console.log(value,'调用了天气信息')
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
    .co-data-value, .co-data-value2 {
        text-align: right;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    .co-data-value {
        color: white;
    }
    .co-data-value2 {
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
    .co-city-name {
        text-align: left;
        font-size: 1rem;
    }
    .co-city-value {
        font-size: 1.2rem;
        color: #369aff;
    }
    .co-data-info-box1 {
        padding: 1rem;
        background-image: url("../../assets/image/tq_bj.jpg");
        background-size: 100% 100%;
    }
    .co-weather-box1 {
        display: flex;
        justify-content: space-between;
    }
    .co-weather-box1 > span {
        font-size: 2rem;
        color: white;
        line-height: 6rem;
    }
    .co-progress-box {
        width: 100%;
        line-height: 3rem;
        text-align: left;
        color: #323233;
    }
    .co-weather-title {
        width: 100%;
        text-align: right;
        color: #1989fa;font-size: 1.2em;padding-bottom: .5rem
    }
</style>

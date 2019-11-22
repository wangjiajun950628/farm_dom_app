<template>
    <div class="co-main">
        <!--标头导航-->
        <van-row type="flex" justify="center">
            <van-col class="co-box1" span="24">
                <nav-bar></nav-bar>
            </van-col>
        </van-row>
        <!--详情数据-->
        <div style="margin-top: 5px">
            <van-tabs v-model="active" title-active-color="#66c6f2" color="#66c6f2" line-width="5rem">
                <van-tab title="基本信息">
                    <ul class="co-data-box">
                        <li><span style="color: #666">编号</span><span class="co-data-value2">1</span></li>
                        <li><span style="color: #666">名字</span><span class="co-data-value"></span></li>
                        <li><span style="color: #666">所属类型</span><span class="co-data-value">兔子</span></li>
                        <li><span style="color: #666">品种名称</span><span class="co-data-value">家畜类养殖</span></li>
                        <li><span style="color: #666">所在圈舍</span><span class="co-data-value">圈养</span></li>
                        <li><span style="color: #666">养殖人员</span><span class="co-data-value">2019-09-18</span></li>
                        <li><span style="color: #666">养殖方式</span><span class="co-data-value">2019-12-18</span></li>
                        <li><span style="color: #666">出生日期</span><span class="co-data-value">2019-12-18</span></li>
                        <li><span style="color: #666">状态</span><span class="co-data-value">2019-12-18</span></li>
                        <li><span style="color: #666">备注</span></li>
                        <li><span class="co-data-value3">备注信息</span></li>
                    </ul>
                </van-tab>
                <van-tab title="兽药记录"><beast-medicine></beast-medicine></van-tab>
                <van-tab title="免疫记录"><immune></immune></van-tab>
                <van-tab title="饲养记录"><breeding></breeding></van-tab>
                <van-tab title="出栏记录"><out-fence></out-fence></van-tab>
                <van-tab title="屠宰记录"><slaughter></slaughter></van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
    import NavBar from "../../../components/navBar/navBar";
    import BeastMedicine from "./recordPage/beastMedicine";
    import Immune from "./recordPage/immune";
    import Breeding from "./recordPage/breeding";
    import OutFence from "./recordPage/outFence";
    import Slaughter from "./recordPage/slaughter";
    export default {
        name: 'farmingDetailed',
        components: {Slaughter, OutFence, Breeding, Immune, BeastMedicine, NavBar},
        data() {
            return {
                active: 0, // tab选中值
                isShowBacktop: false // 返回顶部是否显示
            }
        },
        methods: {
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
    .co-data-box {
        background-color: white;
        padding: 1rem;
    }
    .co-data-box > li {
        display: flex;
        justify-content: space-between;
        line-height: 1.8rem;
    }
    .co-data-value, .co-data-value2 {
        width: 70%;
        text-align: right;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;

    }
    .co-data-value{
        color: #999;
    }
    .co-data-value2 {
        color: #369aff;
        font-size: 1.2rem;
    }
    .co-data-value3 {
        display: -webkit-box;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
        word-break: break-all;
        text-align: left;
        color: #999;
        text-indent: 2em;
    }
</style>

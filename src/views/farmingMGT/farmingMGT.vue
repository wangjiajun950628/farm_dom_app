<template>
    <div class="co-main">
        <!--标头导航-->
        <van-row type="flex" justify="center">
            <van-col class="co-box1" span="24">
                <nav-bar></nav-bar>
            </van-col>
        </van-row>
        <!--搜索框-->
        <van-row type="flex" justify="center">
            <van-col class="co-box2" span="24">
                <van-sticky :offset-top="46">
                    <van-search
                            v-model="searchValue"
                            placeholder="请根据条件进行搜索"
                            show-action
                            shape="round"
                            @search="onSearch">
                        <div slot="action" @click="onSearch">搜索</div>
                    </van-search>
                </van-sticky>
            </van-col>
        </van-row>
        <!--条件查询-->
        <!--<van-row type="flex" justify="center">-->
            <!--<van-col class="co-box2" span="24">-->
                <!--<van-dropdown-menu>-->
                    <!--<van-dropdown-item v-model="conditions" :options="option1" />-->
                <!--</van-dropdown-menu>-->
            <!--</van-col>-->
        <!--</van-row>-->
        <!--列表数据-->
        <div style="margin-top: 5px">
            <van-row type="flex" justify="center">
                <van-col class="co-box2" span="23">
                    <van-list
                            v-model="loading"
                            :finished="finished"
                            finished-text="没有更多了"
                            @load="onLoad">
                        <el-card class="box-card" :body-style="{ padding: '10px' }" v-for="item in dataList" :key="item.id" shadow="never">
                            <!--展示数据-->
                            <div class="co-data-info-box" @click="toPage(item)">
                                <ul class="co-data-box">
                                    <li><span style="color: #666">作物名称</span><span class="co-data-value2">草莓</span></li>
                                    <li><span style="color: #666">编号</span><span class="co-data-value">{{item.id}}</span></li>
                                    <li><span style="color: #666">农事类型</span><span class="co-data-value">{{item.type}}</span></li>
                                    <li><span style="color: #666">操作</span><span class="co-data-value">土壤处理</span></li>
                                    <li><span style="color: #666">操作人</span><span class="co-data-value">李四</span></li>
                                    <li><span style="color: #666">状态</span><span class="co-data-value">结束</span></li>
                                </ul>
                            </div>
                        </el-card>
                    </van-list>
                </van-col>
            </van-row>
        </div>
        <!--新建按钮-->
        <div style="width: 100%;height: 50px">
            <van-row type="flex" justify="center">
                <van-col class="co-box2" span="24">
                    <div class="co-btn-box">
                        <div style="padding: .5rem">
                            <el-button type="primary" style="width: 100%" @click="toCreatePage('farmingForm')">新建</el-button>
                        </div>
                    </div>
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
        name: 'basePage',
        components: {CoBacktop, NavBar},
        data() {
            return {
                popupIsShow: false, // 弹框是否显示
                conditions: 0, // 条件选中值
                searchValue: '', // 搜索框值
                loading: false, // 是否加载
                finished: false, // 是否加载完毕
                dataId: null,
                option1: [
                    { text: '作物名称', value: 0 },
                    { text: '操作人', value: 1 },
                    { text: '编号', value: 2 }
                ], // 条件配置
                dataList: [
                    {
                        id: 1,
                        title: '草莓',
                        type: '记录'
                    },
                    {
                        id: 2,
                        title: '草莓',
                        type: '计划'
                    }
                ], // 数据结合
                minHour: 10,
                maxHour: 20,
                minDate: new Date(),
                maxDate: new Date(2019, 10, 1),
                currentDate: new Date()
            }
        },
        mounted () {
        },
        methods: {
            // 数据加载
            onLoad () {
                // 异步更新数据
                setTimeout(() => {
                    for (let i = 0; i < 10; i++) {
                        this.dataList.push(this.dataList.length + 1);
                    }
                    // 加载状态结束
                    this.loading = false;

                    // 数据全部加载完成
                    if (this.dataList.length >= 40) {
                        this.finished = true;
                    }
                }, 500);
            },
            // 搜索功能
            onSearch () {},
            // 新增页面
            toCreatePage () {
                // 新增页面跳转
                this.$router.push({
                    name: 'farmingMGTCreate'
                })
            },
            // 详细页面跳转
            toPage (data) {
                // 农事记录页面跳转
                this.$router.push({
                    name: 'farmingRecord',
                    query: {
                        id: data.id
                    }
                })
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
    .box-card {
        margin-bottom: .5rem;
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
    .co-data-value, .co-data-value2 {
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
    .co-btn-box {
        width: 100%;
        position: fixed;
        bottom: 0;
    }
</style>

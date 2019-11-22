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
                        <el-card class="box-card" :body-style="{ padding: '10px' }" v-for="item in dataList" :key="item" shadow="never">
                            <!--展示数据-->
                            <div class="co-data-info-box" @click="toPage(item)">
                                <ul class="co-data-box">
                                    <li><span style="color: #666">品种名称</span><span class="co-data-value2">兔子</span></li>
                                    <li><span style="color: #666">编号</span><span class="co-data-value">{{item}}</span></li>
                                    <li><span style="color: #666">养殖区</span><span class="co-data-value">兔子</span></li>
                                    <li><span style="color: #666">养殖类型</span><span class="co-data-value">家畜类养殖</span></li>
                                    <li><span style="color: #666">养殖方式</span><span class="co-data-value">圈养</span></li>
                                    <li><span style="color: #666">出生时间</span><span class="co-data-value">2019-09-18</span></li>
                                    <li><span style="color: #666">宰杀时间</span><span class="co-data-value">2019-12-18</span></li>
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
                            <el-button type="primary" style="width: 100%" @click="toCreateData">新建</el-button>
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
        name: 'farmingPage',
        components: {CoBacktop, NavBar},
        data() {
            return {
                conditions: 0, // 条件选中值
                searchValue: '', // 搜索框值
                loading: false, // 是否加载
                finished: false, // 是否加载完毕
                option1: [
                    { text: '养殖区', value: 0 },
                    { text: '养殖物种名称', value: 1 },
                    { text: '编号', value: 2 }
                ], // 条件配置
                dataList: [] // 数据集合
            }
        },
        mounted () {},
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
            // 详细页面跳转
            toPage (id) {
                this.$router.push({
                    name: 'farmingDetailed',
                    query: {
                        id: id
                    }
                })
            },
            // 创建数据
            toCreateData () {
                // 跳转到创建数据页面
                this.$router.push({
                    name: 'farmingCreate'
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

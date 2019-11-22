<template>
    <div class="co-main">
        <!--标头导航-->
        <van-row type="flex" justify="center">
            <van-col class="co-box1" span="24">
                <nav-bar></nav-bar>
            </van-col>
        </van-row>
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
                                    <li><span style="color: #666">种植作物</span><span class="co-data-value2">{{item.title}}</span></li>
                                    <li><span style="color: #666">日期</span><span class="co-data-value">{{dateTime}}</span></li>
                                    <li><span style="color: #666">农事类型</span><span class="co-data-value">{{item.type}}</span></li>
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
        <van-row type="flex" justify="center">
            <van-col class="co-box2" span="24">
                <div style="height: 100px">
                    <div class="co-btn-box">
                        <div style="padding-left: 1rem; padding-right: 1rem; padding-bottom: .4rem">
                            <el-button type="success" style="width: 100%" @click="toCreatePlan">新建计划</el-button>
                        </div>
                        <div style="padding-left: 1rem; padding-right: 1rem; padding-bottom: .5rem">
                            <el-button type="success" style="width: 100%" @click="toCreateRecord">新建记录</el-button>
                        </div>
                    </div>
                </div>
            </van-col>
        </van-row>
        <!--返回顶部-->
        <co-backtop :bottom="7"></co-backtop>
    </div>
</template>

<script>
    import NavBar from "../../components/navBar/navBar";
    import CoBacktop from "../../components/backtop/coBacktop";
    import { hasOneOf } from '../../utils/tools'
    export default {
        name: 'farmingRlPage',
        components: { CoBacktop, NavBar },
        data() {
            return {
                loading: false,
                finished: false,
                dateTime: this.$route.query.dateTime,
                popPlanIsShow: false, // 农事类型为计划的是否显示弹框
                popRecordIsShow: false, // 农事类型为记录的是否显示弹框
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
                ] // 数据集合
            }
        },
        mounted () {
            // 用于做测试交互效果而写的代码
            const data = [ '2019-09-10', '2019-09-22', '2019-09-23' ]
            if (!hasOneOf(data, this.$route.query.dateTime)) {
                this.dataList = []
                this.loading = false;
                this.finished = true;
            }
        },
        methods: {
            // 列表加载
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
            // 页面跳转
            toPage (data) {
                if (data.type === '记录' ) {
                    // 农事记录页面跳转
                    this.$router.push({
                        name: 'farmingRecord',
                        query: {
                            id: data.id
                        }
                    })
                } else {
                    // 农事计划页面跳转
                    this.$router.push({
                        name: 'farmingPlan',
                        query: {
                            id: data.id
                        }
                    })
                    // 提交状态
                    this.$store.commit('setReadOnly', true)
                    this.$store.commit('setIsRepeatRadio', false)
                }
            },
            // 计划页面跳转
            toCreatePlan () {
                // 跳转页面
                this.$router.push({
                    name: 'farmingPlan'
                })
                // 提交状态
                this.$store.commit('setReadOnly', false)
                this.$store.commit('setIsRepeatRadio', true)
            },
            // 记录页面跳转
            toCreateRecord () {
                // 跳转页面
                this.$router.push({
                    name: 'farmingRecord'
                })
                // 提交状态
                this.$store.commit('setReadOnly', false)
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

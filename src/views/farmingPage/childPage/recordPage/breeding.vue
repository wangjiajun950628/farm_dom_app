<template>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                :direction="direction"
                @load="onLoad">
            <el-card class="box-card" :body-style="{ padding: '10px' }" v-for="item in dataList" :key="item" shadow="never">
                <van-row gutter="20">
                    <van-col span="24">
                        <div class="co-data-list-box">
                            <span>饲料名称：</span><span class="co-data-value">测试0827777</span>
                        </div>
                    </van-col>
                    <van-col span="12">
                        <div class="co-data-list-box">
                            <span>禽畜状态：</span><span class="co-data-value">健康</span>
                        </div>
                    </van-col>
                    <van-col span="12">
                        <div class="co-data-list-box">
                            <span>总用量：</span><span class="co-data-value"></span>
                        </div>
                    </van-col>
                    <van-col span="12">
                        <div class="co-data-list-box">
                            <span>生产日期：</span><span class="co-data-value">2019-09-23</span>
                        </div>
                    </van-col>
                    <van-col span="12">
                        <div class="co-data-list-box">
                            <span>有效日期：</span><span class="co-data-value">2019-09-23</span>
                        </div>
                    </van-col>
                    <van-col span="24">
                        <div class="co-data-list-box">
                            <span>开始使用时间：</span><span class="co-data-value">2019-09-23</span>
                        </div>
                    </van-col>
                    <van-col span="24">
                        <div class="co-data-list-box">
                            <span>结束使用时间：</span><span class="co-data-value">2019-09-23</span>
                        </div>
                    </van-col>
                    <van-col span="24">
                        <div class="co-data-list-box">
                            <span>操作员：</span><span class="co-data-value">王五</span>
                        </div>
                    </van-col>
                    <van-col span="24">
                        <div class="co-data-list-box">
                            <span>备注：</span><span class="co-data-value"></span>
                        </div>
                    </van-col>
                </van-row>
            </el-card>
        </van-list>
        <!--返回顶部-->
        <co-backtop></co-backtop>
    </van-pull-refresh>
</template>

<script>
    import CoBacktop from "../../../../components/backtop/coBacktop";
    export default {
        name: 'breeding',
        components: {CoBacktop},
        data() {
            return {
                isLoading: false, // 是否在加载中
                direction: 'down', // 加载类型
                loading: false, // 是否加载
                finished: false, // 是否加载完毕
                dataList: [] // 数据集合
            }
        },
        mounted () {},
        methods: {
            // 下拉加载数据
            onRefresh () {
                setTimeout(() => {
                    this.isLoading = false;
                    this.dataList.length = 5
                    this.finished = false
                }, 500);
            },
            // 上拉加载数据
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
            toPage () {}
        }
    }
</script>

<style scoped>
    .co-info-label {
        font-size: 1rem;
        line-height: 1.8rem;
        padding-bottom: .5rem;
    }
    .co-info-title, .co-info-label {
        text-align: left;
    }
    .co-data-list-box {
        color: #323233;
    }
    .co-data-list-box {
        display: flex;
        justify-content: space-between;
        text-align: left;
    }
    .co-data-list-box > span {
        line-height: 2rem;
    }
    .co-data-value {
        color: #999;
        width: 50%;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        text-align: right;
    }
</style>

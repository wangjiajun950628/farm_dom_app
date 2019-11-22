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
                            @search="onSearch"
                    >
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
                            <!--图片信息-->
                            <div class="co-image-box" @click="toPage(item)">
                                <span :style="{'background-image': 'url('+ image1 +')'}"></span>
                                <!--字段信息-->
                                <div class="co-data-info">
                                    <ul class="co-data-box">
                                        <li class="co-data-li"><span style="color: #369aff;">水稻{{item}}</span></li>
                                        <li class="co-data-li"><span>种植面积</span><span style="color: #999">{{item}}亩</span></li>
                                        <li class="co-data-progress"><van-progress pivot-text="50天" :percentage="50" /></li>
                                        <li class="co-data-li"><span>2019/09/18</span><span>2019/09/20</span></li>
                                    </ul>
                                </div>
                            </div>
                        </el-card>
                    </van-list>
                </van-col>
            </van-row>
        </div>
        <!--新建按钮-->
        <van-row type="flex" justify="center">
            <van-col class="co-box2" span="24">
                <div style="height: 50px">
                    <div class="co-btn-box">
                        <div style="padding-left: 1rem; padding-right: 1rem; padding-bottom: .4rem">
                            <el-button type="success" style="width: 100%" @click="toCreateArchives">添加档案</el-button>
                        </div>
                    </div>
                </div>
            </van-col>
        </van-row>
        <!--返回顶部-->
        <co-backtop :bottom="3"></co-backtop>
    </div>
</template>

<script>
    import NavBar from "../../components/navBar/navBar";
    import xm from '../../assets/image/xiaomai.jpg'
    import CoBacktop from "../../components/backtop/coBacktop";
    export default {
        name: 'plantingPage',
        components: {CoBacktop, NavBar},
        data() {
            return {
                conditions: 0, // 条件选中值
                image1: xm, // 暂时用于图片显示的属性
                searchValue: '', // 搜索框值
                loading: false, // 是否加载
                finished: false, // 是否加载完毕
                option1: [
                    { text: '地块名称', value: 0 },
                    { text: '种植作物名称', value: 1 }
                ], // 条件配置
                dataList: [] // 数据集合
            }
        },
        mounted () {},
        methods: {
            // 页面跳转
            toPage (id) {
                // 页面跳转
                this.$router.push({
                    name: 'plantingDetailed',
                    query: {
                        id: id
                    }
                })
            },
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
            // 页面跳转
            toCreateArchives () {
                // 跳转到添加档案页面
                this.$router.push({
                    name: 'createPlantingPage'
                })
            },
            // 搜索方法
            onSearch () {
                console.log(this.searchValue)
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
    .co-image-box {
        width: 100%;
        height: 100%;
        position: relative;
        display: flex;
        flex-flow: row;
    }
    .co-image-box > span {
        display: block;
        width: 5rem;
        height: 5rem;
        background-size: 100% 100%;
        border-radius: 50%;
        border: 4px solid #CCDF93;
    }
    .co-data-info {
        width: 70%;
        height: 100%;
        display: flex;
        flex-flow: row;
    }
    .co-data-box {
        width: 100%;
        height: 100%;
        margin-left: 1rem;
    }
    .co-data-box > li {
        width: 100%;
        line-height: 1.5rem;
    }
    .co-data-li {
        display: flex;
        justify-content: space-between;
    }
    .co-data-progress {
        margin-top: 1rem;
        margin-bottom: .5rem;
    }
    .co-btn-box {
        width: 100%;
        position: fixed;
        bottom: 0;
    }
</style>

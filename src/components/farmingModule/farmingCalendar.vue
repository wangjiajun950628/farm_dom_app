<template>
    <div class="co-box">
        <inlineCalendar :dayClick="openFarmingInfo"  mode="multiple" :defaultDate="dataList">
            <!-- 自定义日期中内容 -->
            <template v-slot:day="scope">
            </template>
        </inlineCalendar>
    </div>
</template>

<script>
    import moment from 'moment'
    export default {
        name: 'farmingCalendar',
        props: {
            // 日历数据
            dataList: {
                type: Array,
                default: []
            }
        },
        data() {
            return {
                popIsShow: false, // 农事弹框是否显示
            }
        },
        computed: {},
        mounted () {},
        methods: {
            // 查询农事信息
            openFarmingInfo (data) {
                // 农事日历列表页面
                this.$router.push({
                    name: 'farmingRlPage',
                    query: {
                        dateTime: moment(data.$d).format('YYYY-MM-DD')
                    }
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .co-box {
        background-color: white;
        padding: .5rem;
    }
    .point {
        display: block;
        background-color: red;
    }
    .m-toolbar {
        background-color: white;
    }
</style>

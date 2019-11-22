<template>
    <!--弹框信息-->
    <van-popup v-model="popIsShow" position="bottom" :style="{ width: '100%' }">
        <van-datetime-picker
                v-model="currentDate"
                type="datetime"
                :min-date="minDate"
                :max-date="maxDate"
                @confirm="confirmDateInfo"
                @cancel="closeDatePop"
        />
    </van-popup>
</template>

<script>
    import { mapGetters } from 'vuex'
    import moment from 'moment'
    export default {
        name: 'data-time',
        data() {
            return {
                minDate: new Date(2019, 1, 31),
                maxDate: new Date(2020, 12, 31),
                currentDate: new Date()
            }
        },
        computed: {
            ...mapGetters({
                getPopShow: 'getPopIsShow'
            }),
            // 日期弹框是否显示
            popIsShow: {
                get () { return this.getPopShow },
                set () { this.$store.commit('setPopIsShow', false) }
            }
        },
        methods: {
            // 确认日期
            confirmDateInfo (value) {
                // 提交数据给父组件
                this.$emit('setDate',  moment(value).format('YYYY-MM-DD HH:mm'))
                // 更改状态
                this.$store.commit('setPopIsShow', false)
            },
            // 关闭日期弹框
            closeDatePop () {
                // 更改状态
                this.$store.commit('setPopIsShow', false)
            }
        },
        destroyed() {
            // 更改状态
            this.$store.commit('setPopIsShow', false)
        }
    }
</script>

<style scoped>

</style>

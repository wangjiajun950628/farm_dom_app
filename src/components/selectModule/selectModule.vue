<template>
    <!--弹框信息-->
    <van-popup v-model="popIsShow" position="bottom" :style="{ width: '100%' }">
        <van-picker
                show-toolbar
                :columns="columns"
                @cancel="onCancel"
                @confirm="onConfirm"
        />
    </van-popup>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: 'selectModule',
        props: {
            columns: {
                type: Array,
                default: ['杭州', '宁波', '温州', '嘉兴', '湖州']
            }
        },
        data() {
            return {}
        },
        computed: {
            ...mapGetters({
                getPopShow: 'getSelectPopShow'
            }),
            // 日期弹框是否显示
            popIsShow: {
                get () { return this.getPopShow },
                set () { this.$store.commit('setSelectPopShow', false) }
            }
        },
        methods: {
            onConfirm(value) {
                this.$emit('setData', value)
                this.$store.commit('setSelectPopShow', false)
            },
            onCancel () {
                this.$store.commit('setSelectPopShow', false)
            }
        }
    }
</script>

<style scoped>

</style>

// 农事日历相关状态管理
export default {
    state: {
        isRepeatRadio: false, // 是否重复单选按钮字段是否显示
        readOnly: false // 是否只读
    },
    mutations: {
        // 设置是否重复单选按钮状态
        setIsRepeatRadio (state, value) {
            state.isRepeatRadio = value
        },
        // 设置是否只读
        setReadOnly (state, value) {
            state.readOnly = value
        }
    },
    getters: {
        // 获取是否重复单选按钮状态
        getIsRepeatRadio: state => {
            return state.isRepeatRadio
        },
        // 获取只读状态
        getReadOnly: state => {
            return state.readOnly
        }
    },
    actions: {}
}

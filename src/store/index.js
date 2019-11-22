import Vue from 'vue'
import Vuex from 'vuex'
import farmingRlPage from './module/farmingRlPage'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navIsShow: false,
    popIsShow: false,
    datePopIsShow: false,
    selectPopShow: false,
    selectData: '',
    fromName: '' // 上一页路由名称
  },
  mutations: {
    // 设置底部导航是否显示
    setNavIsShow (state, value) {
      state.navIsShow = value
    },
    // 设置下拉弹框是否显示
    setSelectPopShow (state, value) {
      state.selectPopShow = value
    },
    // 设置需求弹框是否显示
    setPopIsShow (state, value) {
      state.popIsShow = value
    },
    // 设置下拉弹框值
    setSelectData (state, value) {
      state.selectData = value
    },
    // 设置日期弹框是否显示
    setDatePopIsShow (state, value) {
      state.datePopIsShow = value
    },
    // 设置上一页路由名字
    setFromName (state, value) {
      state.fromName = value
    }
  },
  getters: {
    // 获取底部导航是否显示的值
    getNavIsShow: state => {
      return state.navIsShow
    },
     // 获取下拉框是否显示
    getSelectPopShow: state => {
      return state.selectPopShow
    },
    // 获取下拉弹框值
    getSelectData: state => {
      return state.selectData
    },
    // 获取需求弹框是否显示的值
    getPopIsShow: state => {
      return state.popIsShow
    },
    // 获取日期弹框是否显示值
    getDatePopIsShow: state => {
      return state.datePopIsShow
    },
    // 获取上一页路由名字
    getFormName: state => {
      return state.fromName
    }
  },
  actions: {
  },
  modules: {
    farmingRlPage // 农事日历状态管理
  }
})

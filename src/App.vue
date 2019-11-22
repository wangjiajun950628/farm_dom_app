<template>
  <div id="app">
    <router-view/>
    <div class="co-nav-box" v-show="navIsShow">
      <van-tabbar v-model="active" :route="true">
        <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item to="" icon="manager">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'App',
    data () {
      return {
        active: 0, // 底部导航选中值
      }
    },
    computed: {
      ...mapGetters({
        getNavShow: 'getNavIsShow'
      }),
      // 底部导航是否显示
      navIsShow () {
        return this.getNavShow
      }
    }
  }
</script>

<style>
  #app {
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
  .co-nav-box {
    position: relative;
    height: 50px;
  }
</style>

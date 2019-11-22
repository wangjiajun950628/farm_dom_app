// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'vant/lib/index.css'
import 'vant/lib/icon/local.css'
import 'element-ui/lib/theme-chalk/index.css'
// 日历插件
import Calendar from 'vue-mobile-calendar'
// vant的ui组件按需引入
import {
  Row,
  Cell,
  CellGroup,
  Col,
  DropdownMenu,
  DropdownItem,
  DatetimePicker,
  Grid,
  GridItem,
  Tab,
  Tabs,
  Tabbar,
  TabbarItem,
  Toast,
  Icon,
  Lazyload,
  List,
  Popup,
  Progress,
  Picker,
  PullRefresh,
  Swipe,
  SwipeItem,
  Sticky,
  Search,
  NavBar
} from 'vant'
// element的ui组件按需引入
import {
  Button,
  ButtonGroup,
  Badge,
  Backtop,
  Card,
  DatePicker,
  Select,
  Option,
  Form,
  FormItem,
  Timeline,
  TimelineItem,
  Radio,
  RadioGroup,
  Input,
  Upload
} from 'element-ui'
// vant的ui组件按需引入
Vue.use(Row).use(Col)
Vue.use(Cell).use(CellGroup)
Vue.use(DropdownMenu).use(DropdownItem)
Vue.use(DatetimePicker)
Vue.use(Grid).use(GridItem)
Vue.use(Tab).use(Tabs)
Vue.use(Tabbar).use(TabbarItem)
Vue.use(Toast)
Vue.use(Icon)
Vue.use(Lazyload)
Vue.use(List)
Vue.use(Popup)
Vue.use(Progress)
Vue.use(Picker)
Vue.use(PullRefresh)
Vue.use(Swipe).use(SwipeItem)
Vue.use(Search)
Vue.use(Sticky)
Vue.use(NavBar)
// element的ui组件按需引入
Vue.use(Button).use(ButtonGroup)
Vue.use(Badge)
Vue.use(Backtop)
Vue.use(Card)
Vue.use(DatePicker)
Vue.use(Select).use(Option)
Vue.use(Form).use(FormItem).use(Input)
Vue.use(Timeline).use(TimelineItem)
Vue.use(Radio).use(RadioGroup)
Vue.use(Upload)
// 挂载日历插件
Vue.use(Calendar)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

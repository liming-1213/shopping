import Vue from 'vue'
import App from './App'
import router from './router'

// 导入Mint UI
import MintUI from 'mint-ui';
// 导入mint-ui的css样式文件
import 'mint-ui/lib/style.css'
Vue.use(MintUI);
// 导入MUI的css样式文件
import '@/lib/mui/css/mui.min.css'
import '@/lib/mui/css/icons-extra.css'

// 导入axios
import axios from 'axios'
//在Vue原型上添加axios
Vue.prototype.$axios = axios
// 配置全局的baseURl
axios.defaults.baseURL = 'http://www.liulongbin.top:3005'

// 导入moment.js 格式化时间
import moment from 'moment'
// 设置全局过滤器格式化时间
Vue.filter('dateFormat', function(dataStr, pattern="YYYY-MM-DD hh:mm:ss") {
  return moment(dataStr).format(pattern)
})

// 导入VuePreview
import VuePreview from 'vue-preview'
// defalut install
Vue.use(VuePreview)

// 导入 store
import { store } from '@/store.js'

// 设置进入页面时的滚轴位置
router.afterEach((to, from) => {
  window.scrollTo(0, 0)
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

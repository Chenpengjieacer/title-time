import Vue from 'vue'
import App from './App.vue'
import router from './router/router'//引入 路由
import store from './store/store' //引入vuex 仓库
import './styles/rest.css' //引入全局css样式
// import './utils/rem' //引入 页面css 字体大小 使用各种大小移动端 自动转换对应px 上线后使用
import AppScroll from './components/app-scroll'

//引入UI组件 vant 全局使用----------------------------------------------
import Vant from 'vant';
import 'vant/lib/index.css'
Vue.use(Vant);

//引入公共组件 -------------------------------------------------------------
// beeter-scroll 上下拉滚动
import BScroll from './components/componentsPublic/Scroll.vue'
// 轮播图（容器）
import Swiper from './components/componentsPublic/swiper.vue'
// 轮播图（内容）
import SwiperItem from './components/componentsPublic/swiperitem.vue'



//全局使用封装好的公共组件--------------------------------------------------------------
Vue.component(BScroll.name, BScroll)
Vue.component(Swiper.name, Swiper)
Vue.component(SwiperItem.name, SwiperItem)




import http from './utils/http' //引入 axios 封装 http------------------------------------------------
Vue.prototype.$http = http //创建一个原型链原型 $http 调用方法this.$http.get().post()
// store仓库的原型链和Vue不相同，需要重新定义

Vue.config.productionTip = false //关闭开发提示
Vue.component(AppScroll.name, AppScroll);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

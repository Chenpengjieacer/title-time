import Vue from 'vue'
import Vuex from 'vuex'

import http from "../utils/http";
Vuex.Store.prototype.$http = http; //封装 aixos 原型链调用 仓库全局可用

Vue.use(Vuex)


import list from './list/list'
import login from './login/index'
const store = new Vuex.Store({
  modules: {
    //仓库小模块
    list,
    login
  }
});

//总仓库
export default store;

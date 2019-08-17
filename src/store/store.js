import Vue from 'vue'
import Vuex from 'vuex'

import http from "../utils/http";
Vuex.Store.prototype.$http = http; //封装 aixos 原型链调用 仓库全局可用

Vue.use(Vuex)

 //测试仓库样本 按此样本写入样式 后续可删
import list from './list/list'
const store = new Vuex.Store({
  modules: {
    //仓库小模块
     //测试仓库样本 按此样本写入样式 后续可删
    list
  }
});

//总仓库
export default store;

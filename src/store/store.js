import Vue from 'vue'
import Vuex from 'vuex'

import http from "../utils/http";
Vuex.Store.prototype.$http = http; //封装 aixos 原型链调用 仓库全局可用

Vue.use(Vuex)

import text from './test/test' //测试仓库样本 按此样本写入样式 后续可删
export default new Vuex.Store({
  modules: { //仓库小模块
    text, //测试仓库样本 按此样本写入样式 后续可删
  }
});
//总仓库

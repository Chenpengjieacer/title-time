import axios from 'axios'; //引入 axios

const http = axios.create(); //创建axios实例
http.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'http://' : 'http://localhost:9000'; //配置 使用 路径url 前缀  production 是否上线版 是的话使用 第一个
//开发环境则使用 http://localhost:9000  有利于上线之后不必修改请求路径
http.defaults.timeout = 10000; //请求数据超时时间 10秒

http.interceptors.response.use((response)=>{
  return response.data //可以直接获取请求路径 data
})

export default http;

import axios from 'axios'; //引入 axios

const http = axios.create(); //创建axios实例
http.defaults.baseURL =
  process.env.NODE_ENV === "production"
    ? "http://47.94.250.146"
    : "http://47.94.250.146"; //配置 使用 路径url 前缀  production 是否上线版 是的话使用 第一个
//开发环境则使用 http://localhost:9000  有利于上线之后不必修改请求路径
http.defaults.timeout = 10000; //请求数据超时时间 10秒
http.defaults.withCredentials = true;
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded"; //设置全局请求头post参数

  // axios.defaults.headers.common["Authorization"] = xxxxx.get('token');

  /* 请求拦截器 */
axios.interceptors.request.use(function (config) { // 每次请求时会从localStorage中获取token
    let token = JSON.parse(localStorage.getItem('token'))
    if (token) {
        token = 'bearer' + ' ' + token.replace(/'|"/g, '') // 把token加入到默认请求参数中  未实现！！！！
        config.headers.common['Authorization'] = token
    }
    console.log(token)
    return config
}, function (error) {
    return Promise.reject(error)
})

http.interceptors.response.use((response)=>{
    // response.headers.permission = Cookie.get("token");
    return response.data;
  // return response.data //可以直接获取请求路径 data
})


export default http;

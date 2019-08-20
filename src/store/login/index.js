import { stringify } from "querystring";

const state = {
  num:'',
  oker:false,

};

const getters = {


};

const mutations = {
    addnum(state,val){
      state.num = val
    },
    addoker(state,val){
      state.oker = val

    },
    addno(state){
      state.noer = false
    }
};

const actions = {
  getphone({state,commit},phone){
    let  data = {"phone":phone}
    this.$http
      .post("/home/getcode/", stringify(data), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },

      })
      .then(res => {
        if (res.code === 0) {
          let str = res.vcode;
          commit("addnum", str);
        }
      });
  },

  setpass({state,commit},val){
    let data = {"phone":val.val,"code":val.num}
      this.$http
        .post("/home/login/", stringify(data), {
          HOST:"http://47.94.250.146",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },

        })
        .then(res => {
          if (res.code === 0) {
            let str = true;
            commit("addoker", str);
          } else {
            console.log("手机或者验证码错误");
          }
        });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};


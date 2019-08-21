import { stringify } from "querystring";

// import Cookie from "js-cookie"
const state = {
  num:'',
  oker:false,

};

const getters = {


};

const mutations = {
  addnum(state, val) {
    state.num = val;
  },
  addoker(state) {
    state.oker = true;

  },
  addno(state) {
    state.noer = false;
  },

};

const actions = {
  getphone({state,commit},phone){
    let  data = {"phone":phone}
    this.$http
      .post("/home/getcode/", stringify(data), {
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
        })
        .then(res => {
          if (res.code === 0) {
            commit("addoker");
            localStorage.setItem("token", res.token);
            localStorage.setItem("phone", val.val);

          } else {
            console.log("手机或者验证码错误");
          }
        });
  },

};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};


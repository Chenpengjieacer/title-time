const state = {
  list: []
};

const getters = {};

const mutations = {
  addlist(state,res){
    let data = res.map(item => ({
      sadr: item.sadr,
      sname: item.sname,
      img: item.img[0],
      sres: item.sres
    }));
    console.log(data)
    state.list = data;
  }
};

const actions = {
  addlistaction({ state, commit }) {
    this.$http.get("/list").then(res => {
      console.log(res.data.slice(0,20));
      let str = res.data.slice(0, 20);
      commit("addlist",str);
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
//测试仓库样本 按此样本写入样式 后续可删

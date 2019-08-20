<template>
  <div id="my">
    <div class="my-top">
      <div class="top-bgm"></div>
      <span class="top-img">
        <img src alt />
        <span>点击编辑信息</span>
      </span>
    </div>
    <div class="my-bot">
      <div class="ulbox">
        <ul>
          <li v-for="(item,index) in datalist" :key="index">
            <span></span>
            <router-link :to="item.path" ><p>{{item.name}}</p></router-link>
          </li>
        </ul>
      </div>
    </div>
     <router-view></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return{
      datalist:[
        {id:1,name:'美好生活PASS卡',path:'/'},
        {id:2,name:'发布小店',path:'/'},
        {id:3,name:'我的订单',path:'/'},
        {id:4,name:'收藏',path:'/'},
        {id:5,name:'意见反馈',path:'/'},
        {id:6,name:'设置',path:'/my/setting'},
      ]
    }
  },
  methods:{
    // outlogin(){
    //   localStorage.removeItem('user')
    // }
  },

  mounted(){
    //   this.$http('home/mine/orderlist/')
    // .then(res => {
    //   console.log(res)
    // })
  }
};
</script>

<style lang="scss" scoped>
#my {
  width: 100vw;
  height: 100vh;

  .my-top {
    position: relative;
    width: 375px;
    height: 146px;
    line-height: 20px;
    background-color: rgba(157, 157, 157, 1);
    text-align: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0);
    .top-bgm {
      position: absolute;
      top: 78px;
      left: 22px;
      width: 329px;
      height: 124px;
      line-height: 20px;
      border-radius: 10px;
      background-color: rgba(229, 229, 229, 1);
      color: rgba(16, 16, 16, 1);
      font-size: 14px;
      text-align: justify;
      font-family: Arial;
      border: 1px solid rgba(255, 255, 255, 0);
    }
    .top-img {
      position: absolute;
      left: 150px;
      top: 59px;
      width: 74px;
      height: 74px;
      line-height: 20px;
      text-align: center;
      border: 1px solid rgba(255, 255, 255, 0);
      background: #ffffff;
      border-radius: 50%;

      span {
        position: absolute;
        top: 82px;
        left: 0;
        font-size: 12px;
      }
    }
  }
  .my-bot {
    width: 375px;
    height: 470px;
    line-height: 20px;
    background-color: rgba(198, 197, 197, 1);
    text-align: center;
    .ulbox {

      ul {
        padding-top: 66px;
        box-sizing: border-box;
        li {
          display: inline-block;
          width: 306px;
          height: 55px;
          line-height: 23px;
          border-radius: 10px;
          margin-bottom: 4px;
          background-color: rgba(229, 229, 229, 1);
          color: rgba(85, 84, 84, 1);
          font-size: 16px;
          text-align: justify;
          font-family: Arial;
          border: 1px solid rgba(255, 255, 255, 0);
          position: relative;

          span{
            position: absolute;
            left: -20px;
            top: 5px;
            width: 44px;
            height: 44px;
            line-height: 20px;
            text-align: center;
            background-color: #ffffff;
          }
          p{
            margin-left: 35px;
            height: 55px;
            line-height: 55px;
            color: #000;
          }
        }
      }
    }
  }
}
</style>


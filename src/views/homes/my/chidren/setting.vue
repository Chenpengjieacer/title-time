<template>
  <div class="page pages">

  <p id="footbar" @click="onClickLeft"><van-icon class="icon" name="arrow-left" color="#ffffff" /></p>
    <div class="log">
      <img src="" alt="">
      <p>点击上传</p>
    </div>
    <div class="list">
      <div class="up">
        <h3>基本信息</h3>
        <p>
          <span class="span1">用户名</span>
          <span class="span2">【随风漂流】</span>
        </p>
      </div>
      <div class="cent" v-for="item in datas" :key="item.id">
        <span class="centspan1">{{item.left}}</span>
        <span class="centspan2">{{item.right}}</span>
        </div>
      <div  class="up">
         <h3>更多</h3>
        <p>
          <span class="span1">关于我们</span>
          <span class="span2">》</span>
        </p>
      </div>
      <div  class="cent">
        <span class="centspan1">清除缓存</span>
        <span class="centspan2">113.9MB</span>
      </div>
      <div class="cent">
        <p class="out" @click="outs">退出登录</p>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
      datas:[
        {id:1,left:'签名',right:'添加个性签名'},
        {id:2,left:'邮箱',right:'添加邮箱'},
        {id:3,left:'手机号',right:'绑定手机号'},
      ]
    }
  },

   methods: {
    onClickLeft() {
     this.$router.go(-1)
    },

    outs(){
      localStorage.removeItem('phone')
      localStorage.removeItem('token')
      this.$router.push({path:'/login'})
    }

  }
}
</script>

<style lang="scss" scoped>
#footbar{
    background: #fdb43f;
    height: 40px;
    .icon{
      margin: 10px 0 0 10px
    }
}
.log{
  text-align: center;
  height: 100px;
  background: #fdb43f;
  z-index: 11;
}

.list{
  width: 100%;

  .up{
    height: 100px;
    line-height: 50px;
    margin: 0 10px;
    h3{
      font-size: 14px;
       color: #000;
      opacity: .8;
    }
    p{
    .span1{
      font-size: 16px;
      font-weight: 500;
    }
    .span2{
      float: right;
      color: #000;
      opacity: .5;
    }
    }
  }
  .cent{
    height: 40px;
    border-bottom: 1px solid #ededed;
    line-height: 40px;
    margin: 0 10px;
    .centspan1{

    }
    .centspan2{
      float: right;
      color: #000;
      opacity: .5;
    }
    .out{
      text-align: center;
    }
  }
}
</style>

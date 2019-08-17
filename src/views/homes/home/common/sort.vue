<template>
  <div class="sort">
    <div class="text">
      <p>分类</p>
      <span>想去的地方</span>
    </div>
    <div class="rightround">
      <span class="sp1"></span>
      <span class="sp2"></span>
      <span class="sp3"><router-link to="/togo"><span>...</span></router-link></span>
    </div>
    <div class="imgs">
      <ul>
        <li v-for="(int,index) in 4" :key="index">
          <a href="/eatbar">
          <img src="" alt="">
          </a>
          <span>餐吧</span>
        </li>
      </ul>
    </div>
    <div class="bottext">
      <p>这里有试下最火的小店推荐，快看看你喜欢哪一个生活的真谛就是懂得享受生活</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.sort{
  width: 100%;
  height: 260px;
  .text{
    height: 18px;
    margin: 5px 10px;
    p{
      display: inline-block;
    }
    span{
      float: right;
      font-size: 14px;
    }
  }
  .rightround{
      position: relative;
      height: 42px;
    .sp1{
      display: inline-block;
      height: 40px;
      width: 40px;
      border: 1px solid #6e6868;

      border-radius: 50%;
      background: #fff;
      position: absolute;
      right: 50px;
    }
    .sp2{
      display: inline-block;
      height: 40px;
      width: 40px;
      border: 1px solid #6e6868;

      border-radius: 50%;
      background: #fff;
      position: absolute;
      right: 30px;
    }
    .sp3{
      display: inline-block;
      height: 40px;
      width: 40px;
      border: 1px solid #6e6868;

      border-radius: 50%;
      background: #fff;
      position: absolute;
      right: 10px;
      color: #000;

      span{
        display: inline-block;
        font-size: 24px;
        margin-left: 10px;
         color: #000;
      }
    }
  }
  .imgs{
    height: 120px;
    margin-top: 5px;
    ul{
      display: flex;
      width: 100%;
      height: 100%;
      text-align: center;
    }
    li{
      flex: 25%;
      img{
        display: inline-block;
        background-color: #6e6868;
        height: 80%;
        width: 80%;
      }
      span{
        display: inline-block;
        font-size: 14px;
        font-weight: 500;
        margin-top: 5px;
      }
    }
  }
  .bottext{
    text-align: center;
    font-size: 12px;
    p{
      margin: 10px 30px;
      height: 40px;
      line-height: 20px;
    }
  }
}
</style>


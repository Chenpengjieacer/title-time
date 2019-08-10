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
          <li v-for="(item,index) in 6" :key="index">
            <span></span>
            <router-link to="/login" ><p>123</p></router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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


<template>
  <div class="youlove">
      <div class="lovetext"><p>猜你喜欢</p></div>
      <div class="imgs">
        <ul>
          <li v-for="(item,index) in 4" :key="index">
            <img src="" alt="">
            <div class="imgbot">
            <p>在无酒弹酒馆，与chaplin共享静默时光</p>
            <span>chaplin chaplin bar</span>
            <span>小酒馆</span>
            </div>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.youlove{
  height: 550px;
  width: 100%;

  .lovetext{
    height: 40px;

    p{
      height: 40px;
      line-height: 40px;
      margin-left: 20px;
    }
  }
  .imgs{
    height: 300px;
    width: 100%;
    ul{
    height: 510px;
    width: 100%;

      li{
        width: 50%;
        height: 200px;
        display: inline-block;
        text-align: center;
        margin-bottom: 50px;
        background: #fff;

        img{
          width: 90%;
          height: 80%;
          display: inline-block;
          background-color: #708090;
          border-radius: 10px;
        }
        .imgbot{
          width: 90%;
          height: 80px;
          background-color: #FFFAF0;
          display: inline-block;
          line-height: 20px;
          border-radius: 10%;
          p{
            margin-top: 10px;
            font-size: 14px;
          }
          span{
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>


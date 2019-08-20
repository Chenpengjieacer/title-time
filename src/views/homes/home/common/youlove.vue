<template>
  <div class="youlove">
      <div class="lovetext"><p>猜你喜欢</p></div>
      <div class="imgs">
        <ul>
          <li v-for="(item,index) in 4" :key="index">
            <img src="https://dummyimage.com/160x160/fdb43f&text=Hello" alt="">
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
    height: 650px;
    width: 94%;
    border-radius: 10px;
    box-shadow: 0px 1px 0px 0.5px #ededed;
    margin: 10px 10px;

  .lovetext{
    height: 40px;

    p{
      height: 40px;
      line-height: 40px;
      margin-left: 20px;
    }
  }
  .imgs{
    height: 100%;
    width: 100%;
    ul{
    height: 90%;
    width: 100%;

      li{
        width: 50%;
        height: 240px;
        display: inline-block;
        text-align: center;
        margin-bottom: 60px;
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
          height: 100px;
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


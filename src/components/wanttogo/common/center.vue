<template>
  <div class="togo">
    <ul>
      <li v-for="(item,index) in 10" :key="index">
        <div class="div1"><img src="https://dummyimage.com/40x40/4A7BF7&text=Hello" alt=""></div>
        <div class="div2">
          <p>Rachel Jayson</p>
          <span>Cant't wait to see you!</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.togo{
  width: 100%;
  margin-top: 45px;


  ul{
    width: 100%;
    line-height: 20px;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 20px;

    li{
      display: inline-block;
      width: 358px;
      height: 64px;
      line-height: 20px;
      border-radius: 2px 2px 2px 2px;
      background-color: rgba(250, 250, 250, 1);
      text-align: center;
      box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.24);
      margin: 5px 0;

      .div1{
        float: left;
        width: 64px;
        height: 100%;
        text-align: center;
        line-height: 90px;
        img{
          border-radius: 50%;
        }

      }
      .div2{
        float: left;
        line-height: 20px;
        height: 100%;
        padding-top: 10px;
        box-sizing: border-box;

        p{
          text-align:left;
        }
        span{
          font-size: 12px;
          color:  rgba(0, 0, 0, 0.54);

        }
      }
    }
  }
}
</style>

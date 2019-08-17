<template>
  <div class="shop-center">
    <ul class="shopul">
      <li class="shopli" v-for="(item,index) in 5" :key="index">
          <div class="texttop"><p>咖啡与文化的深度融合</p></div>
          <div><img src="https://dummyimage.com/286x147/4A7BF7&text=Hello" alt=""></div>
          <div class="textbot">
            <p>福田区-【奥义驿站】</p>
            <span><i></i>65人想去</span>
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
.shop-center{
  margin-top: 45px;

  .shopul{
    width: 100%;
    height: 100%;
    background-color: rgba(198, 197, 197, 1);
    text-align: center;
    box-sizing: border-box;
    padding-top: 20px;

    .shopli{
    display: inline-block;
    width: 349px;
    height: 250px;
    line-height: 20px;
    border-radius: 10px;
    background-color: rgba(248, 248, 248, 1);
    text-align: center;
    box-shadow: 0px 1px 3px 0px rgba(170, 170, 170, 1);
    border: 1px solid rgba(255, 255, 255, 0);
    margin-bottom: 20px;

      .texttop{
        padding: 10px 10px;
        p{
          width: 160px;
          height: 22px;
        }
      }

      .textbot{
        font-size: 12px;
        color: rgba(170, 169, 169, 1);
        margin-top: 10px;

        p{
          display: inline-block;
          float: left;
          margin-left: 15px;
        }
        span{
          float: right;
          margin-right: 15px;
          i{

          }
        }
      }
    }
  }
}
</style>
